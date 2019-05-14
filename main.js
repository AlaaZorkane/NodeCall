const configs = [
    { 
        accountSid: 'ACc3e2743a33aa4e5bcbd3d4f5085d4466', 
        authToken: 'a7aa86b7001bc2661df52ad56534ae2f', 
        twilio: '+12564641933', 
        numbers: ["+212777108051", "+212661480810"] 
    },
    { 
        accountSid: 'AC96953ea10af1ff6a3c3481b5f6c20c43', 
        authToken: '22318db6aa7807afadb8ecd348ca4e80', 
        twilio: '+12053410672', 
        numbers: ["+212694106628"] 
    },
    { 
        accountSid: 'ACc3e2743a33aa4e5bcbd3d4f5085d4466', 
        authToken: 'a7aa86b7001bc2661df52ad56534ae2f', 
        twilio: '+12564641933', 
        numbers: [" ", ] 
    },
    { 
        accountSid: 'ACc3e2743a33aa4e5bcbd3d4f5085d4466', 
        authToken: 'a7aa86b7001bc2661df52ad56534ae2f', 
        twilio: '+12564641933', 
        numbers: [" ", ] 
    },
    { 
        accountSid: 'ACc3e2743a33aa4e5bcbd3d4f5085d4466', 
        authToken: 'a7aa86b7001bc2661df52ad56534ae2f', 
        twilio: '+12564641933', 
        numbers: [" ", ] 
    },
]



configs.forEach(config => {
    
    var client = require('twilio')(config.accountSid, config.authToken);
    
    config.numbers.forEach(number => {
        console.log("to", number, "from", config.twilio);
        client.calls
            .create({
                url: 'http://demo.twilio.com/docs/voice.xml',
                to: number,
                from: config.twilio
            })
            .then(call => console.log("calling", number, "...", call.sid))
            .catch(err => console.log(err)) 
    });
});
