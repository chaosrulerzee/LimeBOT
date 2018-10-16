const config = require('../config.json');

exports.run = (client, message, args) => {
	const arg = message.content.slice(7).trim().split(',');
	if (arg.length > 1) {
		message.channel.send("I choose: " + arg[Math.floor(Math.random() * arg.length)]);
	} else {
		return;
	}

}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'choose',
  description: 'chooses randomly from given choices',
  usage: 'choose <option1>, <option2>, etc..'
};