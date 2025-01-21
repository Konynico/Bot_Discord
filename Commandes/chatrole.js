//création d'un message avec des réactions pour donner un role par @Kurokami#0001
const Discord = require('discord.js');

module.exports = {
    name: 'chatrole',
    description: 'Créer un message avec des réactions pour donner un role',
    permissions: Discord.PermissionFlagsBits.CreatePublicThreads,
    category: "Administration",
    dm: false,
    options: [
        {
            type: "string",
            name: "role",
            description: "role a donner",
            required: true,
            autocomplete: false
        },
        {
            type: "string",
            name: "message",
            description: "message a envoyer",
            required: true,
            autocomplete: false
        }
    ],
    
    async run (bot, message, args) {
        const role = message.guild.roles.cache.find(role => role.name === args.getString("role"));
        const msg = args.getString("message")
        const embed = new Discord.EmbedBuilder()
        .setTitle(msg)
        .setColor(bot.color)
        .setTimestamp()
        .setFooter({text: `Rôle créer par ${message.user.username}`, iconURL: message.user.displayAvatarURL({dynamic: true})})
        .setTimestamp();
        
        let msg2 = await message.channel.send({embeds: [embed]});
        await msg2.react("✅");
        await msg2.react("❌");
        
        bot.on('messageReactionAdd', async (reaction, user) => {
            if (reaction.message.partial) await reaction.message.fetch();
            if (reaction.partial) await reaction.fetch();
            if (user.bot) return;
            if (!reaction.message.guild) return;
            
            if (reaction.message.channel.id == message.channel.id) {
                if (reaction.emoji.name === '✅') {
                    await reaction.message.guild.members.cache.get(user.id).roles.add(role)
                }
                if (reaction.emoji.name === '❌') {
                    await reaction.message.guild.members.cache.get(user.id).roles.remove(role)
                }
            } else {
                return;
            }
        });
    }
}



