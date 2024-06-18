// scoresaber
const {ScoreSaberLeaderboard} = require('./Scoresaber/leaderboard')
const {ScoreSaberPlayers} = require('./Scoresaber/player')
const {ScoreSaberRankingPublic} = require('./Scoresaber/ranking')

// beatleader
const {BeatLeaderClans} = require('./BeatLeader/Clan')
const {BeatLeaderLeaderboards} = require('./BeatLeader/Leaderboard')
const {BeatLeaderModifiers} = require('./BeatLeader/Modifiers')
const {BeatLeaderGetAllPlayers} = require('./BeatLeader/Players')
const {BeatLeaderPlayer} = require('./BeatLeader/Player')
const {BeatLeaderPlayerScores} = require('./BeatLeader/PlayerScores')
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

/**
 * Interact with the BeatLeader API using this NPM wrapper library. Currently supports all BeatLeader endpoints found under BeatLeaderAPI v1.
 * @namespace BeatLeader
 */
exports.BeatLeader = {
    Clans: BeatLeaderClans,
    Leaderboards: BeatLeaderLeaderboards,
    Modifiers: BeatLeaderModifiers,
    Players: {
        get: BeatLeaderGetAllPlayers,
        Player: BeatLeaderPlayer,
        Scores: BeatLeaderPlayerScores,
    },
}