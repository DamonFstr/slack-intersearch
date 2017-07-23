helpResponse = function (controller, bot, causeMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, 'How to use me:\n' +
            '@intersearch [user | lead ] [-n | -p] [email address | user_id | name | phone number]\n' +
            'user: Specify that you want to find a user\n' +
            'lead: Specify that you want to find a lead\n' +
            '-p: Specify that you want to search using a phone number\n' +
            '-n: Specify that you want to search using a name\n' +
            'email address: the email address of the user/lead\n' +
            'user_id: the user_id of the user (users only)\n' +
            'name: Used in combination with the -n modifier. This is the user/lead name\n' +
            'phone number: Used in combination with the -p modifier. This is the user/lead phone number\n' +
            'Note: The bot uses an exact match, so make sure that you are passing in a search term with the correct casing/formatting etc.\n'
            );
    });
};