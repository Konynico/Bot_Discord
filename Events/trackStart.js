module.exports = async (bot, queue,track) => {
    queue.metadata.message.send(`La musique **${track.title} est lancée !`) 
}