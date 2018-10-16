module.exports = client => {
	console.log("I am ready!");
	client.user.setActivity('In development');

	var schedule = require('node-schedule');
	var sat = schedule.scheduleJob({hour: 12, minute: 1, dayOfWeek: 6}, function(){
		client.channels.get('485061758608736279').send({
			embed: {
				color: 0xb1e7a3,
  				description: "Friendly reminder to do wizard's labyrinth extra entry."
		}});
	});

	var satu = schedule.scheduleJob({hour: 19, minute: 1, dayOfWeek: 6}, function(){
		client.channels.get('485061758608736279').send({
			embed: {
				color: 0xb1e7a3,
  				description: "Friendly reminder to do wizard's labyrinth extra entry."
		}});
	});

	var sun = schedule.scheduleJob({hour: 12, minute: 1, dayOfWeek: 0}, function(){
		client.channels.get('485061758608736279').send({
			embed: {
				color: 0xb1e7a3,
  				description: "Friendly reminder to do wizard's labyrinth extra entry."
		}});
	});

	var sund = schedule.scheduleJob({hour: 19, minute: 1, dayOfWeek: 0}, function(){
		client.channels.get('485061758608736279').send({
			embed: {
				color: 0xb1e7a3,
  				description: "Friendly reminder to do wizard's labyrinth extra entry."
		}});
	});

}