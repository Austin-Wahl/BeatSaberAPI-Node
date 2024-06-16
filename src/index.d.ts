import {Difficulty, LeaderboardInfoCollection, ScoreSaberLeaderboardSearchOptions, LeaderboardInfo, ScoreCollection} from './Scoresaber/types/leaderboard'
import { RankRequestInformation } from './Scoresaber/types/ranking';

/**
 * 
 */
export namespace ScoreSaber {
    export namespace Leaderboard {
        function get(query?: string, page?: number, options?: ScoreSaberLeaderboardSearchOptions): Promise<LeaderboardInfoCollection>
        function infoById(leaderboardId: number): Promise<LeaderboardInfo>
        function infoByHash(mapHash: string, difficulty: 1 | 3 | 5 | 7 | 9, gameMode: string): Promise<LeaderboardInfo>
        function scoresById(leaderboardId: number, countries?: Array<string>, search?: string, page?: number, withMetadata?: boolean): Promise<ScoreCollection>
        function scoresByHash(mapHash: string, difficulty: 1 | 3 | 5 | 7 | 9, countries?: Array<string>, search?: string, page?: number, gameMode?: string, withMetadata?: boolean): Promise<ScoreCollection>
        function difficultiesByHash(mapHash: string): Array<Difficulty>
    }

    export namespace Players {
        function get(search?: string, page?: number, countries?: Array<string>, withMetadata?: boolean): Promise<PlayerCollection>
        function count(search?: string, countries?: Array<string>): Promise<number>
        function basicInfoById(playerId: string): Promise<Player>
        function fullInfoById(playerId: string): Promise<Player>
        function scoresById(playerId: string, limit?: number, sort?: "top" | "recent", page?: number, withMetadata?: boolean): Promise<PlayerCollection>
    }

    export namespace Ranking {
        export namespace Public {
            function top(): Promise<Array<RankRequestListing>>
            function belowTop(): Promise<Array<RankRequestListing>>
            function getRequestInfoByRequestId(requestId: string): Promise<RankRequestInformation>
            function getRequestInfoByLeaderboardId(leaderboardId: number): Promise<RankRequestInformation>
        }
    }
}