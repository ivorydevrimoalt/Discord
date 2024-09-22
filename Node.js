const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

setInterval(function(){message.channel.send("!give-money ivorydevrimo 42069");},12000)

client.login(process.env.token);
