import React from 'react';
import OddCalculator from './OddCalculator';

//fetch shop_ID total income, current ballance

const shopDetails = [];
// Generate 100 sample objects
for (let i = 0; i < 100; i++) {
  //let totalIncomeInWeek = 0;
  const shop = {
    shop_ID: i, // Increment the shop_ID starting from 5
    totalIncomeInWeek: Math.floor(Math.random() * 5000) + 1000, // Generate a random total income between 1000 and 6000
    currntBalance: Math.floor(Math.random() * 1000), // Generate a random current balance between 100 and 1100
    //currntBalance: totalIncomeInWeek, // Generate a random current balance between 100 and 1100
  };

  shopDetails.push(shop); // Insert the sample object into the array
}

//console.log(shopDetails) // Output the updated array with 100 sample objects

var positiveBalancedShop = [];
var negativeBalancedShop = [];

//add currentBalancePersentage for every shop
const shopWithCurrentBalancePersentage = shopDetails.map((obj) => {
  return {
    ...obj,
    currentBalancePersentage: (obj.currntBalance / obj.totalIncomeInWeek) * 100,
    timeInNegative: 172800,
  };
});

//decending order
shopWithCurrentBalancePersentage.sort(
  (a, b) => b.currentBalancePersentage - a.currentBalancePersentage
);
console.log(
  'shopWithCurrentBalancePersentage ',
  shopWithCurrentBalancePersentage
);

//shop status based on days of week
function getCurrentDayOfWeek() {
  const daysOfWeek = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
  ];

  const today = new Date();
  const currentDayOfWeek = today.getDay();

  return daysOfWeek[currentDayOfWeek];
}

function percentageAssigner() {
  var shopNumerAssigner = 20;
  if (getCurrentDayOfWeek() === 'Sunday') {
    shopNumerAssigner = 20;
  } else if (getCurrentDayOfWeek() === 'Monday') {
    shopNumerAssigner = 20;
  } else if (getCurrentDayOfWeek() === 'Tuesday') {
    shopNumerAssigner = 20;
  } else if (getCurrentDayOfWeek() === 'Wednesday') {
    shopNumerAssigner = 18;
  } else if (getCurrentDayOfWeek() === 'Thursday') {
    shopNumerAssigner = 15;
  } else if (getCurrentDayOfWeek() === 'Friday') {
    shopNumerAssigner = 10;
  } else if (getCurrentDayOfWeek() === 'Saturday') {
    shopNumerAssigner = 5;
  } else {
    shopNumerAssigner = 20;
  }
  return shopNumerAssigner;
}
console.log(percentageAssigner());
console.log(getCurrentDayOfWeek());
// calculate shop status and push to array
function calcShopStatus() {
  shopWithCurrentBalancePersentage.forEach((obj) => {
    if (obj.currentBalancePersentage < percentageAssigner()) {
      negativeBalancedShop.push(obj);
    } else {
      positiveBalancedShop.push(obj);
    }
  });
  console.log('positive ', positiveBalancedShop);
  console.log('negative ', negativeBalancedShop);
}
calcShopStatus();

positiveBalancedShop.sort(
  (a, b) => b.currentBalancePersentage - a.currentBalancePersentage
);

negativeBalancedShop.sort(
  (a, b) => a.currentBalancePersentage - b.currentBalancePersentage
);

/************************************* PROCESS 2 *************************************** */

//var luckyNumber = [];
var luckyNumber = [];
var currentIteration = [];
var currentIterationLoss = 0;

var allIterationLoss = [];
var nearestElement = 0;
var difference = 0;
var currentDifference = 0;

