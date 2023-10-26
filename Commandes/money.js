const Discord = require("discord.js");

module.exports = {
  name: "money",
  description: "Permet de voir la money d'un membre",
  permissions: Discord.PermissionFlagsBits.BanMembers,
  category: "Administration",
  dm: false,
  options: [
    {
      type: "string",
      name: "action",
      description: "action à effectuer",
      required: true,
      autocomplete: true
  },
    {
      type: "user",
      name: "membre",
      description: "La personne concernée",
      required: true,
      autocomplete: false,
    }
  ],

  async run(bot, message, args, db) {
    if(args.getString("action") === "show"){
    // Récupérer l'ID de l'utilisateur
      const membre = await bot.users.fetch(args._hoistedOptions[0].value);

      try {

        bot.db.query(`SELECT * FROM money WHERE user = '${membre}'`, (err, row) => {
          if (row.length < 1) {
            message.reply(`L'utilisateur n'a pas encore de compte.`);
          }
          else{
            currentMoney = row[0].value;
            //embed pour afficher la money
            const embed = new Discord.EmbedBuilder()
            .setColor('#5D8FBF')
            .setTitle(`Money de ${membre.username}`)
            .setDescription(`**${membre.username}** a actuellement **${currentMoney}** sur son compte.`)
            .setTimestamp()
            .setFooter({text: `Money de ${membre.username}`, iconURL: membre.displayAvatarURL({dynamic: true})})
            message.reply({embeds: [embed]});
          }
        });
        

      }


      catch (err) {
        console.error("Une erreur est survenue lors de la récupération de la money :", err);
        message.reply("Une erreur est survenue lors de la récupération de la money.");
      }
  }
  if(args.getString("action") === "add"){
    // Vérifier si l'utilisateur a les permissions appropriées pour utiliser cette commande

    // Extraire les arguments du message
    const montant = parseInt(args.getString("argent"));
    const membre = await bot.users.fetch(args._hoistedOptions[0].value);

    // Vérifier si le montant est un nombre valide
    if (isNaN(montant) || montant <= 0) {
      return message.reply("Le montant doit être un nombre positif.");
    }

    try {
      // Delete the existing user entry from the database, if it exists

      bot.db.query(`SELECT * FROM money WHERE user = '${membre}'`, (err, row) => {
        if (row.length < 1) {
          bot.db.query(`INSERT INTO money (user, value) VALUES ('${membre}', '${montant}')`);
          message.reply(`Nouvel utilisateur **${membre.username}** ajouté avec un montant de **${montant}**.`);
        }
        else{
          currentMoney = row[0].value;
          newMoney = currentMoney + montant;
          bot.db.query(`UPDATE money SET value = '${newMoney}' WHERE user = '${membre}'`);
          message.reply(`L'utilisateur **${membre.username}** a gagné **${montant}**, il a actuellement un montant de **${newMoney}** sur son compte.`); 
        }
      });   
    } catch (err) {
      console.error("Une erreur est survenue lors de l'ajout de l'argent :", err);
      message.channel.send("Une erreur est survenue lors de l'ajout de l'argent.");
    }
  }
  if(args.getString("action") === "remove"){
     // Vérifier si l'utilisateur a les permissions appropriées pour utiliser cette commande

    // Extraire les arguments du message
    const montant = parseInt(args.getString("argent"));
    const membre = await bot.users.fetch(args._hoistedOptions[0].value);

    // Vérifier si le montant est un nombre valide
    if (isNaN(montant) || montant <= 0) {
      return message.reply("Le montant doit être un nombre positif.");
    }

    try {
      // Delete the existing user entry from the database, if it exists
    


      bot.db.query(`SELECT * FROM money WHERE user = '${membre}'`, (err, row) => {
        if (row.length < 1) {
          message.reply(`**${membre.username}** n'a pas d'argent LE NUL.`);
        }
        else{
          currentMoney = row[0].value;
          newMoney = currentMoney - montant;
          bot.db.query(`UPDATE money SET value = '${newMoney}' WHERE user = '${membre}'`);
          message.reply(`L'utilisateur **${membre.username}** a perdu **${montant}**, il a actuellement un montant de **${newMoney}** sur son compte.`); 
        }
      });
      
    } catch (err) {
      console.error("Une erreur est survenue lors de l'ajout de l'argent :", err);
      message.channel.send("Une erreur est survenue lors de l'ajout de l'argent.");
    }
  }
  },
};



