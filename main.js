const configs = [
    { accountSid: ' ', authToken: ' ', twilio: ' ', numbers: [" ", ] },
    { accountSid: ' ', authToken: ' ', twilio: ' ', numbers: [" ", ] },
    { accountSid: ' ', authToken: ' ', twilio: ' ', numbers: [" ", ] },
    { accountSid: ' ', authToken: ' ', twilio: ' ', numbers: [" ", ] },
    { accountSid: ' ', authToken: ' ', twilio: ' ', numbers: [" ", ] },
]


for( config in configs ) {
    var client = require('twilio')(config.accountSid, config.authToken);

    config.numbers.forEach(number => {
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                to: number,
                from: config.twilio
            })
            .then(call => console.log("calling", number, "..."));
    });
}
