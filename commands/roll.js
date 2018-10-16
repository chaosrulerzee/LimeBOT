const talkedRecently = new Set();
	
exports.run = function(client, message, args) {
	var n = 0;
	var roll = [];

	if (talkedRecently.has(message.author.id)) {
            message.channel.send("Wait 5 seconds before using this command again. " + message.author);
    } else {
        const A = client.emojis.find(A => A.name === "RankA");
        const S = client.emojis.find(S => S.name === "RankS");
        const SS = client.emojis.find(SS => SS.name === "RankSS");
        while(n != 10){
            var achar = ["Kyle", "Cindy", "2", "Rocco", "Carnero", "Mandragora", "2", "Dolly", "Duchi", "Viola", "Rose", "2", "Lydia", "Dr. Merken", "Sai", "Stavrogin", "Hekar", "Mamin", "Shasha", "2", "Fennel", "Charlotte", "Negia", "Osiris", "Marjoram", "Hanaru", "Nymphyr", "Ponya", "Husky", "Big Al", "2"];
            var num = achar.length;
            var rand = Math.floor(Math.random() * num);
            if(achar[rand] == "2"){
                var schar = ["Hanout", "Rasel", "3", "Belile", "Tarragon", "Balzac", "Olivia", "Cleo", "Sachi", "Nephilim", "Charon", "Dullahan", "Poseidon", "3", "Captain Boar", "Bergamot", "Turmeric", "Sage", "Sofia", "Mecha Rocco", "Nachoel", "Tacoel", "Flaune", "Dr. Molly", "Briel", "Gaian"];
                var snum = schar.length;
                var srand = Math.floor(Math.random() * snum);
                if(schar[srand] == "3"){
                    var sschar = ["Elesis", "Lire", "Arme", "Lass", "Ryan", "Ronan", "Amy", "Jin", "Sieghart", "Mari", "Ley", "Rufus", "Lime"];
                    var ssnum = sschar.length;
                    var ssrand = Math.floor(Math.random() * ssnum);
                    roll.push(`${SS}` + " " +  sschar[ssrand]);
                }else{
                    roll.push(`${S}` + " " + schar[srand]);
                }
            }else{
                roll.push(`${A}` + " " + achar[rand] );
            }
            n++;
            if(n == 10){
                var lschar = ["Hanout", "Rasel", "Belile", "Tarragon", "Balzac", "Olivia", "Cleo", "Sachi", "Nephilim", "Charon", "Dullahan", "Poseidon", "Captain Boar", "Bergamot", "Turmeric", "Sage", "Sofia", "Mecha Rocco", "Nachoel", "Tacoel", "Flaune", "Dr. Molly", "Briel", "Gaian"];
                var lsnum = lschar.length;
                var lsrand = Math.floor(Math.random() * lsnum);
                roll.push(`${S}` + " " + lschar[lsrand]);
            }
        }

        message.channel.send({
            embed: {
                color: 0xb1e7a3,
                description: message.author + " You rolled " + "\n" + roll[0] + ", " + roll[1] + ", " + roll[2] + ", " + roll[3] + ", " + roll[4] + ", " + roll[5] + ", " + roll[6] + ", " + roll[7] + ", " + roll[8] + ", " + roll[9] + ", " + roll[10]
        }}); 

        n = 0;
        roll.length = 0;
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
  aliases: ['r'],
  permLevel: 0
};

exports.help = {
  name: 'roll',
  description: 'Grand Chase gacha simulator',
  usage: 'salt simulator'
};