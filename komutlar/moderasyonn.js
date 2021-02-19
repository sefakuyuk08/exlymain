const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Exlu-Komutlar**]`)
  .addField(`**Moderasyon-2**`,`1: \`+sunucu-kur\` = Otomatik Sunucu Kurar. \n 2 \`+davet-takip\` = Sunucuda Kimin Kaç Davet Yaptığını Görürsünüz.\n 3: \`+resimliyazı\` = Resimli Yazı Atar. \n 4 \`+boks\` = Boks Yaparsınız.
`)
  return message.channel.sendEmbed(embed);
  
      
       
  }
   
  
}
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['yardım','help','y'],
  permlevel: 0
};

exports.help = {
  name: 'moderasyon2',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Lord Creative