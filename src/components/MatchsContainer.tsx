import React, { FunctionComponent, useCallback } from 'react';
import { onSelectPlayer } from '../redux/playersReducer';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getWinningMatchs } from '../redux/matchsReducer';
import Match from './Match';


const MatchsContainer: FunctionComponent = () => {
    const dispatch = useAppDispatch()
    const matches = useAppSelector(getWinningMatchs);

    const clearSelectedPlayer = useCallback(() => dispatch(onSelectPlayer(undefined)
    ), [dispatch]);

    return (
        <div data-testid="matchs-container" className="flex flex-col justify-center rounded bg-custom-gray p-8" style={{ width: '60%', margin: '0 auto' }}>
            <div className="ml-auto mb-4"><img src='/close-icon.png' alt='' className='w-8 h-8 cursor-pointer' onClick={clearSelectedPlayer} /></div>
            <div className="flex-1 space-y-2">
                {matches.map(match => <Match key={match.id} match={match} />)}
            </div>
        </div>
    );
}

export default MatchsContainer;