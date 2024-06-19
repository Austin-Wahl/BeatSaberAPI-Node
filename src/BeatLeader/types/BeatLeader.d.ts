interface Achievement {
    id: number,
    playerId?: string,
    achievementDescriptionId: number,
    achievementDescription: AchievementDescription,
    level: AchievementLevel,
    timeset: number,
    count: number
}

export interface AccGraphOptions {
    type?: "acc" | "rank" | "weight" | "pp",
    leaderboardContext?: LeaderboardContexts,
    no_unranked_stars?: boolean
}

interface AchievementDescription {
    id: number,
    name?: string,
    description?: string,
    link?: string,
    levels?: Array<AchievementLevel>
}

interface AchievementLevel {
    id: number,
    image?: string,
    smallImage?: string,
    name?: string,
    description?: string,
    detailedDescription?: string,
    color?: string,
    value?: number,
    level: number,
    achievementDescriptionId: number
}

interface Ban {
    id: number,
    playerId?: string,
    bannedBy?: string,
    banReason?: string,
    timeset: number,
    duration: number
}

interface Badge {
    id: number,
    description?: string,
    image?: string,
    link?: string,
    timeset: number,
    hidden: boolean
}

interface Clan {
    id: number,
    name?: string,
    color?: string,
    icon?: string,
    tag?: string,
    leaderID?: string,
    description?: string,
    bio?: string,
    richBioTimeset: number,
    playersCount: number,
    pp: number,
    rank: number,
    averageRank: number,
    averageAccuracy: number,
    featuredPlayLists?: Array<FeaturedPlaylist>,
    rankedPoolPercentCaptured: number,
    captureLeaderboardsCount: number,
    capturedLeaderboards?: Array<Leaderboard>,
    globalMapX: number,
    globalMapY: number
}

export interface ClanBiggerResponse {
    id: number,
    tag?: string,
    color?: string,
    name?: string,
    icon?: string,
    rankedPoolPercentCaptured: number,
    playersCount: number,
    joined: boolean
}

export interface ClanGlobalMap {
    points?: ClanGlobalMapPoint,
    clans?: ClanPoint
}

interface ClanGlobalMapPoint {
    leaderboardId?: string,
    coverImage?: string,
    start?: number,
    tie: boolean,
    clans?: Array<ClanMapConnection>
}

interface ClanMapConnection {
    id?: number,
    pp: number
}

type ClanMapsSortBy = 0 | 1 | 2 | 3 | 4 | 5 | "pp" | "acc" | "rank" | "date" | "tohold" | "toconquer"

interface ClanPoint {
    id: number,
    tag?: string,
    color?: string,
    x: string,
    y: string
}

export interface ClanResponseFullResponseWithMetadata {
    metadata: Metadata,
    data?: Array<ClanResponseFull>
}


export interface ClanRankingResponseClanResponseFullResponseWithMetadataAndContainer {
    metadata: Metadata,
    data?: Array<ClanRankingResponse>,
    container: ClanResponseFull
}

export interface ClanSearchOptions {
    page?: number,
    count?: number,
    sortBy?: ClanSortBy,
    order?: Order,
    search?: string
}

export interface ClanTagSearchOptions extends ClanSearchOptions {
    search?: "pp" | "topPp" | "name" | "rank" | "acc" | "weightedAcc" | "top1Count" | "top1Score" | "weightedRank" | "topAcc" | "hmd" | "playCount" | "score" | "lastplay" | "maxStreak" | "replaysWatched" | "dailyImprovements" | "timing"
}

interface ClanRankingResponse {
    id: number,
    clan: Clan,
    lastUpdateTime: number,
    averageRank: number,
    rank: number,
    pp: number,
    averageAccuracy: number,
    totalScore: number,
    leaderboardId?: string,
    leaderboard: Leaderboard,
    associatedScores?: Array<ScoreResponse>,
    aassociatedScoresCount: number,
    myScore: ScoreResponseWithAcc
}

interface ClanResponseFull {
    id: number,
    name?: string,
    color?: string,
    icon?: string,
    tag?: string,
    leaderId?: string,
    description?: string,
    bio?: string,
    richBioTimeset: number,
    discordInvite?: string,
    playersCount: number,
    pp: number,
    rank: number,
    averageRank: number,
    averageAccuracy: number,
    rankedPoolPercentCaptured: number,
    playerChangesCallback?: string,
    clanRankingDiscordHook?: string,
    featuredPlaylists?: Array<FeaturedPlaylistResponse>
}

