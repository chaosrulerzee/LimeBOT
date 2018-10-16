const Discord = require("discord.js");
var embed = new Discord.RichEmbed()
  .setColor(0xb1e7a3)
  .setImage("https://i.imgur.com/evi5wmq.png");
exports.run = (client, message, args) => {
	message.channel.send(embed);        
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'burn',
  description: '....',
  usage: 'burn'
};