const { Client, Intents } = require('discord.js')
require('dotenv').config()

const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] })

client.once('ready', () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on('message', (msg) => {
  if (msg.content === 'ping') {
    msg.reply('pong')
    console.log('This guy was pinged')
  } else {
    console.log('Pingged but did not send reply')
  }
})

client.login(process.env.TOKEN)