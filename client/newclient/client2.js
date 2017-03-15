var mqtt = require('mqtt')
// client = mqtt.createClient(1883,'localhost');
client  = mqtt.connect('mqtt://127.0.0.1:1883')
client.subscribe('presence');
client.on('message',function(topic,message){
	console.log(message.toString());
});
console.log('client started ...');