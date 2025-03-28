import mongoose from "mongoose";

const adminSchema = new mongoose.Schema({
  superadminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  adminID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true,
  },

  NumberOfShop: {
    type: Number,
    default: 0
  },

  totalIncomeInWeek: {
    type: Number,
    default:0
  },
  currntBalance: {
    type: Number,
    default:0
  },
  currentBalancePersentage: {
    type: Number,
    default:0
  },

  Odd : {
    type : String,
    enum: ["Minimal", "Low", "Moderate", "High", "Maximum"],
    default: "Low", 
  }
  
});

export default mongoose.model('Admin', adminSchema);