interface ClanResponse {
    id: number,
    tag?: string,
    color?: string,
    name?: string
}

type ClanSortBy = 0 | 1 | 2 | 3 | 4 | 5 | "name" | "pp" | "acc" | "rank" | "count" | "captures"

interface CompactLeaderboard {
    id?: string,
    songHash?: string,
    modelName?: string,
    difficulty: number
}

interface CompactLeaderboardResponse {
    id?: string,
    song: CompactSongResponse,
    difficulty: DifficultyResponse 
}

interface CompactScore {
    id?: number,
    baseScore: number,
    modifiedScore: number,
    modifiers?: string,
    fullCombo: boolean, 
    maxCombo: number,
    missedNotes: number,
    badCusts: number,
    hmd: HMD,
    controller: ControllerEnum,
    accuracy: number,
    pp?: number,
    epochTime: number
}

interface CompactScoreResponse {
    score: CompactScore,
    leaderboard: CompactLeaderboard
}

export interface CompactScoreResponseResponseWithMetadata {
    metadata: Metadata,
    data?: Array<CompactScoreResponse>
}

interface CompactSongResponse {
    id?: string,
    hash?: string,
    name?: string,
    subName?: string,
    author?: string,
    mapper?: string,
    mapperId: number,
    collaboratorIds?: string,
    coverImage?: string,
    bpm: number,
    duration: number,
    fullCoverImage?: string
}

type ControllerEnum = | 0 | 1 | 2 | 4 | 8 | 9 | 10 | 16 | 33 | 34 | 35 | 37 | 44 | 61 | 62 | 63 | 64
| 65 | 66 | 67 | 68 | 69 | 70 | 71 | 72 | 73 | 74 | 75 | 76 | 77 | 78 | 79 | 80
| 128 | 256
    | "unknown"
    | "oculustouch"
    | "vive"
    | "vivePro"
    | "wmr"
    | "odyssey"
    | "hpMotion"
    | "oculustouch2"
    | "picoNeo3"
    | "picoNeo2"
    | "vivePro2"
    | "miramar"
    | "disco"
    | "questPro"
    | "viveTracker"
    | "viveTracker2"
    | "knuckles"
    | "nolo"
    | "picophoenix"
    | "hands"
    | "viveTracker3"
    | "pimax"
    | "huawei"
    | "polaris"
    | "tundra"
    | "cry"
    | "e4"
    | "gamepad"
    | "joycon"
    | "steamdeck"
    | "etee"
    | "quest3"
    | "contactglove"
    | "viveCosmos"
    | "quest2"

interface CriteriaCommentary {
    id: number,
    playerId?: string,
    timeset: number,
    value?: string,
    editTimeset?: number,
    edited: boolean,
    rankQualificationId?: number,
    discordMessageId?: string
}

type Difficulties = "Standard" | "OneSaber" | "90Degree" | "360Degree"

interface DifficultyDescription {
    id: number,
    value: number,ber,
    mode: null,mber,
    difficultyName?: string,
    modeName?: string,
    status: DifficultyStatus,
    modifierValues: ModifiersMap,
    modifiersRating: ModifiersRating,
    nominatedTime: number,
    qualifiedTime: number,
    rankedTime: number,
    speedTags: number,
    styleTags: number,
    featureTags: number,
    stars?: number,
    predictedAcc?: number,
    passRating?: number,
    accRating?: number,
    techRating?: nbumber,
    type: number,
    njs: number,
    nps: number,
    notes: number,
    bombs: number,
    walls: number,
    maxScore: number,
    duration: number,
    integer: number,
    requirements: Requirements
}

type DifficultyResponse = DifficultyDescription

type DifficultyStatus = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | "unranked" | "nominated" | "qualified" | "ranked" | "unrankable" | "outdated" | "inevent" | "oST"

interface EventPlayer {
    id: number,
    eventRankingId?: number,
    event: EventRanking,
    eventName?: string,
    playerName?: string,
    playerId?: string,
    country?: string,
    rank: number,
    countryRank: number,
    pp: number
}

interface EventRanking {
    id: number,
    name?: string,
    endDate: number,
    playlistId: number,
    image?: string
}

interface ExternalStauts { 
    id: number,
    status: SongStatus,
    timeset: number,
    link?: string,
    responsible?: string,
    details?: string,
    title?: string,
    titleColor?: string
}