var totalNumberOfShop = shopDetails.length;
var totalMoneyForJackpot = 0;
var assigntotalMoneyForGain = 0;
if (negativeBalancedShop.length >= totalNumberOfShop * 0.2) {
  //call get process
  //take 50% of shop

  const selectedShopsCount = Math.ceil(negativeBalancedShop.length * 0.5);
  const selectedShops = [];
  //first push shops with long time in negative to selected shop
  for (let i = 0; i <= negativeBalancedShop.length; i++) {
    if (negativeBalancedShop[i].timeInNegative >= 172800) {
      selectedShops.push(negativeBalancedShop[i]);
      if (selectedShops.length >= selectedShopsCount * 0.5) {
        break;
      }
    }
  }
  //then add another element from negative array to selected shop
  for (let i = selectedShops.length; i <= selectedShopsCount; i++) {
    selectedShops.push(negativeBalancedShop[i - selectedShops.length]);
  }

  //consider time in negative array
  console.log('Selected negative Shops:', selectedShops);

  //next game gain have to be around 20% totalInComeInweek

  //above 20% is for jackpot
  const assignForGain = selectedShops.map((obj) => {
    return {
      ...obj,
      forGain: obj.totalIncomeInWeek * 0.2 - obj.currntBalance,
    };
  });
  console.log('shop with forGain value ', assignForGain);
  //take the avarage currentBalancePersentage of selectedShops

  assigntotalMoneyForGain = assignForGain.reduce(
    (sum, obj) => sum + obj.forGain,
    0
  );
  console.log('total money Assign for gain', assigntotalMoneyForGain);
} else {
  //call loss process
  //take 50% of shop
  const selectedShopsCount = Math.ceil(positiveBalancedShop.length * 0.5);
  const selectedShops = positiveBalancedShop.slice(0, selectedShopsCount);
  console.log('Selected positive Shops:', selectedShops);

  // calculate money for jackpot

  //above 20% is for jackpot
  const assignForJackpot = selectedShops.map((obj) => {
    return {
      ...obj,
      forJackpot: obj.totalIncomeInWeek - obj.totalIncomeInWeek * 0.2,
    };
  });
  console.log(assignForJackpot);
  //take the avarage currentBalancePersentage of selectedShops

  totalMoneyForJackpot = assignForJackpot.reduce(
    (sum, obj) => sum + obj.forJackpot,
    0
  );
  console.log('total money for jackpot', totalMoneyForJackpot);
}

//note:- the jackpot must be under jackpot

//go to selected tickets
//consider tickets only come from selected shop

const selectedTickets = [];
const allSelectedNumbers = [];
var totalMoneyCollected = 0;
var ticket = [];
for (let i = 1; i <= 1000; i++) {
  ticket = {
    ticket_ID: i,
    shop_ID: Math.floor(Math.random() * 100), // Generate random shop ID between 1 and 100
    selectedNumbers: [],
    money: 20,
  };

  // Generate 5 random numbers and add them to the selectedNumbers array
  for (let j = 0; j < 5; j++) {
    const randomNumber = Math.floor(Math.random() * 80) + 1; // Generate random number between 1 and 80
    ticket.selectedNumbers.push(randomNumber);
    allSelectedNumbers.push(ticket.selectedNumbers[j]);
  }
  selectedTickets.push(ticket);
}

totalMoneyCollected = selectedTickets.reduce((sum, obj) => sum + obj.money, 0);

console.log('total money collected', totalMoneyCollected);

console.log('all selected tickets ', selectedTickets);
console.log(allSelectedNumbers);
var negativeBalancedShopTickets = [];
var positiveBalancedShopTickets = [];
let allNegativeBalancedShopID = [];
let allPositiveBalancedShopID = [];

negativeBalancedShop.forEach((shop) => {
  allNegativeBalancedShopID.push(shop.shop_ID);
});
positiveBalancedShop.forEach((shop) => {
  allPositiveBalancedShopID.push(shop.shop_ID);
});
console.log('negative shop ID ', allNegativeBalancedShopID);
console.log('positive shop ID ', allPositiveBalancedShopID);
//check which tickets are come from negative shop
for (const ticket of selectedTickets) {
  if (allNegativeBalancedShopID.includes(ticket.shop_ID)) {
    negativeBalancedShopTickets.push(ticket);
  }
}

for (const ticket of selectedTickets) {
  if (allPositiveBalancedShopID.includes(ticket.shop_ID)) {
    positiveBalancedShopTickets.push(ticket);
  }
}

console.log('ticket from negative shop ', negativeBalancedShopTickets);
console.log('ticket from positive shop ', positiveBalancedShopTickets);

const negativeBalancedShopTicketsNumbers = [];
const positiveBalancedShopTicketsNumbers = [];

for (let i = 0; i < negativeBalancedShopTickets.length; i++) {
  for (
    let j = 0;
    j < negativeBalancedShopTickets[i].selectedNumbers.length;
    j++
  ) {
    negativeBalancedShopTicketsNumbers.push(
      negativeBalancedShopTickets[i].selectedNumbers[j]
    );
  }
}
console.log(
  'ticket number from negative shop',
  negativeBalancedShopTicketsNumbers
);

