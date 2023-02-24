const Discord = require("discord.js");

module.exports = async (bot, interaction) => {

    if(interaction.type === Discord.InteractionType.ApplicationCommandAutocomplete){

        let entry = interaction.options.getFocused()
        
        if (interaction.commandName == "help") {
            let choices = bot.commands.filter(cmd => cmd.name.includes(entry))
            await interaction.respond(entry === "" ? bot.commands.map(cmd => ({name: cmd.name, value: cmd.name})) : choices.map(choices => ({name: choices.name, value: choices.name})))
        }
        if (interaction.commandName == "random") {
            let choices = ["agent", "map"];
            let filteredChoices = choices.filter(choice => choice.includes(entry));
            await interaction.respond(entry === "" ? choices.map(choice => ({name: choice, value: choice})) : filteredChoices.map(filteredChoice => ({name: filteredChoice, value: filteredChoice})));}
        
       
    
    }

    if(interaction.type === Discord.InteractionType.ApplicationCommand){
       let command =  require(`../Commandes/${interaction.commandName}`)
       command.run(bot, interaction, interaction.options)
    }

    if(interaction.isButton()){
        if(interaction.customId === "ticket"){
            

            if(!interaction.member.permissions.has(Discord.PermissionFlagsBits.CreatePublicThreads)){
                try {await user.send("Vous n'avez pas le role requis pour créer un ticket")
                
                } catch (err) {}
            }
            else{
                const channel = interaction.guild.channels.cache.find(ch => ch.name === `ticket-de-konynico`);
                if (channel) {
                    try {
                        interaction.reply({content: `Votre ticket a déja été créer : ${channel}`,ephemeral: true})
                    
                    } catch (err) {}

                }
                else{
                let channel = await interaction.guild.channels.create({
                    name: `ticket de ${interaction.user.username}`,
                    type: Discord.ChannelType.GuildText,
        
                })

            await channel.permissionOverwrites.create(interaction.guild.roles.everyone, {
                ViewChannel: false

            })
            await channel.permissionOverwrites.create(interaction.user, {
                ViewChannel: true,
                EmbedLinks: true,
                SendMessages: true,
                AttachFiles: true,
                ReadMessageHistory: true

            })
            await channel.permissionOverwrites.create("913780349820108810", {
                ViewChannel: true,
                EmbedLinks: true,
                SendMessages: true,
                AttachFiles: true,
                ReadMessageHistory: true

            })

            await channel.setTopic(interaction.user.id)
            await interaction.reply({content: `Votre ticket a été créer : ${channel}`,ephemeral: true})

            let Embed = new Discord.EmbedBuilder()
            .setColor(bot.color)
            .setTitle("Création d'un ticket")
            .setThumbnail(bot.user.displayAvatarURL({dynamic: true}))
            .setDescription("Ticket créer")
            .setTimestamp()
            .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

            const btn = new Discord.ActionRowBuilder().addComponents(new Discord.ButtonBuilder()
            .setCustomId("close")
            .setLabel("Fermer le ticket")
            .setStyle(Discord.ButtonStyle.Danger)
            .setEmoji("🗑️"))

            await channel.send({embeds: [Embed], components: [btn]})
            const role = interaction.guild.roles.cache.find(r => r.name === '@ everyone');
            await channel.send(`Les admins vont bientot te répondre ... ${role} `)
        }
        }
        if(interaction.customId ===  "close"){
            let user = bot.users.cache.get(interaction.channel.topic)
            try {await user.send("Votre ticket a été fermé")
                
            } catch (err) {}

            await interaction.channel.delete( )
        }}
    }
}