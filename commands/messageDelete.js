const Discord = require("discord.js");
const { PREFIX, } = require(`../config.json`);
    const logChannel = message.guild.channels.cache.find(c => c.name === "modlog");

    if (!logChannel) return;

    let chunked;
    if (message.content.length > 1024) {
        chunked = message.content.substring(0, message.content.length - 1024) + "...";
    } else {
        chunked = message.content;
    }

    let embed = new Discord.MessageEmbed()
        .setAuthor(message.author.tag, message.author.displayAvatarURL({ dynamic: true }))
        .setFooter(`User ID: ${message.author.id} | Message ID: ${message.id}`)
        .setTimestamp()
        .setDescription([
            `**Message sent by** <@!${message.author.id}> **deleted in** <#${message.channel.id}>`,
            chunked
        ].join("\n"))

    logChannel.send(embed); 
}
