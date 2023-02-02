const Discord = require('discord.js');
const axios = require('axios');

const apikey = "RGAPI-281eee68-1e5d-40ce-8d4b-eeb0d2ec822e";

module.exports = {
    name: 'valo',
    description: 'Chercher un joeur sur Valorant',
    permissions: "Aucune",
    category: "Loisir",
    dm: true,
    options: [{
        type: "string",
        name: "nom",
        description: "nom du joueur ?",
        required: true,
        autocomplete: false }
    ],


        async run (bot, message, args) {            

        
           

        }

    }