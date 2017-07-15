var Intercom = require('intercom-client');

require('../formatters/search_formatter.js');
require('../responders/search_responder.js');

var id;
var user;  
var client = new Intercom.Client({ token: process.env.INTERCOM_PAT });


makeSearchRequest = function (controller, bot, causeMessage, identifier, outputOption) {
  console.log(identifier);
    if(outputOption == 'user'){
      user = client.users.find({
      email: identifier
      }, function (d) {
      console.log(d.body);
      id = d.body.id;
      postResponse(controller, bot, causeMessage, formatSearch(id, outputOption));
      });
    }
    else if(outputOption=='lead'){
      user = client.leads.listBy({
      email: identifier
      }, function (d) {
      id = d.body.contacts[0].id;
      postResponse(controller, bot, causeMessage, formatSearch(id, outputOption));
      });
    }
    else{
      postResponse(controller, bot, causeMessage, "I don't recognise that user");
    }
}