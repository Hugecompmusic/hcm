const { MessageEmbed } = require("discord.js")
const { COLOR } = require("../config.json");
const ms = require("ms")


module.exports = {
  name: "stats",
  description: "Get the detailed information of bot",
  execute(client, message, args) {
    message.channel.send("plz wait")
  }
};
