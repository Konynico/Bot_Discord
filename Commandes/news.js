const Discord = require("discord.js")
const axios = require("axios");
const rawgApiKey = "81082318ecce48b3b3abf74fd0df3b23";



module.exports = {

        name: "news",
        description: "Retoune les news d'un sujet particulier",
        permissions: "Aucune",
        category: "Loisir",
        dm: true,
        options: [
            {
                type: "string",
                name: "sujet",
                description: "Agent ou Map ?",
                required: false,
                autocomplete: false
            }],

            async run(bot, message, args) {

                const axios = require("axios");


            const apiKey = "ec37df04ecf91a54be457206fdcf7ea07ebc8eeb";
            const gameName = "Valorant";

            try {
                const response = await axios.get(`https://www.giantbomb.com/api/search`, {
                    params: {
                        api_key: apiKey,
                        query: gameName,
                        format: "json",
                        resources: "game"
                    }
                });

                const gameID = response.data.results[0].id;

                const patchNotesResponse = await axios.get(`https://www.giantbomb.com/api/game/${gameID}/`, {
                    params: {
                        api_key: apiKey,
                        format: "json",
                        field_list: "description"
                    }
                });

                const patchNotes = patchNotesResponse.data.results.description;

                message.channel.send(`Les dernières notes de patch pour ${gameName} : `);
                message.channel.send({files: [{attachment: Buffer.from(patchNotes), name: "patchnotes.html"}]});
            } catch (error) {
                console.error(error);
                message.channel.send("Une erreur s'est produite lors de la récupération des dernières notes de patch.");
            }

    }
}