interface FeaturedPlaylist {
    id: number,
    playlistLink?: string,
    cover?: string,
    title?: string,
    description?: string,
    owner?: string,
    ownerCover?: string,
    ownerLink?: string
}

interface FeaturedPlaylistResponse {
    id: number,
    playlistLink?: string,
    cover?: string,
    title?: string,
    description?: string,
    owner?: string,
    ownerCover?: string,
    ownerLink?: string
}

type FollowerType = 0 | 1 | "followers" | "following"

// Define the string enum
type HMD = | 0 | 1 | 2 | 4 | 8 | 16 | 32 | 33 | 34 | 35 | 36 | 37 | 38 | 39 | 40 | 41
| 42 | 43 | 44 | 45 | 46 | 47 | 48 | 49 | 50 | 51 | 52 | 53 | 54 | 55 | 56
| 57 | 58 | 59 | 60 | 61 | 62 | 63 | 64 | 65 | 66 | 67 | 68 | 69 | 128 | 256 | 512 
| "unknown" | "rift" | "vive" | "vivePro" | "wmr" | "riftS" | "quest" | "picoNeo3"
| "picoNeo2" | "vivePro2" | "viveElite" | "miramar" | "pimax8k" | "pimax5k"
| "pimaxArtisan" | "hpReverb" | "samsungWmr" | "qiyuDream" | "disco" | "lenovoExplorer"
| "acerWmr" | "viveFocus" | "arpara" | "dellVisor" | "e3" | "viveDvt" | "glasses20"
| "hedy" | "vaporeon" | "huaweivr" | "asusWmr" | "cloudxr" | "vridge" | "medion"
| "picoNeo4" | "questPro" | "pimaxCrystal" | "e4" | "index" | "controllable"
| "bigscreenbeyond" | "nolosonic" | "hypereal" | "varjoaero" | "viveCosmos" | "quest2"
| "quest3"

interface HistoryCompactResponse {
    timestamp: number,
    rank: number,
    countryRanbk: number,
    averageRankedAccuracy: number,
    averageUnrankedAccuracy: number,
    averageAccuracy: number,
    medianRankedAccuracy: number,
    mediaAccuracy: number,
    rankedPlayCount: number,
    unrankedPlayCount: number,
    totalPlayCount: number,
    rankedImprovementCount: number,
    totalImprovementCount: number
}

type InfoToHighlight = 0 | 2 | 4 | "none" | "watchCount" | "playCount"

interface Leaderboard {
    id?: string,
    songId?: string,
    song: CompactSongResponse,
    difficulty: DifficultyDescription,
    qualification: RankQualification,
    reweight: RankUpdate
    timestamp: number,
    changes?: LeaderboardChange,
    events?: EventRanking,
    plays: number,
    playCount: number,
    positiveVotes: number,
    negativeVotes: number,
    voteStars: number,
    clanId?: number,
    capturedTime?: number,
    clanRankingContested: boolean
}

interface LeaderboardChange {
    id: number,
    timeset: number,
    playerId?: string,
    oldRankability: number,
    oldStars: number,
    oldAccRating: number,
    oldPassRating: number,
    oldTechRating: number,
    oldType: number,
    oldCriteriaMet: numbver,
    oldModifiers: ModifiersMap,
    oldModifiersRating: ModifiersRating,
    newRankability: number,
    newStars: number,
    newAccRating: number,
    newPassRating: number,
    newTechRating: number,
    newType: number,
    newCriteriaMet: number,
    newModifiers: ModifiersMap,
    newModifiersRating: ModifiersRating
}

export interface LeaderboardClanRankingResponse {
    id?: string,
    song: Song,
    difficulty: DifficultyResponse,
    scores?: Array<ScoreResponse>,
    changes?: Array<LeaderboardChange>,
    featuredPlaylists?: Array<FeaturedPlaylist>,
    qualification: RankQualification,
    reweight: RankUpdate,
    leaderboardGroup?: LeaderboardGroupEntry,
    plays: number,
    clan: Clan,
    clanRankingContested: booleabn,
    clanRanking?: ClanRankingResponse
}

export type LeaderboardContexts = 0 | 2 | 4 | 8 | 16 | 32 | 64 | 128 
    | "none"
    | "general"
    | "noMods"
    | "noPause"
    | "golf"
    | "sCPM"
    | "speedrun"
    | "speedrunBackup"

interface LeaderboardGroupEntry {
    id?: string,
    status: DifficultyStatus,
    timestamp: number
}

