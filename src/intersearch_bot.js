var Botkit = require('botkit');
require('./src/controllers/help_controller.js');
require('./src/controllers/uptime_controller.js');
require('./src/controllers/search_controller.js');

var controller = Botkit.slackbot({
    debug: false,
});

controller.spawn({
    token: process.env.token
}).startRTM();

setupSearchController(controller);

setupHelpController(controller);

setupUptimeController(controller);