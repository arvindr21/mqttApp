var mqtt = require('mqtt')

client = mqtt.createClient(1883, 'localhost');

client.subscribe('presence');

client.on('message', function(topic, message) {
  console.log(message);
});

console.log('Client started...');