interface LeaderboardInfoResponse {
    id?: string,
    song: CompactSongResponse,
    difficulty: DifficultyResponse,
    plays: number,
    positiveVotes: number,
    starVotes: number,
    negativeVotes: number,
    voteStars: number,
    clan: Clan,
    clanRankingContested: boolean,
    myScore: ScoreResponseWithAcc,
    qualification: RankQualification,
    reweight: RankUpdate
}

export interface LeaderboardInfoResponseResponseWithMetadata {
    metadata: Metadata,
    data?: Array<LeaderboardInfoResponse>
}

export interface LeaderboardResponse {
    id?: string,
    song: Song,
    difficulty: DifficultyResponse,
    scores?: ScoreResponse,
    changes?: Array<LeaderboardChange>,
    featuredPlaylists?: Array<FeaturedPlaylist>,
    qualification: RankQualification,
    reweight: ClanRankingResponseClanResponseFullResponseWithMetadataAndContainer,
    leaderboardGroup?: Array<LeaderboardGroupEntry>,
    plays: number,
    clan: Clan,
    clanRankingContested: boolean
}

export interface LeaderboardByIdSearchOption {
    page?: number,
    count?: number,
    sortBy?: LeaderboardSortBy,
    order?: Order,
    scoreStatus?: ScoreFilterStatus,
    leaderboardContext?: LeaderboardContexts,
    countries?: Array<string>,
    search?: string,
    modifiers?: string,
    friends?: boolean,
    voters?: boolean,
    prediction?: boolean
}

export interface LeaderboardSearchOptions {
    page?: number,
    count?: number,
    sortBy?: LeaderboardSortBy,
    order?: Order,
    search?: string,
    type?: Type,
    mode?: string,
    difficulty?: Difficulties,
    mapType?: MapsType,
    allTypes?: Operation,
    mapRequirements?: RequirementsString,
    allRequirements?: Operation,
    songStatus?: SongStatus,
    leaderboardContext?: LeaderboardContexts,
    mytype?: MyType,
    stars_from?: number,
    stars_to?: number,
    accrating_from?: number,
    accrating_to?: number,
    passrating_from?: number,
    passrating_to?: number,
    techrating_from?: number,
    techrating_to?: number,
    date_from?: number,
    mapper?: number,
    overrideCurrentId?: string
}

type LeaderboardSortBy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | "date" | "pp" | "acc" | "pauses" | "rank" | "maxStreak" | "mistakes" | "weight" | "weightedPp"

type RequirementsString = "none" | "chroma" | "noodles" | "mappingExtensions" | "cinema" | "v3" | "optionalProperties" | "ignore"

export interface LegacyModifiers {
    da: number,
    fs: number,
    ss: number,
    sf: number,
    gn: number,
    na: number,
    nb: number,
    nf: number,
    no: number,
    pm: number,
    sc: number
}

type MapQuality = 1 | 2 | 3 | "good" | "ok" | "bad"

type MapSortBy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 
    |"none"
    | "timestamp"
    | "name"
    | "stars"
    | "passRating"
    | "accRating"
    | "techRating"
    | "scoreTime"
    | "playCount"
    | "voting"
    | "voteCount"
    | "voteRatio"
    | "duration"

type MapsType = 0 | 1 | 2 | "ranked" | "unranked" | "all"

interface Metadata {
    itemsPerPage: number,
    page: number,
    total: number
}

interface ModifiersMap extends LegacyModifiers {
    modifierId: number;
}

interface ModifiersRating {
    id: number,
    fsPredictedAcc: number,
    fsPassRating: number,
    fsAccRating: number,
    fsTechRating: number,
    fsStars: number,
    ssPredictedAcc: number,
    ssPassRating: number,
    ssAccRating: number,
    ssTechRating: number,
    ssStars: number,
    sfPredictedAcc: number,
    sfPassRating: number,
    sfAccRating: number,
    sfTechRating: number,
    sfStars: number
}

type MyType = 0 | 1 | 2 | 3 | 4 | 5 | 6 | "none" | "played" | "unplayed" | "myNominated" | "othersNominated" | "myMaps"

type Operation = 0 | 1 | 2 | "any" | "all" | "not"

type Order = "desc" | "asc"

export interface ParticipatingEventResponse { 
    id?: number,
    name?: string
}

interface PatreonFeatures {
    id: number,
    bio?: string,
    message?: string,
    leftSaverColor?: string,
    rightSaberColor?: string
}

