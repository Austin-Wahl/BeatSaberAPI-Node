// scoresaber types
import { Difficulty, LeaderboardInfo, LeaderboardInfoCollection, ScoreCollection, ScoreSaberLeaderboardSearchOptions } from './Scoresaber/types/leaderboard';
import { RankRequestInformation } from './Scoresaber/types/ranking';

// beatleader types
import { ClanTagSearchOptions, ClanGlobalMap, ClanRankingResponseClanResponseFullResponseWithMetadataAndContainer, ClanResponseFullResponseWithMetadata, ClanSearchOptions, PlayerResponseClanResponseFullResponseWithMetadataAndContainer } from './BeatLeader/types/';
import { LeaderboardByIdSearchOption, LeaderboardClanRankingResponse, LeaderboardContexts, LeaderboardInfoResponseResponseWithMetadata, LeaderboardResponse, LeaderboardSearchOptions, ScoreResponseWithMyScoreResponseWithMetadata } from './BeatLeader/types/BeatLeader';
import { LegacyModifiers } from './BeatLeader/types/BeatLeader';
import { ParticipatingEventResponse, PlayerFollowersInfoResponse, PlayerResponseWithStatsResponseWithMetadata, RankedMapperResponse, ScoreGraphEntry, PlayerResponseFull, ClanBiggerResponse } from './BeatLeader/types/BeatLeader'
import { ScoresSearchOptions, CompactScoreResponseResponseWithMetadata, Difficulties, AccGraphOptions, HistoryCompactResponse, ScoreResponseWithMyScore } from './BeatLeader/types/BeatLeader'

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

export namespace BeatLeader {
    export namespace Clans {
        function get(searchOptions?: ClanSearchOptions): Promise<ClanResponseFullResponseWithMetadata>
        function getByTag(tag: string, searchOptions?: ClanTagSearchOptions, primary?: boolean): Promise<PlayerResponseClanResponseFullResponseWithMetadataAndContainer>
        function getById(id: number, searchOptions?: ClanTagSearchOptions, primary?: boolean): Promise<PlayerResponseClanResponseFullResponseWithMetadataAndContainer>
        function getMapsByTag(tag: string, searchOptions?: ClanSearchOptions): Promise<ClanRankingResponseClanResponseFullResponseWithMetadataAndContainer>
        function getMapsById(id: number, searchOptions?: ClanSearchOptions): Promise<ClanRankingResponseClanResponseFullResponseWithMetadataAndContainer>
        function getGlobalMap(): Promise<ClanGlobalMap>
    }

    export namespace Leaderboards {
        function getById(id: string, leaderboardByIdSearchOptions: LeaderboardByIdSearchOption): Promise<LeaderboardResponse>
        function getClanRankingsById(id: string, page?: number, count?: number): Promise<LeaderboardClanRankingResponse>
        function get(leaderboardSearchOptions?: LeaderboardSearchOptions): Promise<LeaderboardInfoResponseResponseWithMetadata>
        function getScoregraphById(id: string): Promise<ScoreGraphEntry>
    }

    export namespace Modifiers {
        function get(): Promise<LegacyModifiers>
    }

    export namespace Players {
        function get(playerSearchOptions?: PlayerSearchOptions): Promise<PlayerResponseWithStatsResponseWithMetadata>

        export namespace Player {
            function get(id: string, stats?: boolean, keepOriginalId?: boolean, leaderboardContext?: LeaderboardContexts): Promise<PlayerResponseFull>
            function getByDiscordId(discordId: string): Promise<PlayerResponseFull>
            function getByBeatSaverId(beatsaverId: string): Promise<PlayerResponseFull>
            function getByPatreonId(patreonId: string): Promise<PlayerResponseFull>
            function getParticipatedEventsById(id: string): Promise<ParticipatingEventResponse>
            function getFollowerInfoById(id: string): Promise<PlayerFollowersInfoResponse>
            function getFoundedClanById(id: string): Promise<ClanBiggerResponse>
            function getRankedMapsById(id: string): Promise<RankedMapperResponse>
        }
        export namespace Scores {
            function getById(id: string, scoresSearchOptions?: ScoresSearchOptions): Promise<ScoreResponseWithMyScoreResponseWithMetadata>
            function getCompactById(id: string, scoresSearchOptions?: ScoresSearchOptions): Promise<CompactScoreResponseResponseWithMetadata>
            function getScore(id: string, hash: string, difficulty: "Easy" | "Normal" | "Hard" | "Expert" | "ExpertPlus", mode: Difficulties): Promise<number>
            function getAccGraph(id: string, accGraphOptions?: AccGraphOptions): Promise<Object>
            function getHistory(id: string, leaderboardContext?: LeaderboardContexts, count?: number): Promise<Array<PlayerScoreStatsHistory>>
            function getCompactHistory(id: string, leaderboardContext?: LeaderboardContexts, count?: number): Promise<Array<HistoryCompactResponse>>
            function getPinnedScores(id: string, leaderboardContext?: LeaderboardContexts): Promise<Array<ScoreResponseWithMyScore>>
        }
    }
}