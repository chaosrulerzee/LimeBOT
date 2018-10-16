const Discord = require("discord.js");
const auth = require('../config.json');
const XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

function imgurRequest(subreddit, page_max)
{
    var multiSubreddit = subreddit.split(',');

    var request_url = 'https://api.imgur.com/3/gallery/r/' + multiSubreddit[getRandomInt(0, multiSubreddit.length-1)] + '/time/' + getRandomInt(1,page_max);

    var req = new XMLHttpRequest();
    var returnText = "";
    
    req.onreadystatechange = function() 
    { 
       if (req.readyState == 4 && req.status == 200) 
       {
           if(req.responseText != "Not found")
            {
                var json = JSON.parse(req.responseText);
                returnText = json.data[getRandomInt(0,json.data.length-1)].link;
            }
       }
    }
    
    req.open("GET", request_url, false);   
    req.setRequestHeader('Authorization', 'Client-ID ' + auth.imgur);
    req.send();

    return returnText;
}

function redditbooruRequest(subreddit)
{
    var multiSubreddit = subreddit.split(',');

    var url = "https://" + multiSubreddit[getRandomInt(0, multiSubreddit.length-1)] + ".redditbooru.com/images/?limit=1000";
    var req = new XMLHttpRequest();
    var returnText = "";

    req.onreadystatechange = function()
    {
        if(req.readyState == 4 && req.status == 200)
        {
            var json = JSON.parse(req.responseText);
            var imageID = getRandomInt(0, json.length);
            returnText = json[imageID].cdnUrl;
        }
    }

    req.open("GET", url, false);
    req.send();

    return returnText;
}

function getRandomInt(min, max) 
{
    return Math.floor(Math.random() * (max - min + 1)) + min;
}


var embed = new Discord.RichEmbed()
  .setColor(0xb1e7a3)
  .setImage("https://i.imgur.com/evi5wmq.png");

exports.run = (client, message, args) => {
	message.channel.send(redditbooruRequest('awwnime'));        
}

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0
};

exports.help = {
  name: 'test',
  description: '....',
  usage: 'burn'
};