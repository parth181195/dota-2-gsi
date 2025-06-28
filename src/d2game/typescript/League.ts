import { Node } from './Node';

export interface LeagueTeam {
    teamId: number;
    teamTag: string;
    teamName: string;
    seriesWins: number;
}

export interface Stream {
    streamId: number;
    language: number;
    name: string;
    broadcastProvider: number;
    streamUrl: string;
    vodUrl: string;
}

export interface League {
    seriesType: number;
    selectionPriority: any;
    leagueId: number;
    matchId: number;
    name: string;
    tier: number;
    region: number;
    url: string;
    description: string;
    notes: string;
    startTimestamp: number;
    endTimestamp: number;
    proCircuitPoints: number;
    imageBits: number;
    status: number;
    mostRecentActivity: number;
    registrationPeriod: number;
    basePrizePool: number;
    totalPrizePool: number;
    leagueNoteId: number;
    radiantTeam: LeagueTeam;
    direTeam: LeagueTeam;
    seriesId: number;
    startTime: number;
    firstTeamId: number;
    secondTeamId: number;
    streams: Stream[];
}

/**
 * Class representing league information.
 * This is a placeholder implementation.
 */
export class League extends Node {
    league: League | null = null;
    constructor(parsedData: any = null) {
        super(parsedData);
        if (parsedData) {
            this.league = {
                seriesType: parsedData.series_type ?? -1,
                selectionPriority: parsedData.selection_priority ?? null,
                leagueId: parsedData.league_id ?? 0,
                matchId: parsedData.match_id ?? 0,
                name: parsedData.name ?? '',
                tier: parsedData.tier ?? 0,
                region: parsedData.region ?? 0,
                url: parsedData.url ?? '',
                description: parsedData.description ?? '',
                notes: parsedData.notes ?? '',
                startTimestamp: parsedData.start_timestamp ?? 0,
                endTimestamp: parsedData.end_timestamp ?? 0,
                proCircuitPoints: parsedData.pro_circuit_points ?? 0,
                imageBits: parsedData.image_bits ?? 0,
                status: parsedData.status ?? 0,
                mostRecentActivity: parsedData.most_recent_activity ?? 0,
                registrationPeriod: parsedData.registration_period ?? 0,
                basePrizePool: parsedData.base_prize_pool ?? 0,
                totalPrizePool: parsedData.total_prize_pool ?? 0,
                leagueNoteId: parsedData.league_node_id ?? 0,
                radiantTeam: League.parseLeagueTeam(parsedData.radiant),
                direTeam: League.parseLeagueTeam(parsedData.dire),
                seriesId: parsedData.series_id ?? 0,
                startTime: parsedData.start_time ?? 0,
                firstTeamId: parsedData.team_id_1 ?? 0,
                secondTeamId: parsedData.team_id_2 ?? 0,
                streams: League.parseStreams(parsedData.streams),
            };
        }
    }
    static parseLeagueTeam(data: any): LeagueTeam {
        return {
            teamId: data?.team_id ?? 0,
            teamTag: data?.team_tag ?? '',
            teamName: data?.name ?? '',
            seriesWins: data?.series_wins ?? 0,
        };
    }
    static parseStreams(data: any): Stream[] {
        const streams: Stream[] = [];
        if (!data) return streams;
        for (const key in data) {
            const s = data[key];
            streams.push({
                streamId: s?.stream_id ?? 0,
                language: s?.language ?? 0,
                name: s?.name ?? '',
                broadcastProvider: s?.broadcast_provider ?? 0,
                streamUrl: s?.stream_url ?? '',
                vodUrl: s?.vod_url ?? '',
            });
        }
        return streams;
    }
    toString(): string {
        return `[League: ${JSON.stringify(this.league)}]`;
    }
} 