interface Player {
    id?: string,
    name?: string,
    platform?: string,
    avatar?: string,
    webAvatar?: string,
    country?: string,
    alias?: string,
    oldAlias?: string,
    role?: string,
    mapperId: number,
    pp: number,
    accPp: number,
    techPp: number,
    passPp: number,
    rank: number,
    countryRank: number,
    lastWeekPp: number,
    lastWeekRank: number,
    lastWeekCountryRank: number,
    banned: boolean,
    bot: boolean,
    inactive: boolean,
    externalProfileUrl?: string,
    richBioTimeset: number,
    createdAt: number,
    speedrunStart: number,
    scoreStatsId?: number,
    scoreStats: PlayerScoreStats,
    clanOrder?: string,
    badges?: Array<Badge>,
    patreonFeatures: PatreonFeatures,
    profileSettings: ProfileSettings,
    changes?: PlayerChange,
    history?: PlayerScoreStatsHistory,
    eventsParticipating?: Array<EventPlayer>,
    socials?: PlayerSocial,
    achievements?: Array<Achievement>
}

interface PlayerChange {
    id: number,
    timestamp: number,
    playerId?: string,
    oldName?: string,
    newName?: string,
    oldCountry?: string,
    newCountry?: string,
    changer?: string
}

interface PlayerContextExtension {
    id: number,
    context: LeaderboardContexts,
    pp: number,
    accPp: number,
    techPp: number,
    passPp,
    rank: number,
    country?: string,
    countryRank: number,
    lastWeekPp: number,
    lastWeekRank: number,
    lastWeekCountryRank: number,
    playerId?: string,
    player: Player,
    scoreStats: PlayerScoreStats,
    banned: boolean,
    name?: string
}

interface PlayerFollower {
    id?: string,
    name?: string,
    avatar?: string
}

export interface PlayerFollowersInfoResponse {
    followingCount?: number,
    meFollowing: boolean,
    following?: Array<PlayerFollower>,
    followersCount?: number,
    iFollow: boolean,
    followers?: Array<PlayerFollower>
}

interface PlayerResponse {
    id?: string,
    name?: string,
    platform?: string,
    avatar?: string,
    country?: string,
    alias?: string,
    bot: boolean,
    pp: number,
    countryRank: number,
    role?: string,
    socials?: Array<PlayerSocial>,
    contextExtensions?: Array<PlayerContextExtension>,
    patreonFeatures: PatreonFeatures,
    profileSettings: ProfileSettings,
    clanOrder?: string,
    clans?: Array<ClanResponse>
}

export interface PlayerResponseClanResponseFullResponseWithMetadataAndContainer {
    metadata: Metadata,
    data?: PlayerResponse,
    container: ClanResponseFull
}

export interface PlayerResponseFull {
    id?: string,
    name?: string,
    platform?: string,
    avatar?: string,
    country?: string,
    alias?: string,
    bot: boolean,
    pp: number,
    rank: number,
    countryRank: number,
    role?: string,
    socials?: Array<PlayerSocial>,
    contextExtensions?: Array<PlayerContextExtension>,
    patreonFeatures: PatreonFeatures,
    profileSettings: ProfileSettings,
    clanorder?: string,
    clans?: Array<ClanResponse>,
    accPp: number,
    passPp: number,
    techPp: number,
    scoreStats: PlayerScoreStats,
    lastWeekPp: number,
    lastWeekRank: number,
    lastWeekCountryRank: number,
    mapperId: number,
    banned: boolean,
    inactive: booleabn,
    banDescription: Ban,
    externalProfilePicture?: string,
    richBioTimeset: number,
    speedrunStart: number,
    history?: Array<PlayerScoreStatsHistory>
    badges?: Array<Badge>,
    pinnedScores?: Array<ScoreResponseWithMyScore>,
    changes?: Array<PlayerChange>
}

export interface PlayerSearchOptions {
    sortBy?: PlayerSortBy,
    page?: number,
    count?: number,
    search?: string
    order?: Order,
    countries?: Array<string>,
    mapsType?: MapsType,
    ppType?: PpType,
    leaderboardContext?: LeaderboardContexts,
    friends?: boolean,
    pp_range?: Array<string>,
    score_range?: Array<string>,
    platform?: Array<string>,
    role?: Array<string>
    hmd?: Array<string>,
    clans?: Array<string>,
    activityPeriod?: number,
    banned?: boolean
}

