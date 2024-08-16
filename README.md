# BeatSaberAPI-Node
BeatSaberAPI-Node is an Open Source Library that allows for easy interaction with different BeatSaber API's through a well documented Node.JS library.

## Supported API's
- ScoreSaber
- BeatLeader

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
let res = BeatSaberNode.ScoreSaber.Ranking.Public.getRequestInfoByLeaderboardId('578412')

res.then(function resolved(data) {
    console.log(data)
})
```

# Documentation
You can build the documentation yourself by running the following command or visit the [docs](https://austin-wahl.github.io/BeatSaberAPI-Node/)
```bash
npm run docs
``` 
