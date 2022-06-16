const Functions = require("./Functions")

function onMessage(message, client) {
  if (message.author.bot) return

  message.content = message.content.toLowerCase()
  switch (message.content) {
    case "hello":
      message.channel.send(`Hello ${message.author.username}`)
      break
    case "$ping":
      message
        .reply(Functions.getPing(message))
        .then((message) => {
          settimeout(() => message.delete(), 5000)
        })
        .then(console.log("Bot recieved a ping!"))
      break
    default:
      break
  }
}

module.exports = { onMessage }