interface PlayerResponseWithStats extends PlayerResponse {
    rank: number,
    accPp: number,
    passPp: number,
    techPp: number,
    scoreStats: PlayerScoreStats,
    lastWeekPp: number,
    lastWeekRank: number,
    lastWeekCountryRank: number
}

export interface PlayerResponseWithStatsResponseWithMetadata {
    metadata: Metadata,
    data?: Array<PlayerResponseWithStats>
}

interface PlayerScoreStats {
    id: number,
    totalScore: number,
    totalUnrankedScored: number,
    totalRankedScore: number,
    lastScoreTime: number,
    lastUnrankedScoreTime: number,
    lastRankedScoreTime: number,
    averageRankedAccuracy: number,
    averageWeightedRankedAccuracy: number,
    averageUnrankedAccuracy: number,
    averageAccuracy: number,
    medianRankedAccuracy: number,
    medianAccuracy: number,
    topRankedAccuracy: number,
    topUnrankedAccuracy: number,
    topAccuracy: number,
    topPp: number,
    topBonusPP: number,
    topPassPP: number,
    topAccPP: number,
    topTechPP: number,
    peakRank: number,
    rankedMaxStreak: number,
    unrankeedMaxStreak: number,
    maxStreak: number,
    averageLeftTiming: number,
    averageRightTiming: number,
    rankedPlayCount: number,
    unrankedPlayCount: number,
    totalPlayCount: number,
    rankedImprovementsCount: number,
    unrankedImprovementsCount: number,
    totalImprovementsCount: number,
    rankedTop1Count: number,
    rankedTop1Score: number,
    unrankedTop1Score: number,
    top1Score: number,
    averageRankedRank: number,
    averageWeightedRankedRank: number,
    averageUnrankedRank: number,
    averageRank: number,
    sspPlays: number,
    ssPlays: number,
    spPlays: number,
    sPlays: number,
    aPlays: number,
    topPlatform?: string,
    topHMD: HMD,
    topPercentile: number,
    countryTopPercentile: number,
    dailyImprovements: number,
    authorizedReplayWatched: number,
    anonimusReplayWatched: number,
    watchedReplays: number
}

interface PlayerScoreStatsHistory {
    id: number,
    context: LeaderboardContexts,
    totalScore: number,
    totalUnrankedScored: number,
    totalRankedScore: number,
    lastScoreTime: number,
    lastUnrankedScoreTime: number,
    lastRankedScoreTime: number,
    averageRankedAccuracy: number,
    averageWeightedRankedAccuracy: number,
    averageUnrankedAccuracy: number,
    averageAccuracy: number,
    medianRankedAccuracy: number,
    medianAccuracy: number,
    topRankedAccuracy: number,
    topUnrankedAccuracy: number,
    topAccuracy: number,
    topPp: number,
    topBonusPP: number,
    topPassPP: number,
    topAccPP: number,
    topTechPP: number,
    peakRank: number,
    rankedMaxStreak: number,
    unrankeedMaxStreak: number,
    maxStreak: number,
    averageLeftTiming: number,
    averageRightTiming: number,
    rankedPlayCount: number,
    unrankedPlayCount: number,
    totalPlayCount: number,
    rankedImprovementsCount: number,
    unrankedImprovementsCount: number,
    totalImprovementsCount: number,
    rankedTop1Count: number,
    rankedTop1Score: number,
    unrankedTop1Score: number,
    top1Score: number,
    averageRankedRank: number,
    averageWeightedRankedRank: number,
    averageUnrankedRank: number,
    averageRank: number,
    sspPlays: number,
    ssPlays: number,
    spPlays: number,
    sPlays: number,
    aPlays: number,
    topPlatform?: string,
    topHMD: HMD,
    topPercentile: number,
    countryTopPercentile: number,
    dailyImprovements: number,
    authorizedReplayWatched: number,
    anonimusReplayWatched: number,
    watchedReplays: number
}

interface PlayerSocial {
    id: number,
    service?: string,
    link?: string,
    user?: string,
    userId?: string,
    playerId?: string
}   

type PlayerSortBy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14 | 15 | 16 | 17
    | "pp"
    | "topPp"
    | "name"
    | "rank"
    | "acc"
    | "weightedAcc"
    | "top1Count"
    | "top1Score"
    | "weightedRank"
    | "topAcc"
    | "hmd"
    | "playCount"
    | "score"
    | "lastplay"
    | "maxStreak"
    | "replaysWatched"
    | "dailyImprovements"
    | "timing"

