console.log("test");
const Player = require("discord-player");
const Discord = require("discord.js");
const loadCommands = require("./Loader/loadCommands");
const loadEvents = require("./Loader/loadEvents");
const loadPlayerEvents = require("./Loader/loadPlayerEvent");
const config = require("./config")

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
        opusEncoded: true,
        encoderArgs: ['-af', 'bass=g=10,dynaudnorm=f=200']

    },
    leaveOnEmptyCooldown: 0,
    quality: 'high',
    enableLive: true,
    enableQueueStat: true,
    retryLimit: 5,
    timeout: 1800000,
    nsfw: false,
    emitNewSongOnly: false,
    useSafeSearch: true,
    initialVolume: 50,
    sameVoiceChannel: true,
    updateYouTubeDL: true,
    youtubeDL: true,
    youtubeCookie: null,
    youtubeIdentityToken: null,
    customFilters: null,
    enableSoundcloud: true,
    soundcloudClientID: null,
    soundcloudCookie: null,
    enableSpotify: true,
    spotifyCookie: null,
    spotifyClientID: null,
    spotifyClientSecret: null,
    spotifyAutoResolve: true,
})


const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Voilà la réponse du serveur !');
});

server.listen(process.env.PORT || 3000);


bot.commands = new Discord.Collection()
bot.color = "#0002E1";

//bot.login(process.env.token);
bot.login(config.token);

loadCommands(bot)
loadEvents(bot)
loadPlayerEvents(bot)







   
