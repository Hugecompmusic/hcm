const Discord = require("discord.js");

module.exports.run = async (bot, message, args) => {
    function checkDays(date) {
        let now = new Date();
        let diff = now.getTime() - date.getTime();
        let days = Math.floor(diff / 86400000);
        return days + (days == 1 ? " day" : " days") + " ago";
    };
    let verifLevels = ["None", "Low", "Medium", "(╯°□°）╯︵  ┻━┻", "┻━┻ミヽ(ಠ益ಠ)ノ彡┻━┻"];
    let region = {
