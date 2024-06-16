import {Metadata} from './types.d.ts'

interface Score {
    id: number,
    leaderboardPlayerInfo: LeaderboardPlayer,
    rank: number,
    baseScore: number,
    modifiedScore: number,
    pp: number,
    weight:	number,
    modifiers: string,
    multiplier: number,
    badCuts: number,
    missedNotes: number,
    maxCombo: number,
    fullCombo: boolean,
    hmd: number,
    hasReplay: boolean,
    timeSet: string,
    deviceHmd?: string,
    deviceControllerLeft?: string,
    deviceControllerRight?: string
}

interface Difficulty {
    leaderboardId: number,
    difficulty: number,
    gameMode: string,
    difficultyRaw: string
}

interface LeaderboardPlayer {
    id: string,
    name: string,
    profilePicture: string,
    country: string,
    permissions: number,
    role: string
}

interface PlayerScore {
    score: Score,
    leaderboard: LeaderboardInfo
}

export interface ScoreSaberLeaderboardSearchOptions {
    verified?: boolean,
    ranked?: boolean,
    qualified?: boolean,
    loved?: boolean,
    minStar?: number,
    maxStar?: number,
    category?: 0 | 1 | 2 | 3 | 4,
    sort?: 0 | 1,
    unique?: boolean
}

export interface LeaderboardInfoCollection {
    leaderboards: Array<LeaderboardInfo>,
    metadata?: Metadata
}

export interface LeaderboardInfo {
    id:	number,
    songHash: string,
    songName: string,
    songSubName: string,
    songAuthorName: string,
    levelAuthorName: string,
    difficulty: Difficulty,
    maxScore: number,
    createdDate: string,
    rankedDate?: string,
    qualifiedDate?: string,
    lovedDate?: string,
    ranked: boolean,
    qualified: boolean,
    loved: boolean,
    maxPP: number,
    stars: number,
    positiveModifiers: boolean,
    plays: number,
    dailyPlaysL: number,
    coverImage: string,
    playerScore?: any,
    difficulties: Array<Difficulty>
}

export interface ScoreCollection {
    scores: Array<Score>,
    metadata: Metadata
}