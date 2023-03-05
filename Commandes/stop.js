const Discord = require("discord.js")

module.exports = {

        name: "stop",
        description: "stop la musique",
        permissions: "Aucune",
        dm: false,
        category: "Musique",
        autocomplete: false,
        options: [],


        async run(bot, message, args) {

          
            const queue = await bot.player.createQueue(message.guild.id);
            if(!queue.connection || !queue.playing) return message.reply("le bot n'est pas connecté ou ne joue pas de musique !")

            queue.destroy();
            message.reply("La musique a été stoppé !")
           
}}       
