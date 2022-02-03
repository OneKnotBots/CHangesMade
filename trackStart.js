module.exports = (client, message, track) => {
    message.channel.send({embed:{
      color: "RANDOM",
      description:`<a:ShakeDance:800451843427139606> - Now playing ${track.title} | -Added By ${message.member.user} `}});
};