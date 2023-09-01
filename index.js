const TatsuAPI = require('./TatsuPI.js-main/TatsuAPI');
require('dotenv').config()
const prompt = require('prompt-sync')()
const token = process.env.KEY;
const guildID = '960497893540786206';

// 952523516677341186

const api = new TatsuAPI(token);

const data = async () => {

  const id = prompt("Enter your discord user id: ")
  const result = await api.getUserPoint(id, guildID);
  console.log("Your Karma point is:", result.points);
};

data();
