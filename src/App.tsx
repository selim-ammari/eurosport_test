import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from './redux/hooks';
import PlayersContainer from './components/PlayersContainer';
import { fetchMatchs } from './redux/matchsReducer';
import { getSelectedPlayer } from './redux/playersReducer';
import MatchsContainer from './components/MatchsContainer';

function App() {
  const dispatch = useAppDispatch();
  const hasPlayerSelection = useAppSelector(getSelectedPlayer);
  useEffect(() => {
    dispatch(fetchMatchs())
}, [dispatch]);
  return (
    <div className="mx-auto">
      <PlayersContainer/>
      {hasPlayerSelection && <MatchsContainer/>}
    </div>
  );

}

export default App;
