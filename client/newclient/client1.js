var mqtt = require('mqtt')
// client = mqtt.createClient(1883,'localhost');
var client  = mqtt.connect('mqtt://127.0.0.1:1883')
client.on('connect', function () {
  client.subscribe('presence')
  client.publish('presence', 'Client 1 is alive.. Test Ping! ' + Date())
  console.log('Client publishing..')
  client.end()
})



