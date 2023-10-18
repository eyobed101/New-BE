import Game from "../models/games.js";
import Cashier from "../models/cashier.js";
import pkg from "uuidv4";
import Admin from "../models/admin.js";


let shopDetails = [];
let positiveBalancedShop = []
let negativeBalancedShop = []


let remainingTime = 3 * 60;

export const StoreTickets = (request) => {
    shopDetails.push(request);

}




export const Draw = () => {
console.log("Final",shopDetails)
shopDetails = [];

  
}