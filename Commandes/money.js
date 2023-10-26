const Discord = require("discord.js");

module.exports = {
  name: "money",
  description: "Permet de voir la money d'un membre",
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
  ],

  async run(bot, message, args, db) {
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
  },
};



