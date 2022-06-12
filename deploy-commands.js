const { SlashCommandbuilder } = require("@discordjs/builders")
const { REST } = require("@iscordjs/rest")
const { Routes } = require("discord-api-types/v9")
const { clientId, guildId, token } = require("./config.json")

const commands = [
  new SlashCommandbuilder()
    .setName("ping")
    .setDescription("Replies with pong!"),
  new SlashCommandbuilder()
    .setName("server")
    .setDescription("Replies with server info"),
  new SlashCommandbuilder()
    .setName("user")
    .setDescription("Replies with user info"),
].map((command) => command.toJSON())

const rest = new REST({ version: "9" }).setToken(token)

rest
  .put(Routes.applicationGuildCommands(clientId, guildId), { body: commands })
  .then(() => console.log("Successfully registered application commmands."))
  .catch(console.error)
