const Discord = require("discord.js");
const loadDatabase = require("../Loader/loadDatabase");
const loadSashCommands = require("../Loader/loadSashCommands");
module.exports = async bot => {

    bot.db = await loadDatabase()
    bot.db.connect(function(){
        console.log("Base de données connectée !")
    })
    await loadSashCommands(bot)
    
    console.log(`${bot.user.tag} : Bot opérationel`);
    bot.user.setActivity("Star Wars avec /help");
}
