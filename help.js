const Discord = require('discord.js');
const disbut = require('discord-buttons');
const { MessageActionRow, MessageButton } = require("discord-buttons");

module.exports = {
  name: "help",
   aliases: ["hlp"],
  run: async (client, message, args ) => {

    const embed = new Discord.MessageEmbed()
    .setDescription(`Hey ${message.author}, I am ${client.user} I am Devloped By <@754968472877924477>`);
    const embed1 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setTitle("<a:down_ps:818757707040555018> | **__Here are some of my Music Commands__** | <a:down_ps:818757707040555018>")
    .setDescription('<a:11pm_right2:841928349336731648> | `clear-queue`,\n <a:11pm_right2:841928349336731648> | `filter-list`,\n <a:11pm_right2:841928349336731648> | `filters`,\n <a:11pm_right2:841928349336731648> | `loop`,\n <a:11pm_right2:841928349336731648> | `now-playing`,\n <a:11pm_right2:841928349336731648> | `pause`,\n <a:11pm_right2:841928349336731648> | `play`,\n <a:11pm_right2:841928349336731648> | `queue`,\n <a:11pm_right2:841928349336731648> | `resume`,\n <a:11pm_right2:841928349336731648> | `search`,\n <a:11pm_right2:841928349336731648> | `shuffle`,\n <a:11pm_right2:841928349336731648> | `skip`,\n <a:11pm_right2:841928349336731648> | `stop`,\n <a:11pm_right2:841928349336731648> | `volume`');

    const embed2 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription('__**Some Of My Info Commands**__ \n <a:11pm_right2:841928349336731648> | `help`,\n <a:11pm_right2:841928349336731648> | `invite`,\n <a:11pm_right2:841928349336731648> | `developer`');

    const embed3 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription(`<:pot_hey:926758266023850034> Hey ${message.author},I am ${client.user}
    \n <:904592062446444585:912284177846640681> <:P_Invitevro:937550714853531678> | [Invite Me](https://discord.com/api/oauth2/authorize?client_id=937536139873619978&permissions=8&scope=bot)
    \n <a:discord:760928445919920130> | [Support](https://discord.gg/nTb9dSM6mj)`);
    
    const embed4 = new Discord.MessageEmbed()
    .setColor("BLURPLE")
    .setDescription('<a:Loading:911363067839926282> | `My Ping is - ${client.ws.ping}`');
    
    let button1 = new MessageButton()
    .setLabel(`Music Commands`)
    .setID(`help1`)
    .setEmoji('800451879069810759')
    .setStyle("blurple");

    let button2 = new MessageButton()
    .setLabel(`Random Commands`)
    .setID(`help2`)
    .setEmoji('❓')
    .setStyle("blurple");

    let button3 = new MessageButton()
    .setLabel(`INVITE ${client.user.username}`)
    .setID(`help3`)
    .setEmoji('904592062446444585')
    .setStyle("blurple");

    let button4 = new MessageButton()
    .setLabel(`PING`)
    .setID(`help4`)
    .setEmoji('862306785007632385')
    .setStyle("blurple");

    

    let row = new MessageActionRow()
    .addComponents(button1,button2,button3,button4);


    const MESSAGE = await message.channel.sesnd(embed, row);

    const filter = ( button ) => button.clicker.user.id === message.author.id 
    const collector = MESSAGE.createButtonCollector(filter, { time : 300000 });

    collector.on('collect', async (b) => {

        if(b.id == "help1") {

            MESSAGE.edit(embed1, row);
            await b.reply.defer()

        }

        if(b.id == "help2") {
            
            MESSAGE.edit(embed2, row);
            await b.reply.defer()

        }
       
        if(b.id == "help3") {
            
            MESSAGE.edit(embed3, row);
            await b.reply.defer()

        }

        if(b.id == "help4") {
            
            MESSAGE.edit(embed4, row);
            await b.reply.defer()

        }


    })

    collector.on('end', (b) => {
        MESSAGE.edit('<:Error:933470781168566374> `This help menu is expired! Type the command again to view.`')
    })


    }
  };