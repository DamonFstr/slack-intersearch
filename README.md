# slack-intersearch
A slackbot that returns a user or lead from your intercom app. This slackbot is built using Node.js.

## Getting Started ##

```
    git clone https://github.com/damonfstr/slack-intersearch.git
```

There are three envoronmental variables that need to be set up to make intersearch work. 

1. INTERCOM_PAT = Your Intercom access token. 
2. token = Your Slack access token
3. app_id = Your Intercom app_id

## Integration with Slack ##

You'll need to create a bot user in your Slack team. See Slack's documentation on this [here](https://api.slack.com/bot-users)

Don't forget to invite the bot user to the channel you want the integration in!

## Integration with Intercom ##

You'll need to get an *extended access* token to use this bot effectively. 

While listing a single user requires only a standard scope, listing leads requires extended. 

I also have plans to implement Intercom's scroll api into the bot which would require an extended access token. 

More on this [here](https://developers.intercom.com/v2.0/docs/personal-access-tokens)

## Starting the bot locally ##

```
    INTERCOM_PAT=intercom_access_token token=SLACK_API_TOKEN app_id=your_intercom_app_id node intersearch_bot.js
```

I would suggest deploying the bot to something like Heroku however.

## Using the bot on Slack ##

After being invited into a slack channel, the bot can be interacted with the following commands:

1. '@botname help' results in the bot responding with instructions on how to use it.
2. '@botname uptime' results in the bot responding with how long it has been online.
3. '@botname user [email_address]' results in the bot responding with a link to the user in Intercom.
4. '@botname lead [email_address]' results in the bot responding with a link to the lead in Intercom.

## Notes ##
You can see all my todo stuff [here](https://github.com/DamonFstr/slack-intersearch/projects/1)
