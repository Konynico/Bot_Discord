const Discord = require("discord.js")

module.exports = {

        name: "role",
        description: "Permet d'ajouter ou de retirer un role",
        permissions: Discord.PermissionFlagsBits.BanMembers,
        category: "Administration",
        dm: false,
        options: [
            {
                type: "user",
                name: "membre",
                description: "La personne concernée",
                required: true,
                autocomplete: false
            },
            {
                type: "string",
                name: "temps",
                description: "Temps avant supréssion du role (en heure)",
                required: true,
                autocomplete: false
            },
            {
                type: "string",
                name: "role",
                description: "role a donner",
                required: true,
                autocomplete: false
            }
        ],

        async run(bot, message, args) {
        let user = await bot.users.fetch(args._hoistedOptions[0].value)
        let member = message.guild.members.cache.get(user.id)
        let role = message.guild.roles.cache.find(role => role.name === args.getString("role"));
        member.roles.add(role).then(() => {
            message.channel.send(`Le rôle : **${role.name}** a été donné à ${member.user.username}`);
      
        // Supprimer le rôle après 1 heure
        if(args.getString("temps")){
            const temps = args.getString("temps")
            const temps2 = temps * 3600000
            message.channel.send(`Le rôle a été donné pour ${temps} heures`);
            setTimeout(() => {
                member.roles.remove(role);
                if(message.channel){
                    message.channel.send(`Le rôle : **${role.name}** a été enlevé à ${member.user.username}`);}
            }, temps2 );}
        else{
            message.channel.send(`Il a été donné pour une durée indéterminée`);
        }
    });
           
                
            
}       }

        