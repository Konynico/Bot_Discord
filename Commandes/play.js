const Discord = require("discord.js")

module.exports = {

        name: "play",
        description: "la commande pour lancer une musique",
        permissions: "Aucune",
        dm: false,
        category: "Loisir",
        autocomplete: false,
        options: [
            {
                type: "string",
                name: "musique",
                description: "La musique que vous voulez jouer",
                required: true,
                autocomplete: false
            }
        ],


        async run(bot, message, args) {

            let song = args.getString("musique")
            if(!message.member.voice.channel) return message.reply("Vous devez être dans un salon vocal pour utiliser cette commande !")
            if((await message.guild.members.fetchMe()).voice.channel && (await message.guild.members.fetchMe()).voice.channel.id !== message.member.voice.channel.id) return message.reply("Vous devez être dans le même salon vocal que moi pour utiliser cette commande !")

            await message.deferReply()

            const queue = await bot.player.createQueue(message.guild, {metadata : {message: message}})

            const track = await bot.player.search(song, {requestBy: message.user}).then(x => x.tracks[0])
            if(!track) return message.reply("Aucune musique trouvé !")

            if(!queue.connection) await queue.connect(message.member.voice.channel)
            await queue.play(track)
            message.editReply(`La musique **${track.title}** a été ajouté à la file d'attente !`)
}}       