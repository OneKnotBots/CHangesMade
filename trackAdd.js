const discord = require("discord.js")
module.exports = (client, message, queue, track) => {

const paras = new discord.MessageEmbed()
.setTitle(`<a:zz_pandadance:937569450926960720> |  Added to queue `)
.setDescription(`
${track.title} | -For ${message.member.user}
`)
  message.channel.send(paras);
}