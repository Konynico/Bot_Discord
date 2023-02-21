console.log("test");


const Discord = require(".js");
const loadCommands = require("./Loader/loadCommands");
const loadEvents = require("./Loader/loadEvents");
const config = require("./config")

bot = new Discord.Client({intents : 3276799})

const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);


bot.commands = new Discord.Collection()
bot.color = "#0002E1";

//bot.login(process.env.token);

loadCommands(bot)
loadEvents(bot)








   
