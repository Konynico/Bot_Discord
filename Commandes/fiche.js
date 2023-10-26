const Discord = require("discord.js")

module.exports = {

        name: "fiche",
        description: "Interaction avec les fiches de personnage",
        permissions: "Aucune",
        dm: true,
        category: "Random",
        autocomplete: false,
        options: [
            {
                type: "string",
                name: "action",
                description: "Créer ou modifier ou voir ?",
                required: true,
                autocomplete: false
            },
            
        ],
        

        async run(bot, message) {
            if(message.author.id !== "451693463742840842") return message.reply("Tu n'as pas accès à cette commande !")

            if(message.author.id === "451693463742840842"){

                if(message.getString("action") === "créer"){

                    let Embed = new Discord.EmbedBuilder()
                    .setColor(bot.color)
                    .setTitle("Création d'une fiche de personnage")
                    .setDescription("Veuillez répondre aux questions suivantes :")
                    .setTimestamp()
                    .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

                    await message.reply({embeds: [Embed]})

                    let Embed2 = new Discord.EmbedBuilder()
                    .setColor(bot.color)
                    .setTitle("Quel est le nom de votre personnage ?")
                    .setTimestamp()
                    .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

                    await message.reply({embeds: [Embed2]})

                    const filter = m => m.author.id === message.author.id;
                    const collector = message.channel.createMessageCollector({ filter, max: 1, time: 60000 });

                    collector.on('collect', async m => {

                        let nom = m.content

                        let Embed3 = new Discord.EmbedBuilder()
                        .setColor(bot.color)
                        .setTitle("Quel est le prénom de votre personnage ?")
                        .setTimestamp()
                        .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

                        await message.reply({embeds: [Embed3]})

                        const filter = m => m.author.id === message.author.id;
                        const collector = message.channel.createMessageCollector({ filter, max: 1, time: 60000 });

                        collector.on('collect', async m => {

                            let prenom = m.content

                            let Embed4 = new Discord.EmbedBuilder()
                            .setColor(bot.color)
                            .setTitle("Quel est l'âge de votre personnage ?")
                            .setTimestamp()
                            .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

                            await message.reply({embeds: [Embed4]})

                            const filter = m => m.author.id === message.author.id;
                            const collector = message.channel
           
        }
}       