for (let i = 0; i < positiveBalancedShopTickets.length; i++) {
  for (
    let j = 0;
    j < positiveBalancedShopTickets[i].selectedNumbers.length;
    j++
  ) {
    positiveBalancedShopTicketsNumbers.push(
      positiveBalancedShopTickets[i].selectedNumbers[j]
    );
  }
}
console.log(
  'ticket number from positive shop',
  positiveBalancedShopTicketsNumbers
);

//now we can set tickets from negative balanced shop in decending order

// Count the frequency of each number
const frequencyMapForNegative = negativeBalancedShopTicketsNumbers.reduce(
  (map, number) => {
    map[number] = (map[number] || 0) + 1;
    return map;
  },
  {}
);

// Sort the numbers based on their frequency in descending order
const sortedNumbersForNegative = Object.keys(frequencyMapForNegative).sort(
  (a, b) => frequencyMapForNegative[b] - frequencyMapForNegative[a]
);

console.log(
  'Sorted numbers of negative Shop based on repetition:',
  sortedNumbersForNegative
);

const frequencyMapForPositive = positiveBalancedShopTicketsNumbers.reduce(
  (map, number) => {
    map[number] = (map[number] || 0) + 1;
    return map;
  },
  {}
);

// Sort the numbers based on their frequency in descending order
const sortedNumbersForPositive = Object.keys(frequencyMapForPositive).sort(
  (a, b) => frequencyMapForPositive[b] - frequencyMapForPositive[a]
);

console.log(
  'Sorted numbers of positive Shop based on repetition:',
  sortedNumbersForPositive
);

//check if there is unSelectedNmbers
const unSelectedNmbers = [];
for (let i = 1; i <= 80; i++) {
  if (!allSelectedNumbers.includes(i)) {
    unSelectedNmbers.push(i);
  }
}
console.log('un selected Numbers:', unSelectedNmbers);

// Count the frequency of each number
const frequencyMap = allSelectedNumbers.reduce((map, number) => {
  map[number] = (map[number] || 0) + 1;
  return map;
}, {});

// Sort the numbers based on their frequency in descending order
const sortedNumbers = Object.keys(frequencyMap).sort(
  (a, b) => frequencyMap[b] - frequencyMap[a]
);

console.log('Sorted numbers based on repetition:', sortedNumbers);

//push numbers to luckyNumbers array

luckyNumber = [sortedNumbers[0], sortedNumbers[1]];
//luckyNumber = [sortedNumbers[0], sortedNumbers[1]];
// for (let i = 1; i <= 80; i++) {
//   luckyNumber.push(i);
// }
let luc = luckyNumber.map((str) => parseInt(str));
luc = Array.from(luc);

//now calculate ODD for every ticket

function getMatchingNumbers(luck, ticket) {
  let count = 0;
  let luc = luck.map((str) => parseInt(str));
  for (let i = 0; i < ticket.selectedNumbers.length; i++) {
    if (luc.includes(ticket.selectedNumbers[i])) {
      count++;
    }
  }
  return count;
}
var totalMoneyLoss = 0;
var moneyForLuckyTicket = 0;

function GetTotalMoneyLossForWinners(luck) {
  totalMoneyLoss = 0;
  for (let i = 0; i < selectedTickets.length; i++) {
    //const ticket = selectedTickets[i]
    const matchingNumbers = getMatchingNumbers(luck, selectedTickets[i]);
    //moneyForLuckyTicket = selectedTickets[i].money;

    const odd = OddCalculator(
      selectedTickets[i].selectedNumbers.length,
      matchingNumbers
    );
    if (odd > 0) {
      moneyForLuckyTicket = odd * selectedTickets[i].money;
    }
    totalMoneyLoss = moneyForLuckyTicket + totalMoneyLoss;
  }

  return totalMoneyLoss;
}
//console.log('total money loss ', GetTotalMoneyLossForWinners())
/************************START PROCESS FOR LOSS MONEY****************************/
var finalLuckyNumber = [];
var iteratedLuckyNumbers = {};

