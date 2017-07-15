require('../responders/help_responder.js');

setupHelpController = function (controller) {
    controller.hears(['help'],'direct_message,direct_mention,mention',function(bot, message) {

        helpResponse(controller, bot, message);
    });
};