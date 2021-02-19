const Discord = require('discord.js');
const db = require('quick.db');
const ayarlar = require('../ayarlar.json');

var prefix = ayarlar.prefix;

exports.run = async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_GUILD")){
  let uyarı = new Discord.MessageEmbed()
  .setTitle("VoltranBilişim Hizmetleri Destek")
  .setThumbnail("https://cdn.discordapp.com/attachments/810258596369399818/811160024248352768/standard.gif") 
  .setColor("GREEN")
  .setDescription(`Komutu Kullanman İçin Yeterli İznin Yok Yada Komut Devredışı!`)
  .setTimestamp()
}
  let channel = message.mentions.channels.first();
  
  if(!args[0]){
    let kullanım = new Discord.MessageEmbed()
    .setTitle("Argüman")
    .setDescription(`${prefix}destek-kanal ayarla #kanal`)
    message.channel.send(kullanım)
    return
  }
  
  if(!channel){
    let channel = new Discord.MessageEmbed()
    .setTitle("Destek Kanal Ayarlama")
    .setDescription(`Kanal Belirtiniz.`)
    message.channel.send(channel)
    return
  }
  
  db.set(`destekkanal_${message.guild.id}`, channel)
  
  const msg = new Discord.MessageEmbed()
  .setTitle("Destek Kanal Ayarlama")
  .setColor("GREEN")
  .setDescription(`Destek Kanalı Başarıyla ${channel} Kanalına Ayarlandı!`)
  message.channel.send(msg)
}

exports.conf = {
  enabled: true,
  guildOnly: true,
  aliases: [],
  permLevel: 0
}

exports.help = {
  name: 'destek-kanal',
  usage: 'destek-kanal ayarla'
}