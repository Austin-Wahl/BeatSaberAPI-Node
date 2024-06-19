const {beatleader} = require('../api_urls.json').urls

/**
 * Interact with BeatLeader Modifiers API endpoints
 * @namespace BeatLeader.Modifiers
 * @memberof BeatLeader
 */

/**
 * Provides a list of Beat Saber modifiers and their associated score multiplier values. This is legacy support, for the recent values please use modifierValues and modifierRatings on leaderboards.
 * @function get
 * @memberof BeatLeader.Modifiers
 * @returns {Promise} Score multiplier values.
 */
async function get() {
    try {
        let route = new URL(beatleader + 'modifiers').href
        let res = await fetch(encodeURI(route))

        if(res.status != 200)
            return Promise.reject(new Error("Undocumented error: " + res.status))

        return res.json()
    } catch (error) {
        throw new Error(error)
    }
}

exports.BeatLeaderModifiers = {
  get: get  
}