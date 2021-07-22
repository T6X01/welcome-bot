const Discord = require('discord.js');
const client = new Discord.Client();
const { MessageEmbed } = require('discord.js');
const config = require("./config.json")


client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

// welcome Event
client.on('guildMemberAdd', async member => {
  const role = member.guild.roles.cache.get(config.roleID)
  await member.roles.add(role.id)

    const channel = member.guild.channels.cache.get(config.welcomechannelID); 
    if (!channel) return;

    const welcomeembed = new MessageEmbed()
    .setDescription(`** ${member.user.tag} Welocme To our Server. **`)
    .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
    .setColor(config.WelcomeColour)

    channel.send(`<@${member.user.id}>`, welcomeembed)
});

// leave Event
client.on('guildMemberRemove', async member => {
    const channel2 = member.guild.channels.cache.get(config.LeavechannelID); 
    if (!channel2) return;

    const leaveembed = new MessageEmbed()
    .setDescription(`** ${member.user.tag} has left the server. **`)
    .setThumbnail(`${member.user.displayAvatarURL({dynamic: true})}`)
    .setColor(config.LeaveColour)

    channel2.send(`<@${member.user.id}>`, leaveembed)
});
// Discord Bot login
client.login(config.token);   

// BOT coded By MRX