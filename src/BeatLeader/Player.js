const {beatleader} = require('../api_urls.json').urls

/**
 * Interact with the BeatLeader Player API endpoints
 * @namespace BeatLeader.Players.Player
 * @memberof BeatLeader.Players
 */

/**
 * Get profile data for a specific user based on their ID
 * @function get
 * @param {string} id ID of user to get data for
 * @param {boolean} stats Include stats in the response. Default is true
 * @param {boolean} keepOriginalId Whether to keep original ID (for migrated players). Default is false
 * @param {string} leaderboardContext. Leaderboard context, 'general' by default. Available values : `none`, `general`, `noMods`, `noPause`, `golf`, `sCPM`, `speedrun`, `speedrunBackup`
 * @returns {Promise} Returns a promise with profile data on a specific user
 */
async function get(id, stats = true, keepOriginalId = false, leaderboardContext = "general") {

}

/**
 * Get profile data for a specific user based on their Discord ID
 * @function getByDiscordId
 * @memberof BeatLeader.Players.Player
 * @param {string} discordId Discord ID of user to get data for
 * @returns {Promise} Returns a promise with profile data on a specific user
 */
async function getByDiscordId(discordId) {

}

/**
 * Get profile data for a specific user based on their BeatSaver ID
 * @function getByBeatSaverId
 * @memberof BeatLeader.Players.Player
 * @param {string} beatsaverId BeatSaver ID of user to get data for
 * @returns {Promise} Returns a promise with profile data on a specific user
 */
async function getByBeatSaverId(beatsaverId) {

}

/**
 * Get profile data for a specific user based on their Patreon ID
 * @function getByPatreonId
 * @memberof BeatLeader.Players.Player
 * @param {string} patreonId Patreon ID of user to get data for
 * @returns {Promise} Returns a promise with profile data on a specific user
 */
async function getByPatreonId(patreonId) {

}

/**
 * Get events a user has participated in based on their ID
 * @function getParticipatedEventsById
 * @memberof BeatLeader.Players.Player
 * @param {string} id ID of user to  get data for
 * @returns {Promise} Returns a promise with a list of events a user has participated in
 */
async function getParticipatedEventsById(id) {

}

/**
 * Retrieves an info about player' followers such as count and 3 closest followers. Also 3 most followed players this player follows
 * @function getFollowerInfoById
 * @memberof BeatLeader.Players.Player
 * @param {string} id ID of user to  get data for
 * @returns {Promise} Returns a promise with follower data
 */
async function getFollowerInfoById(id) {

}

/**
 * Retrieves a full list of player' followers and players this player follow.
 * @function getFollowersById
 * @memberof BeatLeader.Players.Player
 * @param {string} id ID of user to get data for
 * @param {number} page Page to get data from. Default is 1
 * @param {number} count Number of players to return. Default is 10
 * @param {string} relationship Relationship type: followers or following Available values : `followers`, `following`
 * @returns {Promise} Returns a promise with followers
 */
async function getFollowersById(id, page = 1, count = 10) {

}

/**
 * Retrieves an information about the clan this player created and manage.
 * @function getFoundedClanById
 * @memberof BeatLeader.Players.Player
 * @param {string} id ID of user to  get data for
 * @returns {Promise} Returns a promise with info on a specific clan
 */
async function getFoundedClanById(id) {

}

/**
 * Returns brief stats about maps this player ranked, like count, total PP gained, etc...
 * @function getRankedMapsById
 * @memberof BeatLeader.Players.Player
 * @param {string} id ID of user to  get data for
 * @returns {Promise} Returns a promise with ranked map data
 */
async function getRankedMapsById(id) {

}

exports.BeatleaderPlayer = {
    get: get,
    getByDiscordId: getByDiscordId,
    getByBeatSaverId: getByBeatSaverId,
    getByPatreonId: getByPatreonId,
    getParticipatedEventsById: getParticipatedEventsById,
    getFollowerInfoById: getFollowerInfoById,
    getFollowersById: getFollowersById,
    getFoundedClanById: getFoundedClanById,
    getRankedMapsById: getRankedMapsById
}