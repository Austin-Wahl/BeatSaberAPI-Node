import { LeaderboardInfo } from "./leaderboard"

interface VoteGroup {
    upvotes: number,
    downvotes: number,
    myVote: boolean,
    neutral: number
}

interface RankingDifficulty {
    requestId: number,
    difficulty: number
}

export interface RankRequestInformation {
    requestId: number,
    requestDescription: string,
    leaderboardInfo: LeaderboardInfo,
    created_at: string,
    rankVotes: VoteGroup,
    qatVotes: VoteGroup,
    rankComments: Array<Comment>,
    qatComments: Array<Comment>,
    requestType: number,
    approved: number,
    difficulties: Array<RankingDifficulty>
}