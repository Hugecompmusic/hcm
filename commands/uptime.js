module.exports = {
  name: "uptime",
  aliases: ["u"],
  description: "Check the uptime",
  execute(message) {
    let seconds = Math.floor(message.client.uptime / 1000);
    let minutes = Math.floor(seconds / 60);
    let hours = Math.floor(minutes / 60);
    let days = Math.floor(hours / 24);
    

    seconds %= 60;
    minutes %= 60;
    hours %= 24;

    return message
      .reply(`Uptime: \`${days} day(s),${hours} hours, ${minutes} minutes, ${seconds} seconds\``)
      .catch(console.error);
    
    
     let embed = new MessageEmbed()
    .setColor(COLOR)
    .setThumbnail(client.user.displayAvatarURL())
    .setAuthor(`STATS AND INFORMATION`, client.user.displayAvatarURL())
    .setDescription(`My name is **${client.user.username}** and My work is to play Music`)
    .addField("SERVERS", client.guilds.cache.size, true)
    .addField("PRESENCE", client.user.presence.activities[0].name, true)
    .addField("ID", client.user.id, true)
    .addField("UPTIME", ms(client.uptime), true)
    .addField("STATUS", client.user.presence.status, true)
    .addField("TOTAL MEMBERS", client.users.cache.size, true)
    .addField("NO. OF GUILD IN BOT IS PLAYING", client.queue.size)
 console.log(client.user.presence)
    message.channel.send(embed)
  }
};
