# Friendly Reminder
A chat bot named Friendly Reminder: Encouraging inclusive, professional language in Slack environments.

Friendly Reminder **sends private, instant messages to Slack members when they type inappropriate language in public channels**. This is a proven method to encourage members to edit their language to be more welcoming to diverse groups.

## Built With

* Node.js - Runtime environment
* [BotKit](https://github.com/howdyai/botkit-starter-slack) - JavaScript framework that interfaces with Slack API 
* Express.js - Node.js web application framework
* [Heroku](https://heroku.com) - Web hosting platform
* mLab MongoDB - Storage

## Installation

Clone this repository using Git:

`git clone https://github.com/seabirdcassidy/friendly-reminder.git`

Install Node and NPM on your system, then install dependencies.

`npm install`

Now create a free developer account with Slack API.

Create a new app:

![Screenshot of Slack step 1](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-1.png) 

Choose the features and functionality of the app. You will need to select Incoming Webhooks, Bots, Event Subscriptions, and Permissions at the minimum. 

![Screenshot of Slack step 2](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-2.png) 

Set up App Credentials. You will need the App ID, Client ID, Client Secret, Signing Secret, and Verification Token. Keep this information private.

Update the display information. Load your bot's avatar and bio here:

![Screenshot of Slack step 4](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-3.png) 

Now return to your code project and update the `.env` file with your tokens. You will need your Slack token from your Slack workspace.

Create a Heroku account and create a new app with the Free or Hobby (24/7 uptime) plan. Name your app. In my case I named it "benice". On the app's settings page you can see that the public address for the app is `https://benice.herokuapp.com/` and the Git repo is `https://git.heroku.com/benice.git`.

![Screenshot of Heroku step 1](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/heroku-2.png) 

Download and install the Heroku CLI utility so that you can push your code to the server, this is what that looks like on Mac:

`brew tap heroku/brew && brew install heroku`

Now login to authenticate yourself:

`heroku login`

Add the remote repo to Git:

`heroku git:remote -a <your app name>`

You should see that now as a push option if you check `git remote -v`:

`heroku  https://git.heroku.com/<your app name>.git (fetch)`

`heroku  https://git.heroku.com/<your app name>.git (push)`

Next you will need to set up a couple resources in Heroku. You will need to create two dynos, a web and a worker. The web dyno must be `npm start` and the worker dyno must be `node bot.js`. This will start up your bot on the server and keep it going. This is very important, especially if you are using the Heroku free plan where dynos turn off after 30 minutes of activity. 

Also install the mLab MongoDB plugin. You only need the free sandbox plan.

![Screenshot of Heroku step 2](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/heroku-1.png)

Now you can push your code project to the Heroku server:

`git push heroku master`

If you navigate to your bot's address, `https://<your app name>.herokuapp.com/` you should see a page that says "I am a bot" and an "add to Slack" button. This means it's working properly.

![Screenshot of Heroku step 3](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/heroku-3.png)

Now we need to go back to the Slack API site and update the redirect URL. Under OAuth & Permissions you should see a section to add the redirect URL. This is your Heroku address. Make sure it is entered as `http://<your app name>.herokuapp.com/oauth` with `/oath` appended to the end.

![Screenshot of Slack step 5](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-5.png)

Also while on this page make sure that you have these scopes selected:

* bot (may be deprecated)
* channels:history
* channels:read
* chat:write:bot
* groups:history
* im:read
* incoming-webhook

Go to Event Subscriptions and make sure that the Request URL is also entered properly and verified. It should be `https://<your app name>.herokuapp.com/slack/receive` with `/receive` appended on the end.

Additionally, you will need to subscribe to these bot events:

* app_mention
* im_close
* im_open
* message.channels
* message.groups
* message.im
* message.mpim

Any channel that Friendly Reminder is added to will be able to see this stuff. So be careful with people's privacy and do not over-subscribe to things you don't need.

![Screenshot of Slack step 6](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-6.png)

And finally....! Add Friendly Reminder to a Slack workspace so you can test it out. Head on over to Install App and click the button. You can also click the button on your bot's Heroku page. If you are logged into your Slack workspace already it will choose that by default.

![Screenshot of Slack step 7](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-4.png) 

Inside your Slack workspace, you will need to go to a channel that you want Friendly Reminder in. Then, in the top right corner click on the gear icon. Select "add an app".

![Screenshot of Slack step 8](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-7.png) 

Choose Friendly Reminder from the drop down.

![Screenshot of Slack step 8](https://github.com/seabirdcassidy/btvdev-slack-bot/blob/master/slack-8.png) 
