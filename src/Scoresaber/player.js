let {scoresaber} = require('../api_urls.json').urls

/**
 * Allows interaction with the ScoreSaber Player API endpoints
 * @namespace ScoreSaber.Players
 * @memberof ScoreSaber
 */

/**
 * Gets a list of players based on filters
 * @function get 
 * @memberof ScoreSaber.Players
 * @param {string} search Query for specific terms
 * @param {number} page Page of result
 * @param {Array} countries Filter by ISO 3166-1 alpha-2 code
 * @param {boolean} withMetadata True by default. Returns total number of results, page number, and items per page 
 * @returns {Promise<Array>} Returns a Promise with a list of players based on filters
 */
async function get(search = '', page = 1, countries = [], withMetadata = true) {
    try {
        let route = new URL(scoresaber + 'players').href
        route += `?search=${encodeURI(search)}&page=${page}`
        
        let encodedCountries = (countries.length > 0) ? '&' + encodeURIComponent(countries.toString()) : ''
        route += `${encodedCountries}&withMetadata=${withMetadata}`
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Returns an integer value of the number of players based on filters
 * @function count 
 * @memberof ScoreSaber.Players
 * @param {string} search Query for specific terms
 * @param {Array} countries Filter by ISO 3166-1 alpha-2 code
 * @returns {Promise<Array>} Returns a Promise with a integer of the number of players found matching filtered results
 */
async function count(search = '', countries = []) {
    try {
        let route = new URL(scoresaber + 'players/count').href
        route += `?search=${encodeURI(search)}`
        
        let encodedCountries = (countries.length > 0) ? '&' + encodeURIComponent(countries.toString()) : ''
        route += encodedCountries
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Returns basic player info 
 * @function basicInfoById 
 * @memberof ScoreSaber.Players
 * @param {string} playerId Player ID
 * @returns {Promise<Array>} Returns a Promise with basic info on a player
 */
async function basicInfoById(playerId) {
    try {
        let route = new URL(scoresaber + `player/${playerId}/basic`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Returns full player info
 * @function fullInfoById 
 * @memberof ScoreSaber.Players
 * @param {string} playerId Player ID
 * @returns {Promise<Array>} Returns a Promise with full info on a player
 */
async function fullInfoById(playerId) {
    try {
        let route = new URL(scoresaber + `player/${playerId}/full`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

/**
 * Returns a list of a players scores
 * @function scoresById 
 * @memberof ScoreSaber.Players
 * @param {string} playerId Player ID
 * @param {number} limit Maximum number of results to be returned
 * @param {string} sort The sort order. Valid values are `"top"` and `"recent"`.
 * @returns {Promise<Array>} Returns a Promise with full info on a player
 */
async function scoresById(playerId, limit = 1, sort = 'top', page = 1, withMetadata = true) {
    try {
        let route = new URL(scoresaber + `player/${playerId}/scores?limit=${limit}&sort=${sort}&page=${page}&withMetadata=${withMetadata}}`).href
        return (await fetch(route)).json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.ScoreSaberPlayers = {
    get: get,
    count: count,
    basicInfoById: basicInfoById,
    fullInfoById: fullInfoById,
    scoresById: scoresById
}