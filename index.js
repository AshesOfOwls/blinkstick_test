require('dotenv').config();

var blinkstick = require('blinkstick');
var slack = require('slack');
var bot = slack.rtm.client();
var token = process.env.SLACK_TOKEN;

var device = blinkstick.findFirst();

bot.dnd.setSnooze({token, num_minutes}, (err, data) => {
  device.setColor("red");
})
