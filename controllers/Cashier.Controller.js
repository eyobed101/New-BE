import cashier from "../models/cashier.js";
import Game from "../models/games.js";

const getAllGamesByCashier = async (req, res) => {
  // const { cashierID } = req.params;
  try {
    const games = await Game.find({ cashierID: req.user.sub });
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve games" });
  }
};
const getTenGamesByCashier = async (req, res) => {
  try {
    const games = await Game.find({ cashierID: req.user.sub })
      .sort({ gameNumber: -1 }) // Sort the results in descending order based on the "gameNumber" field
      .limit(10); // Limit the results to 10 entries
    res.status(200).json(games);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve games" });
  }
};
const getGeneralInfoOfCashier = async (req, res) => {
  // const { cashierID } = req.params;
  try {
    const general = await cashier.find({ cashierID: req.user.sub });
    res.status(200).json(general);
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve games" });
  }
};
const getAllEventsByCashier = async (req, res) => {
  // const { cashierID } = req.params;
  try {
    const {gameNumber, date, result} = await Game.find({ cashierID: req.user.sub });
    res.status(200).json({"gameNumber":gameNumber, "date":date, "result":result } );
  } catch (error) {
    res.status(500).json({ error: "Failed to retrieve games" });
  }
};

const CheckTicket = async (req, res) => {
  const ticketID = req.body.id_number;
  const GameNumber = req.body.game_number;

  console.log(ticketID)
  console.log(GameNumber)
  try {
    const game = await Game.findOne(
      { cashierID: req.user.sub, gameNumber: GameNumber },
      { winner: 1 }
    );

    if (game && game.winner && game.winner.length > 0) {
      const winner = game.winner.find((item) => item.id === ticketID);
      if (winner) {
        const amountWon = winner.amountWon;
        res.send(`You Won: ${amountWon} ETB`);
      } else {
        res.send("Not found");
      }
    } else {
      res.send("Not found");
    }
  } catch (err) {
    console.log(err);
    res.status(500).send("Internal Server Error");
  }
};

const fetchLastGame = async (req, res) => {
  try {
    const lastGame = await Game.findOne({cashierID: req.user.sub}).sort({ gameNumber: -1 }).exec();
    if (lastGame){
      res.status(200).json(lastGame.gameNumber);

    }else {
      res.status(201).json(1000)
    }
  } catch (error) {
    console.error('Error fetching last game Number:', error);
    throw error;
  }
}


export { getAllGamesByCashier, getGeneralInfoOfCashier, getAllEventsByCashier, getTenGamesByCashier, CheckTicket, fetchLastGame};
