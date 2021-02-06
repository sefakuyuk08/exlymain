const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`💎${client.user.username} <a:794913757397647371:794913757397647371> Sponsor Menüsü 💎 `)
        .setDescription(`** <a:794913757397647371:794913757397647371> YOk** [TIKLA](https://discord.gg/uYz5Pu7xqs) \n** <a:794913757397647371:794913757397647371> YOK** [TIKLA](https://discord.gg/uYz5Pu7xqs) \n** <a:794913757397647371:794913757397647371> Destek Sunucusu İçin** [TIKLA](https://discord.gg/uYz5Pu7xqs)`)
        .setThumbnail(client.user.avatarURL)
        .setFooter(`${message.author.username} Başarıyla ${ayarlar.prefix}davet Sistemi Kullandı!`, message.author.avatarURL)
    .setColor(`RANDOM`)
    return message.channel.sendEmbed(embed);
  
  
};

exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 0,
};

exports.help = {
  name: 'sponsor',
  description: '',
  usage: 'sponsor'
};
//Lord Creative