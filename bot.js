const Discord = require('discord.js');
const client = new Discord.Client();
console.log("Scrpit By Dream");


client.on("ready", () => {
let channel =     client.channels.get("506776770700247040")
setInterval(function() {
channel.send(`Aleto , Aleto`);
}, 1000)
})

client.login(process.env.BOT_TOKEN);
