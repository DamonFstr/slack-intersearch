var Intercom = require('intercom-client');

require('../formatters/search_formatter.js');
require('../responders/search_responder.js');

var id;
var user;
var client = new Intercom.Client({ token: process.env.INTERCOM_PAT });
var contactCount;
var results = 0;


makeSearchRequest = function (controller, bot, causeMessage, identifier, outputOption) {
    switch(outputOption)
    {
      case 'userid':
        user = client.users.find({
        user_id: identifier
        }, function (d) {
          if(d.body.type == 'error.list'){
            postResponse(controller, bot, causeMessage, d.body.errors[0].message);
          }
          else{
            id = d.body.id;
            postResponse(controller, bot, causeMessage, formatSearch(id));
          }
        });
      break;

      case 'useremail':
        user = client.users.find({
          email: identifier
        }, function (d) {
          if(d.body.type == 'error.list'){
            postResponse(controller, bot, causeMessage, d.body.errors[0].message);
            console.log("The Intercom API returned the following errors: " + d.body.errors[0]);
         }
          else{
            id = d.body.id;
            postResponse(controller, bot, causeMessage, formatSearch(id));
          }
        });
      break;

      case 'leademail':
        user = client.leads.listBy({
        email: identifier
        }, function (d) {
          if(d.body.type == 'error.list'){
            postResponse(controller, bot, causeMessage, d.body.errors[0].message);
            console.log("The Intercom API returned the following errors: " + d.body.errors[0]);
          }
          else{
            contactCount = d.body.total_count;
            if(contactCount > 0){
              for(var i = 0;i<contactCount;i++){
                id = d.body.contacts[i].id;
                postResponse(controller, bot, causeMessage, formatSearch(id));
              }
            }
            else {
              postResponse(controller, bot, causeMessage, "Leads Not Found");
            }
        }
        });
      break;

        case 'username':
          client.users.scroll.each({}, function(res) {
            if(res.body.type == 'error.list'){
              postResponse(controller, bot, causeMessage, res.body.errors.message[0]);
            }
            if (res.body.users.length>0){
              console.log("Entering scroll with users");
              for(i=0;i<res.body.users.length;i++){
                if(res.body.users[i].name == identifier){
                  id = res.body.users[i].id;
                  console.log("Found user that matched the name " + id);
                  results++;
                  postResponse(controller, bot, causeMessage, formatSearch(id));
                }
              }
            }
            if (results < 1)
            {
              postResponse(controller, bot, causeMessage, "User(s) Not Found");
            }
          });
        break;

        case 'leadname':
          client.leads.scroll.each({}, function(res) {
            if(res.body.type == 'error.list'){
              postResponse(controller, bot, causeMessage, res.body.errors.message[0]);
            }
            if (res.body.contacts.length>0){
              console.log("Entering scroll with leads");
              for(i=0;i<res.body.contacts.length;i++){
                if(res.body.contacts[i].name == identifier){
                  id = res.body.contacts[i].id;
                  console.log("Found lead that matched the name " + id);
                  results++;
                  postResponse(controller, bot, causeMessage, formatSearch(id));
                }
              }
            }
            if (results < 1)
            {
              postResponse(controller, bot, causeMessage, "Lead(s) Not Found");
            }
          });
        break;

        case 'userphone':
          client.users.scroll.each({}, function(res) {
            if(res.body.type == 'error.list'){
              postResponse(controller, bot, causeMessage, res.body.errors.message[0]);
            }
            if (res.body.users.length>0){
              console.log("Entering scroll with users");
              for(i=0;i<res.body.users.length;i++){
                if(res.body.users[i].phone == identifier){
                  id = res.body.users[i].id;
                  console.log("Found user that matched the name " + id);
                  results++;
                  postResponse(controller, bot, causeMessage, formatSearch(id));
                }
              }
            }
            if (results < 1)
            {
              postResponse(controller, bot, causeMessage, "User(s) Not Found");
            }
          });
        break;

        case 'leadphone':
          client.leads.scroll.each({}, function(res) {
            if(res.body.type == 'error.list'){
              postResponse(controller, bot, causeMessage, res.body.errors.message[0]);
            }
            if (res.body.contacts.length>0){
              console.log("Entering scroll with leads");
              for(i=0;i<res.body.contacts.length;i++){
                if(res.body.contacts[i].phone == identifier){
                  id = res.body.contacts[i].id;
                  console.log("Found lead that matched the name " + id);
                  results++;
                  postResponse(controller, bot, causeMessage, formatSearch(id));
                }
              }
            }
            if (results < 1)
            {
              postResponse(controller, bot, causeMessage, "Lead(s) Not Found");
            }
          });
        break;
 
      default: 
        postResponse(controller, bot, causeMessage, "I don't recognise that");
        break;
    }
}