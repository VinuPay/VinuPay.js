# VinuPay.js 🐶

VinuPay.js is a JavaScript library for VinuPay.

## Installation 💾

Use the package manager [npm](https://www.npmjs.com/) to install VinuPay.js.

```bash
npm install vinupay.js
```
## Usage 💻
### ES6 🐝
```javascript
import VinuPay from 'vinupay.js/offchain.js'
// Or the main version
// import VinuPay from 'vinupay.js'

// Create the instance
const Client = new VinuPay("https://node-vite.imal.dev");

// Check how many merchants were created.
Client.getRegisteredNamesCount().then((res) => {
    console.log(`A total of ${res} merchants were created.`);
});
```
### CommonJS 🐱
```javascript
const VinuPay = require("vinupay.js/offchain.js").default;
// Or the main version
// const VinuPay = require("vinupay.js").default;

// Create the instance
const Client = new VinuPay("https://node-vite.imal.dev");

// Check how many merchants were created.
Client.getRegisteredNamesCount().then((res) => {
    console.log(`A total of ${res} merchants were created.`);
});
```

## Updates 📡:
- [x] Soon
## Contributing 🎉
Pull requests are welcome on our [GitHub](https://github.com/VinuPay/VinuPay.js). For major changes, please open an issue first to discuss what you would like to change.

## Documentation 📚 (Work in Progress 🚧)
Documentation for both VinuPay and VinuPay.js can be found [here](https://docs.pay.vinu.org).
## Credits 🎩
VinuPay.js is created by [iMalFect](https://github.com/imalfect/)
## License 📜
VinuPay.js is licensed under [GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)