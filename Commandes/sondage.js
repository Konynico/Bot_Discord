//commande sondage par @Kurokami#0001
const Discord = require('discord.js');

module.exports = {
    name: 'sondage',
    description: 'Créer un sondage',
    permissions: "Aucune",
    category: "Loisir",
    dm: true,
    options: [{
        type: "string",
        name: "sujet",
        description: "Sujet du sondage ?",
        required: true,
        autocomplete: false }
    ],


        async run (bot, message, args) {            

            let question = args.getString("sujet")

            let Embed = new Discord.EmbedBuilder()
            .setTitle("Sondage")
            .setDescription(question)
            .setColor(bot.color)
            .setTimestamp()
            .setFields({name: "Réponse", value: "✅ pour oui\n❌ pour non", inline: false})
            .setFooter({text: `Sondage créer par ${message.user.username}`, iconURL: message.user.displayAvatarURL({dynamic: true})})
            .setTimestamp();
            
            let msg = await message.channel.send({embeds: [Embed]});
            await msg.react("✅");
            await msg.react("❌");
           

        }

    }


            