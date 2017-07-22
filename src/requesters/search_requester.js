var Intercom = require('intercom-client');

require('../formatters/search_formatter.js');
require('../responders/search_responder.js');

var id;
var user;
var client = new Intercom.Client({ token: process.env.INTERCOM_PAT });
var contactCount;


makeSearchRequest = function (controller, bot, causeMessage, identifier, outputOption) {
    if(outputOption == 'useremail'){
      user = client.users.find({
      email: identifier
      }, function (d) {
      if(d.body.type == 'error.list'){
          postResponse(controller, bot, causeMessage, d.body.errors[0].message);
      }
      else{
        id = d.body.id;
        postResponse(controller, bot, causeMessage, formatSearch(id, outputOption));
      }
      });
    }
    else if(outputOption=='leademail'){
      user = client.leads.listBy({
      email: identifier
      }, function (d) {
        if(d.body.type == 'error.list'){
            postResponse(controller, bot, causeMessage, d.body.errors[0].message);
        }
        else{
          contactCount = d.body.total_count;
          if(contactCount > 0){
            for(var i = 0;i<contactCount;i++){
              id = d.body.contacts[i].id;
              postResponse(controller, bot, causeMessage, formatSearch(id, outputOption));
            }
          }
          else {
            postResponse(controller, bot, causeMessage, "Leads Not Found");
          }
      }
      });
    }
    else{
      postResponse(controller, bot, causeMessage, "I don't recognise that");
    }
}