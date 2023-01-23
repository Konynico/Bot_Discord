const Discord = require("discord.js");
const loadSashCommands = require("../Loader/loadSashCommands");
module.exports = async bot => {

    await loadSashCommands(bot)
    
    console.log(`${bot.user.tag} : Bot opérationel`);
    bot.user.setActivity("Star Wars avec /help");
}
