const { beatleader } = require('../api_urls.json').urls
const { parseSearchOptions } = require('./utility/parseSearchOptions')

/**
 * Interact with the BeatLeader Players API endpoints
 * @namespace BeatLeader.Players
 * @memberof BeatLeader
 */

/**
 * Retrieves a list of players based on filters
 * @function get 
 * @memberof BeatLeader.Players
 * @param {object} playerSearchOptions Optional filters to help narrow search. See table below for valid parameters.
 * | Parameter           | Type                    | Description                          | Valid Values                                                                                       |
 * |---------------------|-------------------------|--------------------------------------|-----------------------------------------------------------------------------------------------------|
 * | sortBy              | PlayerSortBy            | (Optional) Sorting criteria          | `0`, `1`, `2`, `3`, `4`, `5`, `6`, `7`, `8`, `9`, `10`, `11`, `12`, `13`, `14`, `15`, `16`, `17`, `"pp"`, `"topPp"`, `"name"`, `"rank"`, `"acc"`, `"weightedAcc"`, `"top1Count"`, `"top1Score"`, `"weightedRank"`, `"topAcc"`, `"hmd"`, `"playCount"`, `"score"`, `"lastplay"`, `"maxStreak"`, `"replaysWatched"`, `"dailyImprovements"`, `"timing"` |
 * | page                | number                  | (Optional) Page number               | N/A                                                                                                 |
 * | count               | number                  | (Optional) Number of items per page  | N/A                                                                                                 |
 * | search              | string                  | (Optional) Search query              | N/A                                                                                                 |
 * | order               | Order                   | (Optional) Sorting order             | `"asc"`, `"desc"`                                                                                       |
 * | countries           | Array<string>           | (Optional) List of country codes     | N/A                                                                                                 |
 * | mapsType            | MapsType                | (Optional) Map type                  | `0`, `1`, `2`, `"ranked"`, `"unranked"`, `"all"`                                                                |
 * | ppType              | PpType                  | PP type                              | N/A                                                                                                 |
 * | leaderboardContext  | LeaderboardContexts     | (Optional) Context of the leaderboard | `0`, `2`, `4`, `8`, `16`, `32`, `64`, `128`, `"none"`, `"general"`, `"noMods"`, `"noPause"`, `"golf"`, `"sCPM"`, `"speedrun"`, `"speedrunBackup"` |
 * | friends             | boolean                 | (Optional) Filter by friends         | N/A                                                                                                 |
 * | pp_range            | Array<string>           | (Optional) PP range                  | N/A                                                                                                 |
 * | score_range         | Array<string>           | (Optional) Score range               | N/A                                                                                                 |
 * | platform            | Array<string>           | (Optional) Platform filter           | N/A                                                                                                 |
 * | role                | Array<string>           | (Optional) Role filter               | N/A                                                                                                 |
 * | hmd                 | Array<string>           | (Optional) HMD filter                | `0`, `1`, `2`, `4`, `8`, `16`, `32`, `33`, `34`, `35`, `36`, `37`, `38`, `39`, `40`, `41`, `42`, `43`, `44`, `45`, `46`, `47`, `48`, `49`, `50`, `51`, `52`, `53`, `54`, `55`, `56`, `57`, `58`, `59`, `60`, `61`, `62`, `63`, `64`, `65`, `66`, `67`, `68`, `69`, `128`, `256`, `512`, `"unknown"`, `"rift"`, `"vive"`, `"vivePro"`, `"wmr"`, `"riftS"`, `"quest"`, `"picoNeo3"`, `"picoNeo2"`, `"vivePro2"`, `"viveElite"`, `"miramar"`, `"pimax8k"`, `"pimax5k"`, `"pimaxArtisan"`, `"hpReverb"`, `"samsungWmr"`, `"qiyuDream"`, `"disco"`, `"lenovoExplorer"`, `"acerWmr"`, `"viveFocus"`, `"arpara"`, `"dellVisor"`, `"e3"`, `"viveDvt"`, `"glasses20"`, `"hedy"`, `"vaporeon"`, `"huaweivr"`, `"asusWmr"`, `"cloudxr"`, `"vridge"`, `"medion"`, `"picoNeo4"`, `"questPro"`, `"pimaxCrystal"`, `"e4"`, `"index"`, `"controllable"`, `"bigscreenbeyond"`, `"nolosonic"`, `"hypereal"`, `"varjoaero"`, `"viveCosmos"`, `"quest2"`, `"quest3"` |
 * | clans               | Array<string>           | (Optional) Clan filter               | N/A                                                                                                 |
 * | activityPeriod      | number                  | (Optional) Activity period           | N/A                                                                                                 |
 * | banned              | boolean                 | (Optional) Ban filter                | N/A                                                                                                 |
 * @returns {Promise} Returns a promise with a list of players
 */
async function get(playerSearchOptions = {}) {
    try {
        let route = new URL(beatleader + 'players')
        let parsedSearchOptions = parseSearchOptions(playerSearchOptions)
        route += parsedSearchOptions
        let res = await fetch(encodeURI(route))

        if (res.status == 400)
            return Promise.reject(new Error("Invalid request parameters"))
        if (res.status == 404)
            return Promise.reject(new Error("Players not found"))
        if (res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.BeatLeaderGetAllPlayers = get