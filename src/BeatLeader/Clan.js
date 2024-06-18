const {beatleader} = require('../api_urls.json').urls
const {parseSearchOptions} = require('./utility/parseSearchOptions')

/**
 * Interact with the BeatLeader Clan API endpoints
 * @namespace BeatLeader.Clans
 * @memberof BeatLeader
 */

/**
 * Retrieves a list of clans based on filters
 * @function get
 * @memberof BeatLeader.Clans
 * @param {Object} searchOptions Filters to narrow search. See options in table below
 * | Parameter | Type        | Description                         | Valid Values  |
 * |-----------|-------------|-----------------------              |---------------|
 * | page      | number      | (Optional) Page number.             |        |
 * | count     | number      | (Optional) Number of items per page |        |
 * | sortBy    | ClanSortBy  | (Optional) Sorting criteria         | name, pp, acc, rank, count, captures |
 * | order     | Order       | (Optional) Sorting order            | desc, asc     |
 * | search    | string      | (Optional) Search query             |        |
 * @returns {Promise} A promise with a list of clans
 */
async function get(searchOptions = {}) {
    try {
        let route = new URL(beatleader + 'clans').href
        let parsedSearchOptions = parseSearchOptions(searchOptions)
        route += parsedSearchOptions

        let res = await fetch(encodeURI(route))
        if(res.status == 400)
            return Promise.reject(new Error("Invalid request parameters"))
        if(res.status == 404)
            return Promise.reject(new Error("Clans not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves details of a specific clan by tag
 * @function getByTag
 * @memberof BeatLeader.Clans
 * @param {string} tag Tag of the clans to retrieve details for
 * @param {Object} searchOptions Filters to narrow search. See options in table below
 * | Parameter | Type        | Description                         | Valid Values  | 
 * |-----------|-------------|-------------------------------------|---------------|
 * | page      | number      | (Optional) Page number              |        |
 * | count     | number      | (Optional) Number of items per page |        |
 * | sortBy    | ClanSortBy  | (Optional) Sorting criteria         | pp, topPp, name, rank, acc, weightedAcc, top1Count, top1Score, weightedRank, topAcc, hmd, playCount, score, lastplay, maxStreak, replaysWatched, dailyImprovements, timing |
 * | order     | Order       | (Optional) Sorting order            | desc, asc     |
 * | search    | string      | (Optional) Search query             |        |
 * @param {boolean} primary Whether to include only players for whom this clan is primary, default is false
 * @returns {Promise} A promise with a clan
 */
async function getByTag(tag, searchOptions = {}, primary = false) {
    try {
        let route = new URL(beatleader + 'clan').href
        route += `/${tag}`
        let parsedSearchOptions = parseSearchOptions(searchOptions)
        route += parsedSearchOptions
        route += `&primary=${primary}`
        
        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Clan not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Fetches details of a specific clan identified by its ID.
 * @function getById
 * @memberof BeatLeader.Clans
 * @param {number} id ID of the clan to retrieve details for
 * @param {Object} searchOptions Filters to narrow search. See options in table below
 * | Parameter | Type        | Description                         | Valid Values  | 
 * |-----------|-------------|-------------------------------------|---------------|
 * | page      | number      | (Optional) Page number              |        |
 * | count     | number      | (Optional) Number of items per page |        |
 * | sortBy    | ClanSortBy  | (Optional) Sorting criteria         | pp, topPp, name, rank, acc, weightedAcc, top1Count, top1Score, weightedRank, topAcc, hmd, playCount, score, lastplay, maxStreak, replaysWatched, dailyImprovements, timing |
 * | order     | Order       | (Optional) Sorting order            | desc, asc     |
 * @param {boolean} primary Whether to include only players for whom this clan is primary, default is false
 * @returns {Promise} A promise with a clan
 */
async function getById(id, searchOptions = {}, primary = false) {
    try {
        let route = new URL(beatleader + 'clan/id').href
        route += `/${id}`
        let parsedSearchOptions = parseSearchOptions(searchOptions)
        route += parsedSearchOptions
        route += `&primary=${primary}`

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Clan not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves a list of clans based on filters
 * @function getMapsByTag
 * @memberof BeatLeader.Clans
 * @param {string} tag Tag of the clans to retrieve details for
 * @param {Object} searchOptions Filters to narrow search. See options in table below
 * | Parameter          | Type               | Description                                          | Valid Values  | 
 * |--------------------|--------------------|-------------------------------------                 |---------------|
 * | page               | number             | (Optional) Page number                               |        |
 * | count              | number             | (Optional) Number of items per page                  |        |
 * | sortBy             | ClanSortBy         | (Optional) Sorting criteria                          | pp, acc, rank, date, tohold, toconquer |
 * | leaderboardContext | LeaderboardContext | (Optional) Context of leaderboard. Default is General| none, general, noMods, noPause, golf, sCPM, speedrun, speedrunBackup |
 * | order              | Order              | (Optional) Sorting order                             | desc, asc     |
 * @returns {Promise} A promise with a list of ranked maps 
 */
async function getMapsByTag(tag, searchOptions = {}) {
    try {
        let route = new URL(beatleader + 'clan').href
        route += `/${tag}/maps`
        let parsedSearchOptions = parseSearchOptions(searchOptions)
        route += parsedSearchOptions

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Clan not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Fetches ranked maps(maps that can be captured on the global map) for where players of clan made scores identified by its ID, with optional sorting and filtering.
 * @function getMapsById
 * @memberof BeatLeader.Clans
 * @param {string} id ID of the clans to retrieve details for
 * @param {Object} searchOptions Filters to narrow search. See options in table below
 * | Parameter          | Type               | Description                                          | Valid Values  | 
 * |--------------------|--------------------|-------------------------------------                 |---------------|
 * | page               | number             | (Optional) Page number                               |        |
 * | count              | number             | (Optional) Number of items per page                  |        |
 * | sortBy             | ClanSortBy         | (Optional) Sorting criteria                          | pp, acc, rank, date, tohold, toconquer |
 * | leaderboardContext | LeaderboardContext | (Optional) Context of leaderboard. Default is General| none, general, noMods, noPause, golf, sCPM, speedrun, speedrunBackup |
 * | order              | Order              | (Optional) Sorting order                             | desc, asc     |
 * @returns {Promise} A promise with a list of ranked maps
 */
async function getMapsById(id, searchOptions = {}) {
    try {
        let route = new URL(beatleader + 'clan/id').href
        route += `/${id}/maps`
        let parsedSearchOptions = parseSearchOptions(searchOptions)
        route += parsedSearchOptions

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Clan not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Fetches a global map showing clan captured maps and rankings.
 * @function getGlobalMap
 * @memberof BeatLeader.Clans
 * @returns {Promise} A promise with the Global Map
 */
async function getGlobalMap() {
    try {
        let route = new URL(beatleader + 'clans/globalmap').href

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Global map not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.BeatLeaderClans = {
    get: get,
    getByTag: getByTag,
    getById: getById,
    getMapsByTag: getMapsByTag,
    getMapsById: getMapsById,
    getGlobalMap: getGlobalMap
}