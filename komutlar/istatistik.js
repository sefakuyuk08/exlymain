const Discord = require("discord.js");
const db = require("quick.db");
const moment = require("moment");
require("moment-duration-format");
module.exports.run = async (bot, message) => {

  const duration = moment
    .duration(bot.uptime)
    .format("D [gün], H [saat], m [dakika], s [saniye]");
  const embed = new Discord.RichEmbed()
    .setColor("BLUE")
    .addField(`Versiyon`, `0.1`, true)
    .addField(`Aktiflik Süresi`, duration, true)
    .addField(`Sunucular`, bot.guilds.size.toLocaleString(), true)
    .addField(`Kullanıcılar`, bot.guilds.reduce((a, b) => a + b.memberCount, 0).toLocaleString(), true)
    .addField(
      `Ram Kullanımı`,
      `%${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}`,
      true
    )
    .addField(`Destek Sunucusu`, `https://discord.gg/uYz5Pu7xqs `, false)
    .addField(`Atlas Gaming`, `https://discord.gg/mg7zBCQE `, false)
    .setFooter(bot.user.username, bot.user.avatarURL);
  message.channel.send(embed);
};

module.exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: ['i', 'istatistik'],
  permLevel: 0,
  kategori: "sunucu"
};

module.exports.help = {
  name: "istatistik",
  description: "bot-bilgi",
  usage: "bot-bilgi"
};