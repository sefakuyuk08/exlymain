const Discord = require('discord.js')

exports.run = async (client, message, args) => {
  
  let p = '+'
  let arg = args.slice(0).join(' ');
  
  if (!arg[0]) {
  const embed = new Discord.RichEmbed()
  .setAuthor(message.author.username, message.author.avatarURL)
  .setColor(0xF001FA)
  .setDescription(`[**Quave-Komutlar**]`)
  .addField(`**<💎Kullanıcı-Komutları💎**`,`:white_small_square: \`-ping\` = Botun Pingini gösterir. \n:white_small_square: \`-avatar\` = Avatarını gösterir.\n:white_small_square: \`-rolbilgi\` = Rol hakkında bilgi alırsınız.\n:white_small_square: \`-yaz\` = Bota İstediğiniz Şeyi Yazdırırsınız.  \n:white_small_square: \`-kullanıcıbilgim\` = Bilgilerinizi Gösterir. `)
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
  name: 'kullanıcı',
  description: 'Gelişmiş Yardım Menüsü',
  usage: 'yardım'
}
//Lord Creative