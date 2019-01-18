# earphones-bluetooth-connect
Bluetooth connector for headphones (only windows)

# Setup
1. Requires [nodeJS](https://nodejs.org/en/)
2. Requires [node-gyp](https://github.com/nodejs/node-gyp#on-windows)
3. Run `npm i`

index.js file contains "name" and "address" variables that should have name and MAC address of your earphones.

For getting the name and the address you need to run in cmd "npm run start" that show you list of previously connected devices. For Example:

[ 
  { name: 'Mi Bluetooth Speaker',
    address: 'E9:07:BF:33:32:RB',
    services: [] },
  { name: 'T energy', address: '18:17:23:33:13:BD', services: [] },
  { name: 'T6',
    address: '18:17:31:32:00:71',
    services: []}
]

When you added all settings you should run "main.exe" or "START.lnk" and add it to the taskbar in your windows.
Also, you can change an icon for "START.lnk"