//check if loss between 90% and 110% of totalMoneyForJackpot
function ForLoss() {
  if (totalMoneyForJackpot * 0.9 <= totalMoneyLoss <= totalMoneyForJackpot) {
    //good jackpot so lets add luckyNumber from unselected or less frequently numbers
    //if unselected numbers are available
    if (unSelectedNmbers.length > 0) {
      //cadd element to luckyNumber untill 20
      for (let i = 0; i < unSelectedNmbers.length; i++) {
        luckyNumber.push(unSelectedNmbers[i]);
        if (luckyNumber.length >= 20) {
          break;
        }
      }
      finalLuckyNumber = luckyNumber;
      //here if luckyNumber.length ===20, luckyNumber === finalLuckyNumber
    } else {
      //doing 60 iteration iteration
      for (let a = 1; a <= 60; a++) {
        currentIteration = [];
        currentIterationLoss = 0;
        luckyNumber.splice(0, luckyNumber.length);
        for (let i = sortedNumbersForNegative.length - a; i >= 0; i--) {
          luckyNumber.push(sortedNumbersForNegative[i]);
          if (luckyNumber.length >= 20) {
            break;
          }
        }
        currentIteration = new Set(luckyNumber);
        //calculate third iteration ODD
        currentIterationLoss = GetTotalMoneyLossForWinners([
          ...currentIteration,
        ]);
        console.log(
          'current iteration loss @',
          a,
          currentIterationLoss,
          currentIteration
        );
        iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
        //console.log(iteratedLuckyNumbers[currentIterationLoss]);

        //console.log([firstIteration, secondIteration, currentIteration]);

        //calculate odd and money with 3 iteration and save money loss with each iteration

        //choose calculate nearest posible combination then return
        allIterationLoss.push(currentIterationLoss);

        //nearestElement = firstIterationLoss;
        //nearestElement = currentIterationLoss;
        difference = Math.abs(totalMoneyForJackpot - currentIterationLoss);

        for (let i = 1; i < allIterationLoss.length; i++) {
          currentDifference = Math.abs(
            totalMoneyForJackpot - allIterationLoss[i]
          );
          if (currentDifference < difference) {
            nearestElement = allIterationLoss[i];
            difference = currentDifference;
          }
        }
      }
      /*????we can add iteration with out 2 most frequented numbers?????????????????????????????*/
      //console.log(iteratedLuckyNumbers[nearestElement]);
      console.log(
        `Nearest loss to ${totalMoneyForJackpot} is  ${nearestElement}`
      );
      console.log(
        'final lucky numbers are',
        iteratedLuckyNumbers[nearestElement]
      );
    }
    //??????????????make  nearest elements luckyNumbers finalLuckyNumbers
  } else if (totalMoneyLoss >= totalMoneyForJackpot) {
    //it means loss much money so remove frequently numbers from luckyNumbers

    //then lets add luckyNumber from unselected or less frequently numbers
    //if unselected numbers are available
    if (unSelectedNmbers.length > 0) {
      //cadd element to luckyNumber untill 20
      for (let i = 0; i < unSelectedNmbers.length; i++) {
        luckyNumber.push(unSelectedNmbers[i]);
        if (luckyNumber.length >= 20) {
          break;
        }
      }
      finalLuckyNumber = luckyNumber; //if odd result are near to totalMoneyForJackpot
    } else {
      //or add element from less frequented numbers from sortedNumbers

      //doing 60 iteration iteration
      for (let a = 1; a <= 60; a++) {
        currentIteration = [];
        currentIterationLoss = 0;
        luckyNumber.splice(0, luckyNumber.length);
        for (let i = sortedNumbersForNegative.length - a; i >= 0; i--) {
          luckyNumber.push(sortedNumbersForNegative[i]);
          if (luckyNumber.length >= 20) {
            break;
          }
        }
        currentIteration = new Set(luckyNumber);
        //calculate third iteration ODD
        currentIterationLoss = GetTotalMoneyLossForWinners([
          ...currentIteration,
        ]);
        console.log(
          'current iteration lossss @',
          a,
          currentIterationLoss,
          currentIteration
        );
        iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
        //console.log(iteratedLuckyNumbers[currentIterationLoss]);

        //console.log([firstIteration, secondIteration, currentIteration]);

        //calculate odd and money with 3 iteration and save money loss with each iteration

        //choose calculate nearest posible combination then return
        allIterationLoss.push(currentIterationLoss);

        //nearestElement = firstIterationLoss;
        //nearestElement = currentIterationLoss;
        difference = Math.abs(totalMoneyForJackpot - currentIterationLoss);

        for (let i = 1; i < allIterationLoss.length; i++) {
          currentDifference = Math.abs(
            totalMoneyForJackpot - allIterationLoss[i]
          );
          if (currentDifference < difference) {
            nearestElement = allIterationLoss[i];
            difference = currentDifference;
          }
        }
      }
      /*????we can add iteration with out 2 most frequented numbers?????????????????????????????*/
      //console.log(iteratedLuckyNumbers[nearestElement]);
      console.log(
        `Nearest loss to ${totalMoneyForJackpot} is  ${nearestElement}`
      );
      console.log(
        'final lucky numbers are',
        iteratedLuckyNumbers[nearestElement]
      );
    }
  } else {
    //it means loss less money so lets add luckyNumber from frequently numbers
    //add another 2 numbers from most frequented numbers from sortedNumbers
    //doing 60 iteration iteration
    for (let a = 1; a <= 60; a++) {
      currentIteration = [];
      currentIterationLoss = 0;
      luckyNumber.splice(0, luckyNumber.length);
      for (let i = sortedNumbersForNegative.length - a; i >= 0; i--) {
        luckyNumber.push(sortedNumbersForNegative[i]);
        if (luckyNumber.length >= 20) {
          break;
        }
      }
      currentIteration = new Set(luckyNumber);
      //calculate third iteration ODD
      currentIterationLoss = GetTotalMoneyLossForWinners([...currentIteration]);
      console.log(
        'current iteration lossssss @',
        a,
        currentIterationLoss,
        currentIteration
      );
      iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
      //console.log(iteratedLuckyNumbers[currentIterationLoss]);

      //console.log([firstIteration, secondIteration, currentIteration]);

      //calculate odd and money with 3 iteration and save money loss with each iteration

      //choose calculate nearest posible combination then return
      allIterationLoss.push(currentIterationLoss);

      //nearestElement = firstIterationLoss;
      //nearestElement = currentIterationLoss;
      difference = Math.abs(totalMoneyForJackpot - currentIterationLoss);

      for (let i = 1; i < allIterationLoss.length; i++) {
        currentDifference = Math.abs(
          totalMoneyForJackpot - allIterationLoss[i]
        );
        if (currentDifference < difference) {
          nearestElement = allIterationLoss[i];
          difference = currentDifference;
        }
      }
    }
    console.log(
      `Nearest loss to ${totalMoneyForJackpot} is  ${nearestElement}`
    );
    console.log(
      'final lucky numbers are',
      iteratedLuckyNumbers[nearestElement]
    );
  }
}
ForLoss();
/************************END PROCESS FOR LOSS MONEY****************************/

