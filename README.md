# Friendly Reminder
A chat bot named Friendly Reminder: Encouraging inclusive, professional language in Slack environments.

## Built With

* Node.js - Runtime environment
* [BotKit](https://github.com/howdyai/botkit-starter-slack) - JavaScript framework that interfaces with Slack API 
* Express.js - Node.js web application framework
* [Heroku](https://heroku.com) - Web hosting platform
* mLab MongoDB - Storage

## Installation

Create a free developer account with Slack API.

Create a new app:

![Screenshot of Slack step 1](https://github.com/cssidy/btvdev-slack-bot/blob/master/slack-1.png) 

Choose the features and functionality of the app. You will need to select Incoming Webhooks, Bots, Event Subscriptions, and Permissions at the minimum. 

![Screenshot of Slack step 1](https://github.com/cssidy/btvdev-slack-bot/blob/master/slack-2.png) 

Add Friendly Reminder to a Slack group so you can test it:

![Screenshot of Slack step 1](https://github.com/cssidy/btvdev-slack-bot/blob/master/slack-4.png) 

Set up App Credentials. You will need the App ID, Client ID, Client Secret, Signing Secret, and Verification Token. Keep this information private.

Update the display information. Load your bot's avatar and bio here:

![Screenshot of Slack step 1](https://github.com/cssidy/btvdev-slack-bot/blob/master/slack-3.png) 

Create a Heroku account and create a new app with the Free or Hobby (24/7 uptime) plan.

Clone this repository using Git:

`git clone https://github.com/cssidy/friendly-reminder.git`

Install Node and NPM on your system, then install dependencies.

`npm install`

Update the `.env` file with your tokens. You will need your Slack token from your Slack workspace.



