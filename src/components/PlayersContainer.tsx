import React, { FunctionComponent, useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { fetchPlayers, getPlayers, getPlayersLoadingStatus } from '../redux/playersReducer';
import PlayerCard from './PlayerCard';


const PlayersContainer: FunctionComponent = () => {
    const players = useAppSelector(getPlayers);
    const loadingStatus = useAppSelector(getPlayersLoadingStatus);
    const dispatch = useAppDispatch();

    useEffect(() => {
        dispatch(fetchPlayers())
    }, [dispatch]);

    if (loadingStatus === "loading" || !players.length) {
        return <div className="flex items-center justify-center h-screen">
        <div className="border-t-4 border-blue-500 border-solid rounded-full animate-spin h-16 w-16"></div>
      </div>
    }

    return (
        <div className="mx-auto w-full max-w-screen-lg grid grid-cols-2 gap-4 justify-stretch py-4" data-testid="players-container">
            {players.map(player =>
                <PlayerCard key={player.id} player={player}/>
            )}
        </div>
    );
}

export default PlayersContainer;