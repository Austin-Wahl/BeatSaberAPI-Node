const {beatleader} = require('../api_urls.json').urls
const {parseSearchOptions} = require('./utility/parseSearchOptions')

/**
 * Interact with the BeatLeader Leaderboard API endpoints
 * @namespace BeatLeader.Leaderboards
 * @memberof BeatLeader
 */

/**
 * Retrieves a list of leaderboards
 * @function get
 * @memberof BeatLeader.Leaderboards
 * @param {Object} leaderboardSearchOptions Filters to narrow search. See options in table below
 * | Parameter           | Type                    | Description                          | Valid Values                                                                                       |
 * |---------------------|-------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------|
 * | page                | number                  | (Optional) Page number               | N/A                                                                                                 |
 * | count               | number                  | (Optional) Number of items per page  | N/A                                                                                                 |
 * | sortBy              | LeaderboardSortBy       | (Optional) Sorting criteria          | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `"date"`, `"pp"`, `"acc"`, `"pauses"`, `"rank"`, `"maxStreak"`, `"mistakes"`, `"weight"`, `"weightedPp"` |
 * | order               | Order                   | (Optional)Sorting order                        | `"asc"`, `"desc"`                                                                                       |
 * | search              | string                  | (Optional) Search query              | N/A                                                                                                 |
 * | type                | Type                    | (Optional) Type of item              | N/A                                                                                                 |
 * | mode                | string                  | (Optional) Mode of item              | N/A                                                                                                 |
 * | difficulty          | Difficulties            | (Optional) Difficulty level          |`"Standard"`, `"OneSaber"`, `"90Degree"`, `"360Degree"`                                              |
 * | mapType             | MapsType                | (Optional) Map type                  | `0`, `1`, `2`, `"ranked"`, `"unranked"`, `"all"`                                                                |
 * | allTypes            | Operation               | (Optional) Operation for all types   | `0`, `1`, `2`, `"any"`, `"all"`, `"not"`                                                                        |
 * | mapRequirements     | RequirementsString      | (Optional) Map requirements          | `"none"`, `"chroma"`, `"noodles"`, `"mappingExtensions"`, `"cinema"`, `"v3"`, `"optionalProperties"`, `"ignore"`    |
 * | allRequirements     | Operation               | (Optional) Operation for all requirements | `0`, `1`, `2`, `"any"`, `"all"`, `"not"`                                                                    |
 * | songStatus          | SongStatus              | (Optional) Status of the song        | `0`, `2`, `4`, `8`, `16`, `32`, `"none"`, `"curated"`, `"mapOfTheWeek"`, `"noodleMonday"`, `"featuredOnCC"`, `"beastSaberAwarded"` |
 * | leaderboardContext  | LeaderboardContexts     | (Optional) Context of the leaderboard | `0`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"` |
 * | mytype              | MyType                  | (Optional) Custom type               | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `"none"`, `"played"`, `"unplayed"`, `"myNominated"`, `"othersNominated"`, `"myMaps"`      |
 * | stars_from          | number                  | (Optional) Minimum stars             | N/A                                                                                                 |
 * | stars_to            | number                  | (Optional) Maximum stars             | N/A                                                                                                 |
 * | accrating_from      | number                  | (Optional) Minimum accuracy rating   | N/A                                                                                                 |
 * | accrating_to        | number                  | (Optional) Maximum accuracy rating   | N/A                                                                                                 |
 * | passrating_from     | number                  | (Optional) Minimum pass rating       | N/A                                                                                                 |
 * | passrating_to       | number                  | (Optional) Maximum pass rating       | N/A                                                                                                 |
 * | techrating_from     | number                  | (Optional) Minimum tech rating       | N/A                                                                                                 |
 * | techrating_to       | number                  | (Optional) Maximum tech rating       | N/A                                                                                                 |
 * | date_from           | number                  | (Optional) Start date                | N/A                                                                                                 |
 * | mapper              | number                  | (Optional) Mapper ID                 | N/A                                                                                                 |
 * | overrideCurrentId   | string                  | (Optional) Override current ID       | N/A                                                                                                 |
 * @returns {Promise} A promise with a list of leaderboards
 */
