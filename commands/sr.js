const talkedRecently = new Set();

exports.run = (client, message, args) => {
        if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 seconds before using this command again. " + message.author);
        } else {
            const SS = client.emojis.find(SS => SS.name === "RankSS");
            var sschar = ["Elesis", "Lire", "Arme", "Lass", "Ryan", "Ronan", "Amy", "Jin", "Sieghart", "Mari", "Ley", "Rufus", "Lime"];
            var ssnum = sschar.length;
            var ssrand = Math.floor(Math.random() * ssnum);
            message.channel.send({
            embed: {
                color: 0xb1e7a3,
                description: `${SS}` + " " +  sschar[ssrand]
        }});
            talkedRecently.add(message.author.id);
            setTimeout(() => {
              // Removes the user from the set after a minute
            talkedRecently.delete(message.author.id);
            }, 5000);
        }
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'sr',
  description: 'randomly chooses an SR',
  usage: 'sr'
};