const chalk = require('chalk')
const moment = require('moment')
const Discord = require('discord.js')
const ayarlar = require('../ayarlar.json')

var prefix= ayarlar.prefix;

module.exports = client => {
  console.log(`Exly | Code`);
  console.log(`Komutlar Hazı!`);
  console.log(`Exly | Code`);
  client.user.setStatus("online");
  //idle = boşta
  //dnd = rahatsız etmeyin
  //online = çevrimiçi
    var oyun = [
        "Yapımcım #SefaKüyük",
        "+yardım & +moderasyon & +moderasyon2",
        "+sponsor",
        "Yusuf YT #Sponsor",
        "Voltran Bilişim #Sponsor",
    ];
  
    setInterval(function() {

        var random = Math.floor(Math.random()*(oyun.length-0+1)+0);

        client.user.setGame(oyun[random], );
        }, 2 * 9000);
  
};