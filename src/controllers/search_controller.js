require('../requesters/search_requester.js');

var identifier;

setupSearchController = function (controller) {
   controller.hears(['user <mailto:([^\?]*)[|]([^\?]*)>'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'useremail');
    });

    controller.hears(['lead <mailto:([^\?]*)[|]([^\?]*)>'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'leademail');
    });

    controller.hears(['user -n (.*)'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'username');
    });

    controller.hears(['lead -n (.*)'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'leadname');
    });

    controller.hears(['user -p (.*)'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'userphone');
    });

    controller.hears(['lead -p (.*)'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'leadphone')
    });

    controller.hears(['user (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {
        console.log("Matching the following message: ");
        console.log(message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier.toString());
        makeSearchRequest(controller, bot, message, identifier, 'userid');
    });
};