type PpType = 0 | 1 | 2 | 3 | "general" | "acc" | "pass" | "tech"

interface ProfileSettings {
    id: number,
    bio?: string,
    message?: string,
    effectName?: string,
    profileApperance?: string,
    hue?: number,
    saturation?: number,
    leftSaberColor?: string,
    rightSaberColor?: string,
    profileCover?: string,
    starredFriends?: string,
    horizontalRichBio: boolean,
    showBots:? boolean,
    showAllRatings: boolean,
    showStatsPublic: boolean,
    showStatsPublicPinned: boolean
}

interface QualificationChange {
    id: number,
    timeset: number,
    playerId?: string,
    oldRankability: number,
    oldStars: number,
    oldAccRating: number,
    oldPassRating: number,
    oldTechRating: number,
    oldType: number,
    oldCriteriaMet: number,
    oldCriteriaCommentary?: string,
    oldModifiers: ModifiersMap,
    newRankability: number,
    newStars: number,
    newAccRating: number,
    newPassRating: number,
    newTechRating: number,
    newType: number,
    newCriteriaMet: number,
    newCritieraCommentary?: string,
    newModifiers: ModifiersMap
}

interface QualificationCommentary {
    id: number,
    playerId?: string,
    timeset: number,
    value?: string,
    editTimeset?: number,
    edited: boolean,
    rankQualificationId?: number,
    discordMessageId?: string
}

interface QualificationVote {
    id: number,
    playerId?: string,
    timeset: number,
    value: MapQuality,
    editTimeset?: number,
    edited: boolean,
    rankQualificationId?: number,
    discordRTMessageId?: string
}

interface RankQualification {
    id: number,
    timeset: number,
    rtMember?: string,
    criteriaTimeset: number,
    criteriaMet: number,
    criteriaChecker?: string,
    criteriaCommentary?: string,
    mapperAllowed: boolean,
    mapperId?: string,
    mapperQualification: boolean,
    approvalTimeset: number,
    approved: boolean,
    approvers?: string,
    criteriaCheck?: string,
    modifiers: ModifiersMap,
    modifiersRating: ModifiersRating,
    changes?: Array<QualificationChange>,
    comments?: Array<QualificationCommentary>,
    criteriaComments?: Array<CriteriaCommentary>,
    qualityVote: number,
    votes?: Array<QualificationVote>,
    discordChannelId?: string,
    discordRTChannelId?: string
}

interface RankUpdate {
    id: number,
    timeset: number,
    rtMember?: string,
    keep: boolean,
    starts: number,
    passRating: number,
    techRating: number,
    predictedAcc: number,
    type: number,
    criteriaMet: number,
    criteriaCommentary?: string,
    finished: boolean,
    modifiers: ModifiersMap,
    modifiersRating: ModifiersRating,
    changes?: Array<RankUpdateChange>
}

interface RankUpdateChange {
    id: number,
    timeset: number,
    playerid?: string,
    oldKeep: boolean,
    oldStars: number,
    oldType: number,
    oldCriteriaMet: number,
    oldCriteraCommentary?: string,
    oldModifiers: ModifiersMap,
    newkeep: boolean,
    newStars: number,
    newType: number,
    newCriteriaMet: number,
    newCriteriaCommentary?: String,
    newModifiers: ModifiersMap
}

interface RankVoting {
    scoreId: number,
    playerId?: string,
    hash?: string,
    diff?: string,
    mode?: string,
    rankability: number,
    stars: number,
    type: number,
    timeset: number,
    feedbacks?: Array<VoterFeedback>
}

interface RankedMap {
    name?: string,
    songId?: string,
    cover?: string,
    stars?: number
}

export interface RankedMapperResponse {
    playersCount: number,
    totalPp: number,
    maps?: Array<RankedMap>,
    totalMapCount: number
}

interface ReplayOffsets {
    id: number,
    frames: number,
    notes: number,
    walls: number,
    heights: number,
    pauses: number
}

type Requirements = 0 | 2 | 4 | 8 | 16 | 32 | 64 | -1
    | "none"
    | "chroma"
    | "noodles"
    | "mappingExtensions"
    | "cinema"
    | "v3"
    | "optionalProperties"
    | "ignore"

type ScoreFilterStatus = 0 | 1 | "none" | "suspicious"

