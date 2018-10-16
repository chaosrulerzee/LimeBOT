const config = require('../config.json');

exports.run = function(client, message, args) {
	var array = message.content.split(' ', 2);
	if (array.length >= 2) {
		return;
	} else {
		message.channel.send({
			embed: {
				color: 0xb1e7a3,
  				description: "Pong!"
		}});
	}
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'ping',
  description: 'Ping',
  usage: 'ping'
};