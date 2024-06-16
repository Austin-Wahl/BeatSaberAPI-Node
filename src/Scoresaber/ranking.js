const {scoresaber} = require('../api_urls.json').urls
/**
 * Allows interaction with the publically available ScoreSaber Ranking API endpoints (not ranking team related functions)
 * @namespace Ranking.Public
 * @memberof ScoreSaber
 */

/**
 * Gets the top 6 rank requests
 * @method top 
 * @memberof ScoreSaber.Ranking.Public
 * @returns {Promise<Array>} Returns a Promise with the top 6 rank requests
 */
async function top() {
    try {
        let route = new URL(scoresaber + 'ranking/requests/top').href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets the rest of the rank requests
 * @function belowTop 
 * @memberof ScoreSaber.Ranking.Public
 * @returns {Promise<Array>} Returns a Promise with the rest of the rank requests
 */
async function belowTop() {
    try {
        let route = new URL(scoresaber + 'ranking/requests/belowTop').href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets rank request info based on request ID
 * @function getRequestInfoByRequestId 
 * @memberof ScoreSaber.Ranking.Public
 * @param {number} requestId Rank request ID
 * @returns {Promise<Array>} Returns a Promise with the rank request information
 */
async function getRequestInfoByRequestId(requestId) {
    try {
        let route = new URL(scoresaber + `ranking/request/${requestId}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Gets rank request info based on a Leaderboard ID
 * @function getRequestInfoByLeaderboardId 
 * @memberof ScoreSaber.Ranking.Public
 * @param {number} leaderboardId Leaderboard ID of map
 * @returns {Promise<Array>} Returns a Promise with the rank request information
 */
async function getRequestInfoByLeaderboardId(leaderboardId) {
    try {
        let route = new URL(scoresaber + `ranking/request/by-id/${leaderboardId}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.ScoreSaberRankingPublic = {
    top: top,
    belowTop: belowTop,
    getRequestInfoByRequestId: getRequestInfoByRequestId,
    getRequestInfoByLeaderboardId: getRequestInfoByLeaderboardId
}