async function get(leaderboardSearchOptions = {}) {
    try {
        let route = new URL(beatleader + 'leaderboards').href
        let parsedSearchOptions = parseSearchOptions(leaderboardSearchOptions)
        route += parsedSearchOptions

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Leaderboards not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves a list of leaderboards
 * @function getById
 * @memberof BeatLeader.Leaderboards
 * @param {string} id ID of the leaderboard to retrieve details for
 * @param {Object} leaderboardSearchOptions Filters to narrow search. See options in table below
 * | Parameter           | Type                    | Description                          | Valid Values                                                                                       |
 * |---------------------|-------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------|
 * | page                | number                  | (Optional) Page number               | N/A                                                                                                 |
 * | count               | number                  | (Optional) Number of items per page  | N/A                                                                                                 |
 * | sortBy              | LeaderboardSortBy       | (Optional) Sorting criteria          | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `"date"`, `"pp"`, `"acc"`, `"pauses"`, `"rank"`, `"maxStreak"`, `"mistakes"`, `"weight"`, `"weightedPp"` |
 * | order               | Order                   | (Optional) Sorting order                        | `"asc"`, `"desc"`                                                                                       |
 * | scoreStatus         | ScoreFilterStatus       | (Optional) Score status filter       | `0`, `1`, `"none"`, `"suspicious"`                                                                                                 |
 * | leaderboardContext  | LeaderboardContexts     | (Optional) Context of the leaderboard | `0`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"` |
 * | countries           | Array<string>           | (Optional) List of country codes     | N/A                                                                                                 |
 * | search              | string                  | (Optional) Search query              | N/A                                                                                                 |
 * | modifiers           | string                  | (Optional) Modifiers                 | N/A                                                                                                 |
 * | friends             | boolean                 | (Optional) Filter by friends         | N/A                                                                                                 |
 * | voters              | boolean                 | (Optional) Filter by voters          | N/A                                                                                                 |
 * | prediction          | boolean                 | (Optional) Prediction filter         | N/A                                                                                                 |
 * @returns {Promise} A promise with leaderboard details
 */
async function getById(id, leaderboardSearchOptions = {}) {
    try {
        let route = new URL(beatleader + 'leaderboard').href
        route += `/${id}`
        let parsedSearchOptions = parseSearchOptions(leaderboardSearchOptions)
        route += parsedSearchOptions

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Leaderboard not found"))
        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))
        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves clan rankings for a leaderboard
 * @function getClanRankingsById
 * @memberof BeatLeader.Leaderboards
 * @param {string} id ID of the leaderboard to retrieve clan rankings for
 * @param {number} page Page number for pagination, default is 1
 * @param {number} count Number of rankings per page, default is 10
 * @returns {Promise} A promise with clan rankings
 */
async function getClanRankingsById(id, page = 1, count = 10) {
    try {
        let route = new URL(beatleader + 'leaderboard/clanRankings').href
        route += `/${id}?page=${page}&count=${count}`

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Clan rankings not found"))

        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Retrieves the score graph for a leaderboard
 * @function getScoregraphById
 * @memberof BeatLeader.Leaderboards
 * @param {string} id ID of the leaderboard to retrieve the score graph for
 * @returns {Promise} A promise with score graph data
 */
async function getScoregraphById(id) {
    try {
        let route = new URL(beatleader + 'leaderboard').href
        route += `/${id}/scoregraph`

        let res = await fetch(encodeURI(route))
        if(res.status == 404)
            return Promise.reject(new Error("Score graph not found"))

        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.BeatLeaderLeaderboards = {
    get: get,
    getById: getById,
    getClanRankingsById: getClanRankingsById,
    getScoregraphById: getScoregraphById
}