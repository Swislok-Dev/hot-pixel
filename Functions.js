// ping gets latency in milliseconds
function getPing(message) {
  let latency = `Latency is ${message.createdTimestamp - Date.now()}ms.`
  console.log(`Latency is ${latency}ms.`)
  return latency
}

module.exports = {
  getPing,
}
