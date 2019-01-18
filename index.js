const bluetooth = require('node-bluetooth');

const device = new bluetooth.DeviceINQ();

const name = 'T6'; // Your earphones name 
const address = '18:07:31:32:10:70';
let channel = 1;

device.listPairedDevices(list => {
    const item = list.find(val => val.name === name);

    if (item) {
        channel = item.services[0].channel;
    }
});

channel && bluetooth.connect(address, channel, function (err) {
    if (err) return console.error(err);

        console.log('Yahoo! Connected!');
        setTimeout(() => process.exit(0), 15000);
});
