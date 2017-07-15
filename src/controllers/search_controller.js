require('../requesters/search_requester.js');

setupSearchController = function (controller) {
    controller.hears(['user (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {
    var identifier = message.text.match(/mailto:([^\?]*)[|]/)[1];
    makeSearchRequest(controller, bot, message, identifier, 'user');
    });

    controller.hears(['lead (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {
        var identifier = message.text.match(/mailto:([^\?]*)[|]/)[1];
        makeSearchRequest(controller, bot, message, identifier, 'lead');
    });
};