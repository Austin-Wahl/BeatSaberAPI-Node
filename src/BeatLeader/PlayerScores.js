const {beatleader} = require('../api_urls.json').urls
const {parseSearchOptions} = require('./utility/parseSearchOptions')

/**
 * Interact with the BeatLeader Player Scores API endpoints. Get player score related info.
 * @namespace Scores
 * @memberof BeatLeader.Players 
 */

/**
 * Fetches a list of scores for a specific user based on filters
 * @function getById
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {Object} scoresSearchOptions Filters to narrow search results. See table below.
 * | Parameter           | Type                 | Description                           | Valid Values                                                                                       |
 * |---------------------|----------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------|
 * | sortBy              | ScoresSortBy         | (Optional) Sorting criteria           | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `"date"`, `"pp"`, `"acc"`, `"pauses"`, `"rank"`, `"maxStreak"`, `"mistakes"`, `"weight"`, `"weightedPp"` |
 * | order               | Order                | (Optional) Sorting order              | `"asc"`, `"desc"`                                                                                       |
 * | page                | number               | (Optional) Page number                | N/A                                                                                                 |
 * | count               | number               | (Optional) Number of items per page   | N/A                                                                                                 |
 * | search              | string               | (Optional) Search query               | N/A                                                                                                 |
 * | diff                | string               | (Optional) Difficulty level           | `"Easy"`, `"Normal"`, `"Hard"`, `"Expert"`, `"ExpertPlus"`                                                     |
 * | mode                | string               | (Optional) Mode of item               | `"Standard"`, `"OneSaber"`, `"90Degree"`, `"360Degree"`                                                                                                |
 * | requirements        | Requirements         | (Optional) Requirements               | N/A                                                                                                 |
 * | scoreStatus         | ScoreFilterStatus    | (Optional) Score status               | N/A                                                                                                 |
 * | leaderboardContext  | LeaderboardContests  | (Optional) Context of the leaderboard | N/A                                                                                               |
 * | type                | DifficultyStatus     | (Optional) Type of difficulty         | N/A                                                                                                 |
 * | modifiers           | string               | (Optional) Modifiers                  | N/A                                                                                                 |
 * | stars_from          | number               | (Optional) Minimum stars              | N/A                                                                                                 |
 * | stars_to            | number               | (Optional) Maximum stars              | N/A                                                                                                 |
 * | time_from           | number               | (Optional) Start time                 | N/A                                                                                                 |
 * | time_to             | number               | (Optional) End time                   | N/A                                                                                                 |
 * | eventId             | number               | (Optional) Event ID                   | N/A                                                                                                 |                                                                                               |
 * @returns {Promise} Returns a promise with scores
 */
