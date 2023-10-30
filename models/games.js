import mongoose from "mongoose";

const GameSchema = new mongoose.Schema({
  cashierID: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  
  gameNumber: {
    type: Number,
    default: 1000
  },
  date: {
    type: Date,
    required: true,
  },
  result: {
    type: Array,
    
  },
  status: {
    type: String,
    enum: ["Opened", "Closed", "Dummy"],
    default: "Opened",
  },
  profitability: {
    type: String,
    enum: ["Gain", "Loss", "Win"],
    default: "Gain",
  },
  unclaimedMoney: {
    type: Number,
    
  },
  numberOfPlayer:{
    type: Number,
  },

  winner: [
    {
      id: {
        type: String,
        required: true,
      },
      amountWon: {
        type: Number,
        default: 0,
      },
    },
  ],
});

export default mongoose.model("Game", GameSchema);
