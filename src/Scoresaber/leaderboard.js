let {scoresaber} = require('../api_urls.json').urls

/**
 * Allows interaction with the ScoreSaber Leaderboard API endpoints
 * @namespace ScoreSaber.Leaderboard
 * @memberof ScoreSaber
 */

/**
 * Gets a list of leaderboards based on filters
 * @function get
 * @memberof ScoreSaber.Leaderboard
 * @param {string} query Query for specific terms
 * @param {number} page Page of result
 * @param {object} options More Filters
* | Property   | Type                  | Description                                                            | Valid Values   |
 * |------------|-----------------------|-----------------------------------------------------------------------|----------------|
 * | verified   | boolean               | Filter by verified (️deprecation notice)                               |                |
 * | ranked     | boolean               | Indicates if only ranked songs should be included.                    |                |
 * | qualified  | boolean               | Indicates if only qualified songs should be included.                 |                |
 * | loved      | boolean               | Indicates if only loved songs should be included.                     |                |
 * | minStar    | number                | The minimum star rating of songs to include.                          |                |
 * | maxStar    | number                | The maximum star rating of songs to include.                          |                |
 * | category   | number                | Which category to sort by (0 = trending, date ranked = 1,             | `0`, `1`, `2`, `3`, `4`| 
 * |            |                       | scores set = 2, star difficulty = 3, author = 4)                      |                |
 * | sort       | number                | The sorting order: 0 (Descending) or 1 (Ascending).                   | `0`, `1`       |
 * | unique     | boolean               | Only return one leaderboard of each id.                               |                |
 * @returns {Promise<Array>} 
 */
async function get(query = '', page = 1, options = {}) {
    try {
        let route = new URL(scoresaber + "leaderboards").href + '/?'
        let encodedQuery = encodeURI(query)
        let params = ''
        // loop through options and add or URI
        for(let key in options) {
            params += `${key}=${options[key]}&`
        }
        route += params + encodedQuery

        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets leaderboard information based on leaderboard id
 * @function infoById
 * @memberof ScoreSaber.Leaderboard
 * @param {number} leaderboardId Leaderboard ID
 * @returns {Promise} Information on queried leaderboard
 */
async function infoById(leaderboardId) {
     try {
        let route = new URL(scoresaber + `leaderboard/by-id/${leaderboardId}/info`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets leaderboard info based on map hash
 * @function infoByHash
 * @memberof ScoreSaber.Leaderboard
 * @param {string} mapHash Map hash
 * @param {number} difficulty (`1` = Easy, `3` = Normal, `5` = Hard, `7` = Expert, `9` = Expert+)
 * @param {number} gameMode `SoloStandard` by default
 * @returns {Promise} Information on queried leaderboard
 */
async function infoByHash(mapHash, difficulty, gameMode = "SoloStandard") {
    try {
        let route = new URL(scoresaber + `leaderboard/by-hash/${mapHash}/info?difficulty=${difficulty}&gameMode=${gameMode}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets a list of scores for a given map
 * @function scoresById
 * @memberof ScoreSaber.Leaderboard
 * @param {number} leaderboardId Leaderboard ID
 * @param {Array} countries Filter by ISO 3166-1 alpha-2 code
 * @param {string} search Query for specific terms
 * @param {number} page Page of result
 * @param {boolean} withMetadata True by default. Returns total number of results, page number, and items per page 
 * @returns {Promise<Array>} Scores on queried leaderboard
 */
async function scoresById(leaderboardId, countries = [], search = '', page = 1, withMetadata = true) {
    try {
        let encodedCountries = (countries.length > 0) ? 'countries=' + encodeURIComponent(countries.toString()) + '&' : ''
        let encodedSearch = (search.length > 0) ? 'search=' + encodeURI(search) + '&': ''
        let route = new URL(scoresaber + `leaderboard/by-id/${leaderboardId}/scores?${encodedCountries + encodedSearch}page=${page}&withMetadata=${withMetadata}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets a list of scores for a given hash
 * @function scoresByHash
 * @memberof ScoreSaber.Leaderboard
 * @param {string} mapHash Map hash
 * @param {number} difficulty (`1` = Easy, `3` = Normal, `5` = Hard, `7` = Expert, `9` = Expert+)
 * @param {Array} countries Filter by ISO 3166-1 alpha-2 code
 * @param {string} search Query for specific terms
 * @param {number} page Page of result
 * @param {number} gameMode SoloStandard by default.
 * @param {boolean} withMetadata True by default. Returns total number of results, page number, and items per page 
 * @returns {Promise<Array>} Scores on queried leaderboard
 */
async function scoresByHash(mapHash, difficulty, countries = [], search = '', page = 1, gameMode = "SoloStandard", withMetadata = true) {
    try {
        let encodedCountries = (countries.length > 0) ? 'countries=' + encodeURIComponent(countries.toString()) + '&' : ''
        let encodedSearch = (search.length > 0) ? 'search=' + encodeURI(search) + '&': ''
        let route = new URL(scoresaber + `leaderboard/by-hash/${mapHash}/scores?difficulty=${difficulty + '&' + encodedCountries + encodedSearch}page=${page}&gameMode=${gameMode}&withMetadata=${withMetadata}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets a maps difficulties based on hash
 * @function difficultiesByHash
 * @memberof ScoreSaber.Leaderboard
 * @param {string} mapHash Map hash
 * @returns {Promise<Array>} Difficulties offered on by a map
 */
async function difficultiesByHash(mapHash) {
    try {
        let route = new URL(scoresaber + `leaderboard/get-difficulties/${mapHash}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.ScoreSaberLeaderboard = {
    get: get,
    infoById: infoById,
    infoByHash: infoByHash,
    scoresById: scoresById,
    scoresByHash: scoresByHash,
    difficultiesByHash: difficultiesByHash
}