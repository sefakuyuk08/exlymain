const Discord = require('discord.js');
exports.run = async (client, message, args) => { 
let prefix = '!'
let yardım = new Discord.RichEmbed()  
.setAuthor(`${client.user.username}`, client.user.avatarURL)
.setColor('BLACK')
.addField('Quave',`
<a:794913757397647371:794913757397647371> **+moderasyon** : Moderasyon Komutlarını Açar.
<a:794913757397647371:794913757397647371> **+kullanıcı** : Kullanıcı Komutları Açar.
<a:794913757397647371:794913757397647371> **+yeni-komutlar** : Yeni Komutları Açar.`)
.setFooter(`${message.author.tag} Tarafından İstendi.`, message.author.avatarURL)
.setThumbnail(client.user.avatarURL)
 message.channel.send(yardım) 
  };
exports.conf = {
  enabled: true,  
  guildOnly: false, 
  aliases: ["help"], 
  permLevel: 0
};
exports.help = {
  name: 'yardım'
};
//Lord Creative  