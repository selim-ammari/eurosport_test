import React, { FunctionComponent, useCallback, useEffect, useState } from 'react';
import { Player } from '../Player';
import { useAppDispatch, useAppSelector } from '../redux/hooks';
import { getMatchs } from '../redux/matchsReducer';
import { getSelectedPlayer, onSelectPlayer } from '../redux/playersReducer';
import { convertHeight, convertWeight, getTotalPlayed, getTotalWinLoss } from '../utils';

interface PlayerProps {
    player: Player;
}

const PlayerCard: FunctionComponent<PlayerProps> = ({ player }) => {

    const dispatch = useAppDispatch();

    const matchs = useAppSelector(getMatchs);
    const playerSelection = useAppSelector(getSelectedPlayer);

    const [isSelected, setSelected] = useState<boolean>(false);

    useEffect(() => {
        setSelected(playerSelection !== undefined && playerSelection === player.id);
    }, [playerSelection, player.id])


    const handleClickCard = useCallback(() => dispatch(onSelectPlayer(player.id)
    ), [dispatch, player.id]);

    const { totalWin, totalLoss } = getTotalWinLoss(matchs, player.id)
    return (
        <div className={`p-2 text-white rounded bg-custom-gray hover:scale-105 transition duration-300 player-card ${isSelected ? 'selected-card' : ''
            } cursor-pointer`} onClick={handleClickCard}>
            <div className="grid grid-cols-2">
                <div className="px-2">
                    <div className="flex items-start gap-4 py-2">
                        <img src={player.country.picture.url} alt='' className="w-8 h-6 mr-2" />
                        <p>{`${player.firstname} ${player.lastname}`}</p>
                    </div>
                    <p className="py-2">{`${player.stats.age} ans - ${player.country.code}`}</p>
                    <p className="py-2">{`ATP rank- ${player.stats.rank}`}</p>
                    <p className="py-2">{`Points - ${player.stats.points}`}</p>
                </div>
                <div className="justify-self-end px-2">
                    <img src={player.picture.url} className='rounded' alt='' />
                </div>
            </div>
            <div className="grid grid-cols-3 gap-2 px-2 mt-4">
                <div className="text-center">
                    <p>Total time played</p>
                    <p>{getTotalPlayed(matchs)}</p>
                </div>
                <div className="text-center">
                    <p>Height</p>
                    <p>{`${convertHeight(player.stats.height)} m`}</p>
                </div>
                <div className="text-center">
                    <p>Weight</p>
                    <p>{`${convertWeight(player.stats.weight)} kg`}</p>
                </div>
            </div>
            <div className="grid grid-cols-2 gap-2 px-2 mt-4">
                <div className="text-center">
                    <p>Win games</p>
                    <p>{totalWin}</p>
                </div>
                <div className="text-center">
                    <p>Loose games</p>
                    <p>{totalLoss}</p>
                </div>
            </div>
        </div>

    );
}

export default PlayerCard;
