const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get('your join channel id');
    if (!channel) return;

    channel.send(`<@${member.user.id}> welcome`)
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.get('your leave channel id');
    if (!channel) return;

    channel.send(`<@${member.user.id}> goodbye`)
});


client.login('your bot Token here');