const Discord = require("discord.js")

module.exports = {

        name: "ping",
        description: "Affiche la latence avec les serveurs de discord",
        permissions: "Aucune",
        dm: true,
        category: "Random",
        autocomplete: false,

        async run(bot, message) {

            await message.reply(`Ping : \`${bot.ws.ping}\``)
        }
}       