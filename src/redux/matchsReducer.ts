import {createAsyncThunk, createSlice} from '@reduxjs/toolkit';
import { fetchMatchsFromAPI } from '../services/graphql/match';
import { RootState } from './store';
import { Country } from './playersReducer';

export interface MatchsState {
    matches: MatchStats[];
    status: 'success' | 'loading' | 'failed';
}

export interface MatchPlayer {
    id: string;
    firstname: string;
    lastname: string;
    shortname: string;
    country: Country;
}

export interface MatchWinner {
    id: string;
}

export interface MatchStats {
    id: string;
    players: MatchPlayer[];
    winner: MatchWinner;
    startTime: string;
    endTime: string;
}



const initialState: MatchsState = {
    matches: [],
    status: 'success',
};

export const fetchMatchs = createAsyncThunk(
    'matches/fetchMatches',
    async () => {
        const response = await fetchMatchsFromAPI();
        return response.data.matches;
    }
);

export const matchesSlice = createSlice({
    name: 'matches',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchMatchs.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchMatchs.fulfilled, (state, action) => {
                state.status = 'success';
                state.matches = action.payload;
            })
            .addCase(fetchMatchs.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const getMatchs = (state: RootState) => state.matches.matches;

export const getWinningMatchs = (state: RootState) => state.matches.matches.filter(match => state.players.playerSelected === match.winner.id);

export default matchesSlice.reducer;