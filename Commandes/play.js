const { EmbedBuilder } = require("discord.js");
const Discord = require('discord.js');
 
module.exports = {
 
    name: "play",
    description: "écouter une musique.",
    category: ":Musique",
    permission: "Aucune",
    dm: false,
    options: [
        {
            type: "string",
            name: "musique",
            description: "indiquez le nom de la musique ou son URL.",
            autocomplete: false,
            required: true
        }
    ],
 
    async run(bot, message, args, interaction) {
        try {
 
        let musique = args.getString("musique");
        if(!message.member.voice.channel) return message.reply({ ephemeral: true, content: "Pour utiliser cette commande tu dois rejoindre un salon vocal." })
 
        if((await message.guild.members.fetchMe()).voice?.channel?.id && message.member.voice?.channel?.id) {
        if((await message.guild.members.fetchMe()).voice?.channel?.id !== message.member.voice?.channel?.id) return message.reply({ephemeral: true, content: "Pour utiliser cette commande, Septius et toi devez être dans le même salon vocal." });
        }
 
        const queue = bot.player.createQueue(message.guild, {metadata: {message: message}})
 
        let track = await bot.player.search(musique, {requestedBy: message.user}).then(track => track.tracks[0]);
        if(!track) return message.reply({ ephemeral: true, content: "La musique n'a pas été trouvée." })
 
        const embed = new EmbedBuilder()
        .setColor('#5D8FBF')
        .setAuthor({ name: message.user.tag, iconURL: message.user.displayAvatarURL({ dynamic: true, size: 4096 }) })
        .setDescription(`🎵 **${track.title}** \`${track.duration}\`\n*Cette musique est dans la liste d'attente.*`)
 
        if(!queue.connection) await queue.connect(message.member.voice.channel);
        queue.play(track);
        message.reply({ embeds: [embed] })
 
    }  catch (err) {
        await message.reply({ ephemeral: true, content: "Une erreur inconnue s'est produite." })
      }
    }
};
