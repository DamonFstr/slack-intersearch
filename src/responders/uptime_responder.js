uptimeResponse = function (controller, bot, causeMessage, uptime){
    controller.storage.users.get(causeMessage.user,function(err, user) {
        bot.reply(causeMessage, 'InterSearch has been up for: ' + uptime);
    });
};