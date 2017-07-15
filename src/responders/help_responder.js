helpResponse = function (controller, bot, causeMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, 'How to use me:\n' +
            '@intersearch [user | lead ] [email address]\n' +
            'user: Specify that you want to find a user\n' +
            'lead: specify that you want to find a lead\n' +
            'email address: the email address of the user/lead\n');
    });
};