async function getById(id, scoresSearchOptions = {}) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/scores').href
        route += parseSearchOptions(scoresSearchOptions)

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("Scores not found for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves a paginated list of scores for a specific user
 * @function getCompactById
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {Object} scoresSearchOptions Filters to narrow search results
 * | Parameter           | Type                 | Description                           | Valid Values                                                                                       |
 * |---------------------|----------------------|---------------------------------------|-----------------------------------------------------------------------------------------------------|
 * | sortBy              | ScoresSortBy         | (Optional) Sorting criteria           | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `"date"`, `"pp"`, `"acc"`, `"pauses"`, `"rank"`, `"maxStreak"`, `"mistakes"`, `"weight"`, `"weightedPp"` |
 * | order               | Order                | (Optional) Sorting order              | `"asc"`, `"desc"`                                                                                       |
 * | page                | number               | (Optional) Page number                | N/A                                                                                                 |
 * | count               | number               | (Optional) Number of items per page   | N/A                                                                                                 |
 * | search              | string               | (Optional) Search query               | N/A                                                                                                 |
 * | diff                | string               | (Optional) Difficulty level           | `"Easy"`, `"Normal"`, `"Hard"`, `"Expert"`, `"ExpertPlus"`                                                     |
 * | mode                | string               | (Optional) Mode of item               | `"Standard"`, `"OneSaber"`, `"90Degree"`, `"360Degree"`                                                                                                |
 * | requirements        | Requirements         | (Optional) Requirements               | N/A                                                                                                 |
 * | scoreStatus         | ScoreFilterStatus    | (Optional) Score status               | N/A                                                                                                 |
 * | leaderboardContext  | LeaderboardContests  | (Optional) Context of the leaderboard | N/A                                                                                               |
 * | type                | DifficultyStatus     | (Optional) Type of difficulty         | N/A                                                                                                 |
 * | modifiers           | string               | (Optional) Modifiers                  | N/A                                                                                                 |
 * | stars_from          | number               | (Optional) Minimum stars              | N/A                                                                                                 |
 * | stars_to            | number               | (Optional) Maximum stars              | N/A                                                                                                 |
 * | time_from           | number               | (Optional) Start time                 | N/A                                                                                                 |
 * | time_to             | number               | (Optional) End time                   | N/A                                                                                                 |
 * | eventId             | number               | (Optional) Event ID                   | N/A                                                                                                 |                                                                                               |
 * @returns Returns a promise with compacted score data
 */
async function getCompactById(id, scoresSearchOptions = {}) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/scores/compact').href
        route += parseSearchOptions(scoresSearchOptions)

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("Scores not found for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets a score made my a player on a specific map of a specific difficulty
 * @function getScore
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {string} hash Map hash
 * @param {string} difficulty Difficuly to get score from
 * @param {string} mode Maps characterists. `"Standard"`, `"OneSaber"`, `"90Degree"`, `"360Degree"`
 * @returns {Promise<number>} Returns a promise with the score
 */
async function getScore(id, hash, difficulty, mode) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/scorevalue/' + hash + '/' + difficulty + '/' + mode).href

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("Score not found for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves accuracy graph data
 * @function getAccGraph
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {Object} accGraphOptions Filters to narrow search
 * Certainly! Here's the table:

| Parameter           | Type                  | Description                                  | Valid Values                                                      |
|---------------------|-----------------------|----------------------------------------------|-------------------------------------------------------------------|
| type                | string                | (Optional) Type of sorting                   | `"acc"`, `"rank"`, `"weight"`, `"pp"`                             |
| leaderboardContext  | LeaderboardContexts   | (Optional) Context of the leaderboard        | As defined in the LeaderboardContexts type                        |
| no_unranked_stars   | boolean               | (Optional) Whether to include unranked stars | `true` (include unranked stars), `false` (exclude unranked stars) |
 * @returns {Promise} Returns a promise with acc graph data
 */
async function getAccGraph(id, accGraphOptions = {}) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/accgraph').href
        route += parseSearchOptions(accGraphOptions)

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("No accuracy graph available for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves a lkist of players performance metrics and statistics 
 * @function getHistory
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {string} leaderboardContext Filter scores by leaderboard context, default is 'General'. Available values : `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"`
 * @param {number} count Amount of days to include. Default is 50
 * @returns {Promise} Returns a promise with metrics and statistics
 */
async function getHistory(id, leaderboardContext = "general", count = 50) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/history').href
        route += `?leaderboardContext=${leaderboardContext}&count=${count}`

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("No history saved for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * 
 * @function getCompactHistory
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {string} leaderboardContext Filter scores by leaderboard context, default is 'General'. Available values : `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"`
 * @param {number} count Amount of days to include. Default is 50
 * @returns {Promise} Returns a promise with compacted history
 */
async function getCompactHistory(id, leaderboardContext = "general", count = 50) {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/history/compact').href
        route += `?leaderboardContext=${leaderboardContext}&count=${count}`

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("No history saved for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves a paginated list of pinned scores for a specific user
 * @function getPinnedScores
 * @memberof BeatLeader.Players.Scores
 * @param {string} id ID of user to get data for
 * @param {string} leaderboardContext Filter scores by leaderboard context, default is 'General'. Available values : `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"`
 * @returns {Promise} Returns a promise with a list of pinned score data
 */
async function getPinnedScores(id, leaderboardContext = "general") {
    try {
        let route = new URL(beatleader + 'player/' + id  + '/pinnedScores').href
        route += `?leaderboardContext=${leaderboardContext}`

        let res = await fetch(encodeURI(route))
        if(res.status == 400) 
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("Scores not found for the given player ID"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}


exports.BeatLeaderPlayerScores = {
    getById: getById,
    getCompactById: getCompactById,
    getScore: getScore,
    getAccGraph: getAccGraph,
    getHistory: getHistory,
    getCompactHistory: getCompactHistory,
    getPinnedScores: getPinnedScores
}