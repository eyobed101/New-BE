import Admin from "../models/admin.js";
import Cashier from "../models/cashier.js";
import User from "../models/users.js";
import bcrypt from "bcrypt";

// Create a new cashier
const createCashier = async (req, res) => {
  try {
    // Extract the required data from the request body
    const {firstname, lastname, email, password , parameter, capital } = req.body;

     // Generate a salt for password hashing
      const salt = await bcrypt.genSalt(10);

       // Hash the password using the generated salt
      const hashedPassword = await bcrypt.hash(password, salt);

    // Create a new user
    const user = new User({
      firstName: firstname,
      lastName:lastname,
      email,
      password: hashedPassword,
      role: "cashier", // Set the role as cashier
    });

    const savedUser = await user.save();

    // Create a new Cashier instance
    const cashier = new Cashier({
        adminID: req.user.sub, // Assuming you have authentication middleware to get the current user
        cashierID: savedUser._id,
        parameter,
        capital,
    });

    // Save the admin to the database
    await cashier.save();

    // Update the admin's NumberoFshop field
    
    await Admin.findOneAndUpdate(
      { adminID: req.user.sub }, // Replace cashierId with the actual ID of the cashier you want to update
      { $inc: { NumberOfShop: 1 } } // Increment the NumberOfGame field by 1
    );

    res.status(201).json({ message: "Cashier created successfully", cashier });
  } catch (error) {
    res.status(500).json({ error: "Failed to create Cashier" });
  }
};

const getAllCashiers = async (req, res) => {
  try {
    const cashiers = await Cashier.find({ adminID: req.user.sub }).populate(
      "cashierID"
    );

    res.status(200).json(cashiers);
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to retrieve Cashiers" });
  }
};


// Other route handlers for admin can be defined similarly

export default { createCashier, getAllCashiers };
