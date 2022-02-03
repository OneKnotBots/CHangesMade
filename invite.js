const ButtonPages = require('discord-button-pages');
const { MessageEmbed } = require('discord.js')
const disbutpages = require("discord-embeds-pages-buttons")
const Discord = require("discord.js");
const disbut = require("discord-buttons");
const MessageButton = require("discord-buttons");

module.exports = {
  name: "invite",
  aliases: ["info"],
  description: "Shows all commands of the bot",

  run: async (client, message, args) => {
    let helpEmbed = new MessageEmbed()
      .setTitle("My Info")
      .setDescription(`> <:Youtube:911537245918474251>| Youtube
DEVIL NISHANT - [Click Here For Link](https://www.youtube.com/channel/UCzAGQrMCsPo-NOqfFUW0Kjg)
> <:Discord:911534962304516126> | Discord Server
DEVIL'S HOMETOWN - [Click Here To Join](https://discord.gg/XeMGkXUH6Y)
> <:repl:911534961776033812> | Replit
DEVIL NISHANT - [Click Here To View Replit](https://replit.com/@DEVILNISHANT)
> <:GITHUB:911534962010886156> | Github
DEVIL NISHANT - [Click Here For Link](https://github.com/NISHAHT)`)
      .setThumbnail(client.user.displayAvatarURL())
      .setFooter("Click on these buttons to know more about me!")
      .setColor("#FFFFF0")


      let button1 = new disbut.MessageButton()
      .setStyle('url')
      .setLabel('Invite Me') 
      .setURL(`https://discord.com/api/oauth2/authorize?client_id=937536139873619978&permissions=8&scope=bot`)

      let button2 = new disbut.MessageButton()
      .setStyle('blurple')
      .setLabel("THX FOR INVITING")
      .setID('button2')

      message.channel.send('INVITE ME :>')
 
      return message.channel.send(helpEmbed,{
        button: [button1,button2],
      });

  },
};