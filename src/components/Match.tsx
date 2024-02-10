import React, { FunctionComponent } from 'react';
import { MatchStats } from '../redux/matchsReducer';
import { formatDate } from '../utils';

interface MatchProps {
    match: MatchStats;
}

const Match: FunctionComponent<MatchProps> = ({ match }) => {
    console.log(match)
    return (
        <div className="bg-white flex flex-col p-2">
            <div className="flex mb-4"><div className="w-2/3 items-center flex gap-2">{`${match.players[0].firstname} ${match.players[0].lastname}`}{match.players[0].id === match.winner.id ? <img src='/check.png' alt='' className='w-8 h-8 cursor-pointer' /> : ''}</div><div className="w-1/3">{`Start: ${formatDate(match.startTime)}`}</div></div>
            <div className="w-full border-b border-gray-300 mb-4"></div>
            <div className="flex mb-4"><div className="w-2/3 items-center flex gap-2">{`${match.players[1].firstname} ${match.players[1].lastname}`}{match.players[1].id === match.winner.id ? <img src='/check.png' alt='' className='w-8 h-8 cursor-pointer' /> : ''}</div><div className="w-1/3">{`End: ${formatDate(match.endTime)}`}</div></div>
        </div>
    )
}

export default Match;