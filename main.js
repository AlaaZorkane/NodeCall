const configs = [

    // refadu@clickmail.info
    { 
        accountSid: 'AC96953ea10af1ff6a3c3481b5f6c20c43', 
        authToken: '22318db6aa7807afadb8ecd348ca4e80', 
        twilio: '+12053410672', 
        numbers: ["+212694106628", "+212620152351", "+212602210372", "+212664061144", "+212636844058"] 
    },
    
    // zoyiloxi@quick-mail.club
    { 
        accountSid: 'ACc3e2743a33aa4e5bcbd3d4f5085d4466', 
        authToken: 'a7aa86b7001bc2661df52ad56534ae2f', 
        twilio: '+12564641933', 
        numbers: ["+212777108051", "+212661480810", "+212657096458", "+212707515915", "+212766197494"] 
    },

    // dutaxudoze@first-mail.info
    { 
        accountSid: 'AC60fb61e65fd3adad1fae355edf1b7123', 
        authToken: 'd94c265e3aae09129dfbdfd3fcaf944c', 
        twilio: '+16085306241', 
        numbers: ["+212675522097", "+212691525845", "+212672907061", "+212693431252", "+212673806279"] 
    },

    // tefolereh@mrmail.info
    { 
        accountSid: 'ACa7b69ce513c6907609b18be177b992d0', 
        authToken: 'f201b9f00117b9dd687ec6987a171f22', 
        twilio: '+19387770369', 
        numbers: ["+212639919871", "+212612474390", "+212679348382", "+212697626351", "+212605780518"] 
    },

    // rovefif@mail-finder.net
    { 
        accountSid: 'AC06128ef5d2a7d1c10ded88122018655b', 
        authToken: '55e6b8de55edaef47972af3cb1771f2a ', 
        twilio: '+15632395995', 
        numbers: ["+212697886879"] 
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
            .then(call => console.log("calling", number, "-", call.sid))
            .catch(err => console.log(err)) 
    });
});
