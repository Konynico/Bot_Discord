console.log("test");
const Player = require("discord-player");
const Discord = require("discord.js");
const loadCommands = require("./Loader/loadCommands");
const loadEvents = require("./Loader/loadEvents");
const loadPlayerEvents = require("./Loader/loadPlayerEvent");
const loadDatabase = require("./Loader/loadDatabase");

bot = new Discord.Client({intents : 3276799})


bot.player = new Player.Player(bot,{
    leaveOnEnd: true,
    leaveOnEmpty: true,
    volume: 50,
    leaveOnStop: true,
    autoSelfDeaf: true,
    ytdlOptions: {
        filter: 'audioonly',
        quality: 'highestaudio',
        highWaterMark: 1 << 25,

    },
})



const http = require('http');


const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);


//bot.login(process.env.token);
bot.login("MTA2MzQ0Mzc1NzgyNTAwMzYyMQ.GyJ1YH.EBgU6B7ijNBoFH2T_CCXomdd8n6uR6J19QmmhM")
bot.commands = new Discord.Collection()
bot.color = "#0002E1";



loadCommands(bot)
loadEvents(bot)
loadPlayerEvents(bot)
loadDatabase(bot)











   
