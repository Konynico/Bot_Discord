const Discord = require("discord.js")

module.exports = {

        name: "ticket",
        description: "Envoie l'embed des tickets",
        permissions: Discord.PermissionFlagsBits.BanMembers,
        category: "Administration",
        dm: false,
        options: [],

        async run(bot, message, args, db) {

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle("Création d'un ticket")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("Créer un ticket")
            .setTimestamp()
            .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

            const btn = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
            .setCustomId("ticket")
            .setLabel("Créer un ticket")
            .setStyle(Discord.ButtonStyle.Success)
            .setEmoji("💌"))

            await message.reply({embeds: [Embed], components: [btn]})
        }
    }