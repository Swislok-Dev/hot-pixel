const { Client, Intents } = require("discord.js")
require("dotenv").config()
const listener = require("./listener")

const client = new Client({
  intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES],
})

client.once("ready", () => {
  console.log(`Logged in as ${client.user.tag}`)
})

client.on("interactionCreate", async (interaction) => {
  if (!interaction.isCommand()) return

  const { commandName } = interaction

  if (commandName === "ping") {
    await interaction.reply("Pong")
  } else if (commandName === "server") {
    await interaction.reply(
      `Server name: ${interaction.guild.name}\nTotal members: ${interaction.guild.memberCount}\nServer created on: ${interaction.guild.createdAt}`
    )
  } else if (commandName === "user") {
    await interaction.reply(
      `Your tag: ${interaction.user.tag}\nYour id: ${interaction.user.id}`
    )
  }
})

client.on("messageCreate", (message) => {
  listener.onMessage(message)
})

client.login(process.env.TOKEN)
