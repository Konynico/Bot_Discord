const Discord = require("discord.js")


module.exports = {

        name: "random",
        description: "Permet de selection des choses random",
        permissions: "Aucune",
        category: "Loisir",
        dm: true,
        options: [
            {
                type: "string",
                name: "type",
                description: "Agent ou Map ?",
                required: true,
                autocomplete: true
            },
            
        ],


        async run(bot, message, args) {
            if(args.getString("type") === "agent"){

                let array = ["reyna", "breach" ,"sova","astra","brimstone","chamber","cypher","fade","harbor","jett","kayo","killjoy","neon","omen","phoenix","raze","sage","skye","yoru","viper","gekko"]
                let select = array[Math.floor(Math.random() * 19)]
                const file = new Discord.AttachmentBuilder(`./image/${select}.png`);
               

                let Embed = new Discord.EmbedBuilder()
                .setColor(bot.color)
                .setTitle("Agent choisi : ")
                .setImage(`attachment://${select}.png`)
                .setDescription(`**${select.toUpperCase()}**`)
                .setTimestamp()
                .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

               
                await message.reply({embeds: [Embed], files: [file]})
                
            }

            if(args.getString("type") === "map"){

                let array = ["ascent","bind","breeze","fracture","haven","icebox","lotus","pearl","split"]
                let select = array[Math.floor(Math.random() * 8)]
                const file = new Discord.AttachmentBuilder(`./image/${select}.png`);
               

                let Embed = new Discord.EmbedBuilder()
                .setColor(bot.color)
                .setTitle("Map choisie : ")
                .setImage(`attachment://${select}.png`)
                .setDescription(`**${select.toUpperCase()}**`)
                .setTimestamp()
                .setFooter({text: bot.user.username, iconURL: bot.user.displayAvatarURL({dynamic: true})})

               
                await message.reply({embeds: [Embed], files: [file]})
                
            }
        }
    }
    
