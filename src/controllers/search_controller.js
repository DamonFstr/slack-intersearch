require('../requesters/search_requester.js');

var identifier;

setupSearchController = function (controller) {
   controller.hears(['user <mailto:([^\?]*)[|]([^\?]*)>'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a user's email: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'useremail');
    });

    controller.hears(['lead <mailto:([^\?]*)[|]([^\?]*)>'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a lead's email: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'leademail');
    });

    controller.hears(['user ([A-z][A-Za-z]*\s+[A-Za-z]*)|([A-z][A-Za-z]*)'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a user's first and last name: " + message);
        identifier = message.text.match(/user ([A-z][A-Za-z]*\s+[A-Za-z]*)|([A-z][A-Za-z]*)/[1]);
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'username');
    });

    controller.hears(['lead ([A-z][A-Za-z]*\s+[A-Za-z]*)|([A-z][A-Za-z]*)'], 'direct_message,direction_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a lead's first and last name: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'leadname');
    });

    controller.hears(['user ((\+))(\d|\s|\+|\.|\(|\)|\-*)*'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a user's phone number: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'userphone');
    });

    controller.hears(['lead ((\+))(\d|\s|\+|\.|\(|\)|\-*)*'], 'direct_message,direct_mention,mention', function (bot, message){
        console.log("Matching the following message that contains a lead's phone number: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'leadphone')
    });

    controller.hears(['user (.*)'], 'direct_message,direct_mention,mention', function (bot, message) {
        console.log("Matching the following message that contains a user's user_id: " + message);
        identifier = message.match[1];
        console.log("Making search request with identifier: " + identifier);
        makeSearchRequest(controller, bot, message, identifier, 'userid');
    });
};
