const Discord = require("discord.js");

module.exports = {
  name: "removeMoney",
  description: "Permet de retirer de l'argent à un membre",
  permissions: Discord.PermissionFlagsBits.BanMembers,
  category: "Administration",
  dm: false,
  options: [
    {
      type: "user",
      name: "membre",
      description: "La personne concernée",
      required: true,
      autocomplete: false,
    },
    {
      type: "string",
      name: "argent",
      description: "L'argent à ajouter",
      required: true,
      autocomplete: false,
    },
  ],

  async run(bot, message, args, db) {
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
  },
};