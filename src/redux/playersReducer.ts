import {createAsyncThunk, createSlice, PayloadAction} from '@reduxjs/toolkit';
import { fetchPlayersFromAPI } from '../services/graphql/player';
import { RootState } from './store';
import { Sex } from '../Player';

export interface PlayersState {
    players: Player[];
    playerSelected: string | undefined;
    status: 'success' | 'loading' | 'failed';
}

export interface Picture {
    url: string;
}

export interface Country {
    picture: Picture;
    code: string;
}

export interface Stats {
    rank: number;
    points: number;
    weight: number;
    height: number;
    age: number;
}

export interface Player {
    id: string;
    firstname: string;
    lastname: string;
    shortname: string;
    sex: Sex;
    picture: Picture;
    country: Country;
    stats: Stats;
}



const initialState: PlayersState = {
    players: [],
    playerSelected: undefined,
    status: 'success',
};

export const fetchPlayers = createAsyncThunk(
    'players/fetchPlayers',
    async () => {
        const response = await fetchPlayersFromAPI();
        return response.data.players;
    }
);

export const playersSlice = createSlice({
    name: 'players',
    initialState,
    reducers: {
        onSelectPlayer: (state, action: PayloadAction<string | undefined>) => {
            state.playerSelected = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchPlayers.pending, (state) => {
                state.status = 'loading';
            })
            .addCase(fetchPlayers.fulfilled, (state, action) => {
                state.status = 'success';
                state.players = action.payload;
            })
            .addCase(fetchPlayers.rejected, (state) => {
                state.status = 'failed';
            });
    },
});

export const { onSelectPlayer } = playersSlice.actions;

export const getPlayers = (state: RootState) => state.players.players;

export const getPlayersLoadingStatus = (state: RootState) => state.players.status;

export const getSelectedPlayer = (state: RootState) => state.players.playerSelected;

export default playersSlice.reducer;