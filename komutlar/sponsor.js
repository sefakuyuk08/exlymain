const Discord = require('discord.js');
const ayarlar = require('../ayarlar.json');

exports.run = (client, message, args) => {
    const embed = new Discord.RichEmbed()
        
        .setTitle(`💎${client.user.username}  Sponsor Menüsü 💎 `)
        .setDescription(`** Voltran Bilişim Hizmetleri** [TIKLA](https://discord.gg/WqVA33N27c) \n**  Yusuf YT** [TIKLA](https://www.youtube.com/channel/UCFOSQ1aEX0kVE0j2bBf1b8g) \n**  Destek Sunucusu İçin** [TIKLA](https://discord.gg/XVVyFs3KNa)`)
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