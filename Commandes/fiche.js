const Discord = require("discord.js")

module.exports = {

        name: "fiche",
        description: "Interaction avec les fiches de personnage",
        permissions: "Aucune",
        dm: true,
        category: "Random",
        autocomplete: false,
        options: [
            {
                type: "string",
                name: "action",
                description: "Créer ou modifier ou voir ?",
                required: true,
                autocomplete: false
            },
            
        ],
        

        async run(bot, message) {
        //si créer alors créer une fiche avec les infos de base et la sauvegarder dans la bdd avec l'id de l'utilisateur
        //si modifier alors modifier la fiche de l'utilisateur
        //si voir alors afficher la fiche de l'utilisateur
        //si supprimer alors supprimer la fiche de l'utilisateur



           
        }
}       