import express from "express";
import { Server } from "socket.io";
import http from 'http'
import cors from 'cors'


import { authenticate } from "../services/auth.Services.js";
import AdminFunctions from "../controllers/Admin.Controller.js";
import SuperAdminFunctions from "../controllers/SuperAdmin.Controller.js";
import {
  verifyAdmin,
  verifyCashier,
  verifySuperAdmin,
  verifyToken,
} from "../helpers/jwt.js";
import { Draw, StoreTickets } from "../controllers/Game.Controller.js";
import {
  CheckTicket,
  fetchLastGame,
  getAllEventsByCashier,
  getAllGamesByCashier,
  getGeneralInfoOfCashier,
  getTenGamesByCashier,
} from "../controllers/Cashier.Controller.js";
import { SendValidity } from "../controllers/Token.Controller.js";
import bcrypt from "bcrypt";
import User from "../models/users.js"
import superAdmin from "../models/superAdmin.js";

const app = express();
app.use(cors())
const server = http.createServer(app);
server.listen(4000)
const io = new Server(server)





const router = express.Router();

let acceptingRequests = true;
let remainingTime = 10;
let drawTime = 5;

io.on('connection', (socket) => {
  console.log('A user connected');

  setInterval(() => {
    socket.emit('remainingTime', remainingTime);
    socket.emit('drawTime', drawTime);
  }, 1000);

  socket.on('disconnect', () => {
    console.log('A user disconnected');
  });
});

router.post('/accept', (req, res) => {

  io.emit('remainingTime', formatTime(remainingTime));
  io.emit('drawTime', formatTime(drawTime));

  if (acceptingRequests) {
    StoreTickets(req.body);
    let formattedTime = formatTime(remainingTime);
    console.log('Remaining time:', formattedTime);
    

    res.status(200).json({ message: 'Request accepted', remaining: formattedTime });
  } else {
    res.status(400).json({ message: 'Request not accepted anymore' });
  }
});

function formatTime(timeInSeconds) {
  const minutes = Math.floor(timeInSeconds / 60);
  const seconds = timeInSeconds % 60;
  return `${minutes} minutes ${seconds} seconds`;
}

function processRequests() {
  Draw();
  countdownDraw()
}

function countdown() {
  remainingTime--;
  if (remainingTime <= 0) {
    drawTime = 5;
    acceptingRequests = false;
    processRequests();
  } else {
    setTimeout(countdown, 1000);
  }
}

function countdownDraw() {
  drawTime--;
  if (drawTime <= 0) {
    remainingTime = 10;
    countdown();
    acceptingRequests = true;
  } else {
    setTimeout(countdownDraw, 1000);
  }
}



setTimeout(() => {
  acceptingRequests = false;
  countdown();
}, 1000);



// Routes
router.post("/login", authenticate);

router.get("/validateToken", verifyToken, SendValidity);

router.post("/register", verifySuperAdmin, SuperAdminFunctions.createAdmin);

router.post("/register/cashier", verifyAdmin, AdminFunctions.createCashier);

router.get("/getCashier", verifyAdmin, AdminFunctions.getAllCashiers);

router.post("/api/playKeno/draw", verifyCashier, Draw);

router.get("/getGames", verifyCashier, getAllGamesByCashier);

router.get("/latestGameNumber", verifyCashier, fetchLastGame);

router.post("/checkTicket", verifyCashier, CheckTicket);

router.get("/getTenGames", verifyCashier, getTenGamesByCashier);

router.get("/getGeneral", verifyCashier, getGeneralInfoOfCashier);

router.get("/getEvents", verifyCashier, getAllEventsByCashier);

router.post('/superadmins', async (req, res) => {
  // ET_Keno@101Test
  // Retrieve the necessary data from the request body
  const { firstName, lastName, email, password } = req.body;

  try {
    // Generate a salt for password hashing
    const salt = await bcrypt.genSalt(10);

    // Hash the password using the generated salt
    const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user instance
    const newUser = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword, // Save the hashed password
      role: 'superadmin' // Set the role as 'superadmin' for the new user
    });

    // Save the user to the database
    const savedUser = await newUser.save();

    // Create a new superadmin instance using the saved user's ID
    const newSuperadmin = new superAdmin({
      superadminID: savedUser._id,
      NumberOfAdmin: 0 // Set the number of admins as required
    });

    // Save the superadmin to the database
    await newSuperadmin.save();

    res.status(201).json({ message: 'Superadmin created successfully' });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: 'Error creating superadmin' });
  }
});

// router.get("/current", jwt(), async (req, res, next) => {
//   try {
//     console.log(req);
//     const user = await userServices.getById(req.user.sub);
//     if (user) {
//       res.json(user);
//     } else {
//       res.status(404);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.get("/:id", async (req, res, next) => {
//   try {
//     const user = await userServices.getById(req.params.id);
//     if (!user) {
//       res.status(404).json({ message: "User Not Found!" });
//       next();
//     } else {
//       res.json(user);
//     }
//   } catch (error) {
//     next(error);
//   }
// });

// router.put("/:id", async (req, res, next) => {
//   try {
//     await userServices.update(req.params.id, req.body);
//     res.json({
//       message: `User with id: ${req.params.id} updated successfully.`,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

// router.delete("/:id", async (req, res, next) => {
//   try {
//     await userServices.delete(req.params.id);
//     res.json({
//       message: `User with id: ${req.params.id} deleted successfully.`,
//     });
//   } catch (error) {
//     next(error);
//   }
// });

export default router;
