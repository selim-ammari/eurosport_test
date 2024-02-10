import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { Provider } from 'react-redux';
import {store} from './redux/store';
import App from './App';

test('renders PlayersContainer component at startup', async () => {

  render(
    <Provider store={store}>
      <App />
    </Provider>
  );
  await waitFor(() => {
    const playersContainer = screen.getByTestId('players-container');
    expect(playersContainer).toBeInTheDocument();
  });
});

test('MatchsContainer component should not be present at startup', async () => {

    render(
      <Provider store={store}>
        <App />
      </Provider>
    );
    await waitFor(() => {
        const matchsContainer = screen.queryByTestId('matchs-container');
        expect(matchsContainer).not.toBeInTheDocument();
    });
  });