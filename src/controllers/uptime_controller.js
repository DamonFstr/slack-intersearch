require('../formatters/uptime_formatter.js');
require('../responders/uptime_responder.js');

setupUptimeController = function (controller) {
    controller.hears(['uptime'],'direct_message,direct_mention,mention',function(bot, message) {

        uptimeResponse(controller, bot, message, formatUptime(process.uptime()));
    });
};