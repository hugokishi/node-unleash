Package node-unleash implements the possibility to connect your app to unleash in a fastest way.

## Installation

Use npm install.

```
npm install git+ssh://git@github.com:hugokishi/node-unleash
```

Or yarn add

```
yarn add git+ssh://git@github.com:hugokishi/node-unleash
```

Then import the unleash package into your own code.

```js
const { InitUnleashClient } = require("node-unleash");
```

If you use ES6

```js
import { InitUnleashClient } from "node-unleash";
```

## Usage
Sample code:

```js
require("dotenv").config();

const { InitUnleashClient, isEnabled } = require("node_unleash");

InitUnleashClient({
  appName: "YOUR_APP_NAME",
  authorizationToken: "YOUR_AUTHORIZATION_TOKEN",
  url: "YOUR_UNLEASH_URL",
  environment: "YOUR_UNLEASH_ENVIRONMENT",
});

setTimeout(() => {
  console.log(isEnabled("YOUR_FLAG"););
}, 1000);
```
