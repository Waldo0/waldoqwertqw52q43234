const Discord = require('discord.js')
module.exports = member => {

 var embed = new Discord.RichEmbed()


 .setFooter(' Aramızda seni görmekten gurur duyuyoruz.')
.addBlankField()
 .setColor('RED')
 member.send(embed)
 };
