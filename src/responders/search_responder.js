postResponse = function (controller, bot, causeMessage, resultMessage){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, resultMessage);
    });
};