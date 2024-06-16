import {Metadata} from './types.d.ts'
import {PlayerScore} from './leaderboard.d.ts'
interface Badge {
    description: string,
    image: string
}

interface ScoreStats {
    totalScore: number,
    totalRankedScore: number,
    averageRankedAccuracy: number,
    totalPlayCount: number,
    rankedPlayCount: number,
    replaysWatched: number
}

export interface Player {
    id: string,
    name: string,
    profilePicture: string,
    bio?: string,
    country: string,
    pp: number,
    rank: number,
    countryRank: number,
    role: string,
    badges?: Array<Badge>,
    histories: string,
    scoreStats?: ScoreStats,
    permissions: number,
    banned: boolean,
    inactive: boolean,
    firstSeen?: string
}

export interface PlayerCollection {
    players: Array<Player>,
    metadata: Metadata
}

export interface PlayerScoreCollection {
    playerScores: Array<PlayerScore>,
    metadata: Metadata
}