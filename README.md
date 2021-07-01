
# Discord-simple-Welcome Bot


## **Installation | How to use the Bot**

 **1.** Install [node.js v12](https://nodejs.org/en/download/) or higher

 **2.** Download this repo and unzip it  |  or git clone it
 
 **3.** Fill in everything in index.js
 
 **4.** start the bot with **`start.bat`**

### *Usage - index.js*

```javascript
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('guildMemberAdd', async member => {
    const channel = member.guild.channels.cache.get('your join channel id'); // edit  your join channel id and paste your join channel id 
    if (!channel) return;

    channel.send(`<@${member.user.id}> welcome`)
});

client.on('guildMemberRemove', async member => {
    const channel = member.guild.channels.cache.get('your leave channel id'); // edit  your leave channel id and paste your leave channel id 
    if (!channel) return;

    channel.send(`<@${member.user.id}> goodbye`)
});


client.login('your bot Token here'); // edit  your bot Token here and paste your bot token             
```



#### ***NOTE :***

*You can edit the file, but make sure it is in the same code or else it will mess up the placing, if you know how to code but i suggest you to not change the code.*

*If you are having errors/problems with starting delete the package.json file and do, 
 before you install the packages `npm init`*




***Discord Server :***
[https://discord.gg/QstbsYEzDS](https://discord.gg/QstbsYEzDS)