/************************START PROCESS FOR GAIN MONEY****************************/
//put unselected numbers or list frequented.
var restFromGain = 0;
iteratedLuckyNumbers = {};
function ForGain() {
  if (assigntotalMoneyForGain >= totalMoneyCollected) {
    //take all money
    console.log('colleced money is less that assign money');

    luckyNumber.splice(0, luckyNumber.length);

    //doing 60 iteration iteration
    for (let a = 1; a <= 60; a++) {
      currentIteration = [];
      currentIterationLoss = 0;
      luckyNumber.splice(0, luckyNumber.length);
      for (let i = sortedNumbersForPositive.length - a; i >= 0; i--) {
        luckyNumber.push(sortedNumbersForPositive[i]);
        if (luckyNumber.length >= 20) {
          break;
        }
      }
      currentIteration = new Set(luckyNumber);
      //calculate third iteration ODD
      currentIterationLoss = GetTotalMoneyLossForWinners([...currentIteration]);
      console.log(
        'current iteration loss @',
        a,
        currentIterationLoss,
        currentIteration
      );
      iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
      //console.log(iteratedLuckyNumbers[currentIterationLoss]);

      //console.log([firstIteration, secondIteration, currentIteration]);

      //calculate odd and money with 3 iteration and save money loss with each iteration

      //choose calculate nearest posible combination then return
      allIterationLoss.push(currentIterationLoss);

      //nearestElement = firstIterationLoss;
      //nearestElement = allIterationLoss[0];
      //difference = Math.abs(totalMoneyForJackpot - nearestElement);

      for (let i = 1; i < allIterationLoss.length; i++) {
        if (allIterationLoss[i] < nearestElement) {
          nearestElement = allIterationLoss[i];
        }
      }
    }
    /*????we can add iteration with out 2 most frequented numbers?????????????????????????????*/
    //console.log(iteratedLuckyNumbers[nearestElement]);
    console.log(
      `Nearest gain to ${assigntotalMoneyForGain} is  ${nearestElement}`
    );
    console.log(
      'final lucky numbers are',
      iteratedLuckyNumbers[nearestElement]
    );
  } else {
    restFromGain = totalMoneyCollected - assigntotalMoneyForGain;
    console.log('the rest money from gain is ', restFromGain);
    //restFromGain is for lucky
    if (unSelectedNmbers.length > 0) {
      //add element to luckyNumber untill 20
      luckyNumber.splice(0, luckyNumber.length);
      for (let i = 0; i < unSelectedNmbers.length; i++) {
        luckyNumber.push(unSelectedNmbers[i]);
        if (luckyNumber.length >= 20) {
          break;
        }
      }

      //doing 60 iteration iteration
      for (let a = 1; a <= 60; a++) {
        currentIteration = [];
        currentIterationLoss = 0;
        luckyNumber.splice(0, luckyNumber.length);
        for (let i = sortedNumbersForPositive.length - a; i >= 0; i--) {
          luckyNumber.push(sortedNumbersForPositive[i]);
          if (luckyNumber.length >= 20) {
            break;
          }
        }
        currentIteration = new Set(luckyNumber);
        //calculate third iteration ODD
        currentIterationLoss = GetTotalMoneyLossForWinners([
          ...currentIteration,
        ]);
        console.log(
          'current iteration loss @',
          a,
          currentIterationLoss,
          currentIteration
        );
        iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
        //console.log(iteratedLuckyNumbers[currentIterationLoss]);

        //console.log([firstIteration, secondIteration, currentIteration]);

        //calculate odd and money with 3 iteration and save money loss with each iteration

        //choose calculate nearest posible combination then return
        allIterationLoss.push(currentIterationLoss);

        //nearestElement = firstIterationLoss;
        //nearestElement = currentIterationLoss;
        difference = Math.abs(restFromGain - currentIterationLoss);

        for (let i = 1; i < allIterationLoss.length; i++) {
          currentDifference = Math.abs(restFromGain - allIterationLoss[i]);
          if (currentDifference < difference) {
            nearestElement = allIterationLoss[i];
            difference = currentDifference;
          }
        }
      }
      /*????we can add iteration with out 2 most frequented numbers?????????????????????????????*/
      //console.log(iteratedLuckyNumbers[nearestElement]);
      console.log(`Nearest loss to ${restFromGain} is  ${nearestElement}`);
      console.log(
        'final lucky numbers are',
        iteratedLuckyNumbers[nearestElement]
      );
    } else {
      //doing 60 iteration iteration
      for (let a = 1; a <= 60; a++) {
        currentIteration = [];
        currentIterationLoss = 0;
        luckyNumber.splice(0, luckyNumber.length);
        for (let i = sortedNumbers.length - a; i >= 0; i--) {
          luckyNumber.push(sortedNumbers[i]);
          if (luckyNumber.length >= 20) {
            break;
          }
        }
        currentIteration = new Set(luckyNumber);
        //calculate third iteration ODD
        currentIterationLoss = GetTotalMoneyLossForWinners([
          ...currentIteration,
        ]);
        console.log(
          'current iteration loss @',
          a,
          currentIterationLoss,
          currentIteration
        );
        iteratedLuckyNumbers[currentIterationLoss] = currentIteration;
        //console.log(iteratedLuckyNumbers[currentIterationLoss]);

        //console.log([firstIteration, secondIteration, currentIteration]);

        //calculate odd and money with 3 iteration and save money loss with each iteration

        //choose calculate nearest posible combination then return
        allIterationLoss.push(currentIterationLoss);

        //nearestElement = firstIterationLoss;
        //nearestElement = currentIterationLoss;
        difference = Math.abs(restFromGain - currentIterationLoss);

        for (let i = 1; i < allIterationLoss.length; i++) {
          currentDifference = Math.abs(restFromGain - allIterationLoss[i]);
          if (currentDifference < difference) {
            nearestElement = allIterationLoss[i];
            difference = currentDifference;
          }
        }
      }
      /*????we can add iteration with out 2 most frequented numbers?????????????????????????????*/
      //console.log(iteratedLuckyNumbers[nearestElement]);
      console.log(`Nearest gain to ${restFromGain} is  ${nearestElement}`);
      console.log(
        'final lucky numbers are',
        iteratedLuckyNumbers[nearestElement]
      );
    }
  }
  //return [firstIteration, secondIteration, thirdIteration]
}

ForGain();
// then calculate ODD for different numbers combinations
// compare different iterations ODD then take the most approximate numbers value to assigntotalMoneyForGain.

/************************END PROCESS FOR GAIN MONEY****************************/

export default function App() {
  return (
    <div id="blockContainer" style={{ backgroundColor: 'gray' }}>
      hi
    </div>
  );
}
