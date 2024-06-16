# BeatSaberAPI-Node
Currently in development. BeatSaberAPI-Node is a Open Source Library that allows for easy interaction with different BeatSaber API's through a well documented Node.JS library.

## Supported API's
- ScoreSaber

## Planned Support 
- BeatLeader
- AccSaber
- Challenge Saber

# Installing
Run the following command
```bash
npm install beatsaberapi-node
```
After installing, besure to install dependencies
```bash
npm install
```

# Implementing in your code
```js
const BeatSaberNode = require('beatsaberapi-node');

// example function call
let res = BeatSaberWebWrapper.ScoreSaber.Ranking.Public.getRequestInfoByLeaderboardId('578412')

res.then(function resolved(data) {
    console.log(data)
})
```

# Documentation
You can build the documentation yourself by running the following command or visit [https://](https://austin-wahl.github.io/)
```bash
npm run docs
``` 