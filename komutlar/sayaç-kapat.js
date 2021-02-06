const Discord = require('discord.js'),
      db = require('quick.db'),
      ayarlar = require('../ayarlar.json'),
      prefix = ayarlar.prefix
exports.run = async (client, message, args) => {
  
let frenzysayı = await db.fetch(`FrenzyCode+SayaçSayı_${message.guild.id}`)  
let frenzykanal = await db.fetch(`FrenzyCode+SayaçKanal_${message.guild.id}`)  
 
if(!frenzysayı && !frenzykanal) return message.reply(`Sayaç Sistemi Zaten Ayarlı Değil! **Ayarlamak İçin** : \`${prefix}sayaç #kanal 100\``)
db.delete(`FrenzyCode+SayaçSayı_${message.guild.id}`) 
db.delete(`FrenzyCode+SayaçKanal_${message.guild.id}`) 
message.reply(`Sayaç Başarıyla Kapatıldı!💎!`)
};
exports.conf = {
  enabled: true,
  guildOnly: false,
  aliases: [],
  permLevel: 3
};
exports.help = {
  name: 'sayaç-kapat',
  description: 'Sayaç Sistemi - Quave',
  usage: 'sayaç-kapat'
};
//Lord Creative