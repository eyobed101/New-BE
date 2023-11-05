import Superadmin from "../models/superAdmin.js" 
import Admin from "../models/admin.js" 
import User from "../models/users.js" 
import bcrypt from "bcrypt";




// Create a new admin
const createAdmin = async (req, res) => {
  const {firstname, lastname, email, password , totalIncomeInWeek, currntBalance,currentBalancePersentage,timeInNegative } = req.body;
  // console.log(req.body)
  try {
    // Extract the required data from the request body
    // KenoAdminTest@123

    //  Generate a salt for password hashing
      const salt = await bcrypt.genSalt(10);

      // Hash the password using the generated salt
      const hashedPassword = await bcrypt.hash(password, salt);


    // Create a new user
    const user = new User({
        firstName: firstname,
        lastName:lastname,
        email,
        password: hashedPassword,
        role: "admin", // Set the role as admin
      });
    
      const savedUser = await user.save();

    // Create a new admin instance
    const admin = new Admin({
      superadminID: req.user.sub, // Assuming you have authentication middleware to get the current user
      adminID: savedUser._id.toString(),
      totalIncomeInWeek: totalIncomeInWeek,
      currntBalance:currntBalance,
      currentBalancePersentage:currentBalancePersentage,
      timeInNegative:timeInNegative
    });

    // Save the admin to the database
    await admin.save();

    // Update the superadmin's NumberOfAdmin field

    await Superadmin.findOneAndUpdate(
      { superadminIDID: req.user.sub }, // Replace superadminID with the actual ID of the cashier you want to update
      { $inc: { NumberOfAdmin: 1 } } // Increment the NumberOfGame field by 1
    );

    res.status(201).json({ message: "Admin created successfully", admin });
  } catch (error) {
    console.log(error)
    res.status(500).json({ error: "Failed to create admin" });
  }
};

const getAllAdmins = async (req, res) => {
  try {
    const admins = await Admin.find({ superadminID: req.user._id }).populate(
      "adminID"
    );

    res.status(200).json(admins);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve admins" });
  }
};

export const updateAdminOddEnum = async (req, res) => {
    try {
      const { adminId, oddEnum } = req.body;
  
      // Find the admin by adminId
      const admin = await Admin.findById(adminId);
  
      if (!admin) {
        return res.status(404).json({ message: "Admin not found" });
      }
  
      // Update the enum values of the "Odd" field
      admin.Odd.enum = oddEnum;
  
      // Save the updated admin to the database
      const updatedAdmin = await admin.save();
  
      res.status(200).json(updatedAdmin);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };
  




// Other route handlers for superadmin can be defined similarly

export default { createAdmin , getAllAdmins};
