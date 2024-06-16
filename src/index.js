const {ScoreSaberLeaderboard} = require('./Scoresaber/leaderboard')
const {ScoreSaberPlayers} = require('./Scoresaber/player')
const {ScoreSaberRankingPublic} = require('./Scoresaber/ranking')

/**
 * Interact with the ScoreSaber API using this NPM wrapper library. Currently supports all ScoreSaber endpoints except for authenticated
 * routes to include: Website User, Website Auth, and Ranking Team, QAT, and NAT routes.
 * @namespace ScoreSaber
 */
exports.ScoreSaber = {
    Leaderboard: ScoreSaberLeaderboard,
    Players: ScoreSaberPlayers,
    /**
     * Allows interaction with the ScoreSaber Ranking API endpoints
     * @namespace ScoreSaber.Ranking
     * @memberof ScoreSaber
     */
    Ranking: {
        Public: ScoreSaberRankingPublic
    }
}