export interface ScoreGraphEntry {
    playerId?: string,
    weight: number,
    rank: number,
    timepost: number,
    pauses: number,
    maxStreak?: number,
    mistakes: number,
    modifiers?: string,
    playerRank: number,
    playerName?: string,
    playerAvatar?: string,
    playerAlias?: string,
    accuracy: number,
    pp: number
}

interface ScoreImprovement {
    id: number,
    timeset?: string,
    score: number,
    accuracy: number,
    pp: number,
    bonusPp: number,
    rank: number,
    accRight: number,
    accLeft: number,
    averageRankedAccuracy: number,
    totalPp: number,
    totalRank: number,
    badCuts: number,
    missedNotes: number,
    bombCusts: number,
    wallsHit: number,
    pauses: number
}

interface ScoreMetadata {
    id: number,
    pinnedContexts: LeaderboardContexts,
    highlightedInfo: InfoToHighlight,
    priority: number,
    description?: string,
    linkService?: string,
    linkServiceIcon?: string,
    link?: string
}

interface ScoreResponse {
    id?: number,
    baseScore: number,
    modifiedScore: number,
    accuracy: number,
    playerId?: string,
    pp: number,
    bonusPp: number,
    passPP: number,
    accPP: number,
    techPP: number,
    rank: number,
    country?: string,
    fcAccuracy: number,
    fcPp: number,
    weight: number,
    replay?: string,
    modifiers?: string,
    badCusts: number,
    missedNotes: number,
    bombCusts: number,
    wallsHit: number,
    pauses: number,
    fullCombo: number,
    platform?: string,
    maxCombo: number,
    maxStreak?: number,
    hmd: HMD,
    controller: ControllerEnum,
    leaderboardId?: string,
    timeset?: string,
    timepost: number,
    replaysWatched: number,
    playCount: number,
    lastTryTime: number,
    priority: number,
    player: PlayerResponse,
    scoreImprovement: ScoreImprovement,
    rankVoting: RankVoting,
    metadata: ScoreMetadata,
    offsets: ReplayOffsets
}

interface ScoreResponseWithAcc extends ScoreResponse {
    accLeft: number,
    accRight: number
}

interface ScoreResponseWithMyScore extends ScoreResponseWIthAcc {
    myScore: ScoreResponseWithAcc,
    validContexts: LeaderboardContexts,
    leaderboard: CompactLeaderboardResponse
}

interface ScoreResponseWithMyScoreResponseWithMetadata {
    metadata: Metadata,
    data?: Array<ScoreResponseWithMyScore>
}

export interface ScoresSearchOptions {
    sortBy?: ScoresSortBy,
    order?: Order,
    page?: number,
    count?: number,
    search?: string,
    diff?: "Easy" | "Normal" | "Hard" | "Expert" | "ExpertPlus",
    mode?: Difficulties,
    requirements?: Requirements,
    scoreStatus?: ScoreFilterStatus,
    leaderboardContext?: LeaderboardContests,
    type?: DifficultyStatus,
    modifiers?: string,
    stars_from?: number,
    stars_to?: number,
    time_from?: number,
    time_to?: number,
    eventId?: number
}

type ScoresSortBy = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13 | 14
    | "date"
    | "pp"
    | "accPP"
    | "passPP"
    | "techPP"
    | "acc"
    | "pauses"
    | "playCount"
    | "lastTryTime"
    | "rank"
    | "maxStreak"
    | "timing"
    | "stars"
    | "mistakes"
    | "replaysWatched"

interface Song {
    id?: string,
    hash?: string,
    name?: string,
    subName?: string,
    author?: string,
    mapper?: string,
    mapperId?: number,
    collaboratorIds?: string,
    coverImage?: string,
    fullCoverImage?: string,
    downloadUrl?: string,
    bpm: number,
    duration: number,
    tags?: string,
    uploadTime: number,
    difficulties?: Array<DifficultyDescription>,
    externalStatues?: Array<ExternalStauts>
}

type SongStatus = 0 | 2 | 4 | 8 | 16 | 32
    | "none"
    | "curated"
    | "mapOfTheWeek"
    | "noodleMonday"
    | "featuredOnCC"
    | "beastSaberAwarded";

type Type = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9
    | "all"
    | "ranked"
    | "ranking"
    | "nominated"
    | "qualified"
    | "staff"
    | "reweighting"
    | "reweighted"
    | "unranked"
    | "ost";

interface VoterFeedback {
    id: number,
    rtMember?: string,
    value: number
}