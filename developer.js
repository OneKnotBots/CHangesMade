const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "developer",
   aliases: ["dev"],
  run: async (client, message, args ) => {
      //--------------------------------------S T A R T---------------------------------------

    //--------------------EMBEDS------------------------
    const embed = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/938476524615659583/938634147302375484/standard_36.gif?width=351&height=45')
    .setThumbnail("https://images-ext-2.discordapp.net/external/vcXtLxs_1ZuEbBGYZBwoXecs5AEThiTguhqKvmy66G0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/937536139873619978/f34a4cd35e1354d00f7500ea1149ab72.png?width=192&height=192")
    .setDescription('Here Is My `Developer info`');

    const embed1 = new Discord.MessageEmbed()
    .setImage('https://media.discordapp.net/attachments/938476524615659583/938634147302375484/standard_36.gif?width=351&height=45')
    .setThumbnail("https://images-ext-2.discordapp.net/external/vcXtLxs_1ZuEbBGYZBwoXecs5AEThiTguhqKvmy66G0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/937536139873619978/f34a4cd35e1354d00f7500ea1149ab72.png?width=192&height=192f")
    .setDescription('Here Is My `Developer info`');

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setThumbnail("https://images-ext-2.discordapp.net/external/vcXtLxs_1ZuEbBGYZBwoXecs5AEThiTguhqKvmy66G0/%3Fsize%3D4096/https/cdn.discordapp.com/avatars/937536139873619978/f34a4cd35e1354d00f7500ea1149ab72.png?width=192&height=192")
    .setDescription(`Developed By - athxrva#1011`);

    let button1 = new MessageButton()
    .setLabel(`BACK`)
    .setEmoji("833802907509719130")
    .setID(`help1`)
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`athxrva#1011`)
    .setID(`help2`)
    .setStyle("blurple");
 
    let row = new MessageActionRow()
    .addComponents(button1, button2);
   

    //--------------------Buttons------------------------

    const MESSAGE = await message.channel.send(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 120000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }
        if(b.id == "help2") {

            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit(`This command menu is expired! Type the command again to view.`)
    })

       
    }
  };