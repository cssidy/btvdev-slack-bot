

module.exports = function(controller) {


    /* Collect some very simple runtime stats for use in the uptime/debug command */
    var stats = {
        triggers: 0,
        convos: 0,
    }

    controller.on('heard_trigger', function() {
        stats.triggers++;
    });

    controller.on('conversationStarted', function() {
        stats.convos++;
    });


    // reply to a direct mention - @bot hello
    controller.on('direct_mention', function (bot, message) {
        bot.createConversation(message, function(err, convo) {
            convo.say('Did someone say my name?');
            convo.activate();
        });
    });

    controller.hears(['whale','whales', 'baleen'], [ 'ambient' ], function(bot, message) {
        bot.createConversation(message, function(err, convo) {
            convo.say('I\'m a whale!');
            convo.activate();
        });
    });

    controller.hears(['beluga', 'belugas'], [ 'ambient' ], function(bot, message) {
        bot.createConversation(message, function(err, convo) {
            convo.say('My uncle was a beluga.');
            convo.activate();
        });
    });


    controller.hears(['hello', 'hi', 'howdy', 'hey'], 'direct_message,direct_mention,mention', function(bot, message) {

        bot.api.reactions.add({
            timestamp: message.ts,
            channel: message.channel,
            name: 'robot_face',
        }, function(err, res) {
            if (err) {
                bot.botkit.log('Failed to add emoji reaction :(', err);
            }
        });


        bot.createConversation(message, function(err, convo) {
            convo.say('Hello!');
            convo.activate();
        });
    });


    controller.hears(['uptime', 'identify yourself', 'who are you', 'what is your name'], 'direct_message,direct_mention,mention', function(bot, message) {

        bot.createConversation(message, function(err, convo) {
            if (!err) {
                convo.setVar('uptime', formatUptime(process.uptime()));
                convo.setVar('convos', stats.convos);
                convo.setVar('triggers', stats.triggers);

                convo.say('I am a bot named <@' + bot.identity.name + '>. My main process has been online for {{vars.uptime}}. Since booting, I have heard {{vars.triggers}} triggers, and conducted {{vars.convos}} conversations.');
                convo.activate();
            }
        });

    });

    // GUYS

    controller.hears(['guys', 'dudes', 'dude', 'bro', 'bros'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". We are not all guys, dudes and bros. Perhaps you meant one of these gender-neutral ways of addressing this group: ' +
                'team, squad, gang, pals, y\' all, crew, nerds, friends, or comrades. Please consider editing your post to be professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". We are not all guys, dudes and bros. ' +
                'Perhaps you meant one of these gender-neutral ways of addressing this group: team, squad, gang, pals, y\' all, crew, nerds, friends, or comrades. Please consider editing your post to be professional and inclusive. Thank you.')
        })
    });

    // TARD

    controller.hears(['retarded', 'retard', 'tard', 'herp', 'derp'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". Please be kind when referring to people with disabilities. ' +
                'I think you meant bad, uninteresting, boring, nonsensical, awful, silly, ridiculous, or illogical. Please consider editing your post to be professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". Please be kind when referring to people with disabilities. I think ' +
                'you meant bad, uninteresting, boring, nonsensical, awful, silly, ridiculous, or illogical. Please consider editing your post to be professional inclusive. Thank you.');
        })
    });

    // CRAZY

    controller.hears(['crazy', 'insane'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". Crazy and insane aren\'t very nice terms. Maybe you meant bad, illogical, erratic, nonsensical, ' +
                'ridiculous, uncontrolled, unpredictable, too much, strange, or unusual? Please consider editing your post to be professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". Crazy and insane aren\'t very nice terms. Maybe you meant ' +
                'bad, illogical, erratic, nonsensical, ridiculous, uncontrolled, unpredictable, too much, strange, or unusual? Please consider editing your post to be professional and inclusive. Thank you.');
        })
    });

    // LAME

    controller.hears(['lame'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". Lame? Don\'t you think bad, boring, frustrating, a waste of time, tiresome, unoriginal, uncreative, disappointing, embarrassing, or tedious sound better? ' +
                'Please consider editing your post to be professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". Lame? Don\'t you think bad, boring, frustrating, a ' +
                'waste of time, tiresome, unoriginal, uncreative, disappointing, embarrassing, or tedious sound better? Please consider editing your post to be professional and inclusive. Thank you.');
        })
    });

    // DUMB

    controller.hears(['dumb', 'stupid', 'idiot'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". Saying something or someone is dumb/stupid/an idiot isn\'t very nice. Doesn\'t poorly thought-out, incorrect, ridiculous, unthinkable, silly, or illogical sound a lot better? Please consider editing your post to be professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". Saying something or someone is dumb/stupid/an idiot isn\'t very nice. Doesn\'t poorly thought-out, incorrect, ridiculous, unthinkable, silly, or illogical sound a lot better? Please consider editing your post to be professional and inclusive. Thank you.');
        })
    });

    // SUCKS

    controller.hears(['sucks'], ['ambient'], function(bot, message) {
        bot.startPrivateConversation(message, function(err, dm) {
            dm.say('Hi there. I noticed your recent post, where you said: \"' + message.text + '\". The word sucks isn\'t very polite. Maybe we can come up with a better description than that. Please consider editing your post to be more professional and inclusive. Thank you.');

        });
        bot.createConversation(message, function() {
            bot.whisper(message, 'Hello. This message is ephemeral and private between just you and me. I noticed your recent post, where you said: \"' + message.text + '\". The word sucks isn\'t very polite. Maybe we can come up with a better description than that. Please consider editing your post to be more professional and inclusive. Thank you.');
        })
    });


    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ */
    /* Utility function to format uptime */
    function formatUptime(uptime) {
        var unit = 'second';
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'minute';
        }
        if (uptime > 60) {
            uptime = uptime / 60;
            unit = 'hour';
        }
        if (uptime != 1) {
            unit = unit + 's';
        }

        uptime = parseInt(uptime) + ' ' + unit;
        return uptime;
    }

};
