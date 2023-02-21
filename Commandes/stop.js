const Discord = require("discord.js")

module.exports = {

        name: "stop",
        description: "stop la musique",
        permissions: "Aucune",
        dm: false,
        category: "Loisir",
        autocomplete: false,
        options: [
        ],


        async run(bot, message) {

          
            const queue = await bot.player.createQueue(message.guild, {metadata : {message: message}})
            if(!queue.connection || !queu.playing) return message.reply("le bot n'est pas connecté ou ne joue pas de musique !");

            queue.destroy();
            message.reply("La musique a été stoppé !")
           
}}       