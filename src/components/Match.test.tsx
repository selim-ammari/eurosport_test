import React from 'react';
import { render, screen } from '@testing-library/react';
import Match from './Match';
import { MatchStats } from '../redux/matchsReducer';

const mockMatch: MatchStats = {
    id
        :
        "match-1",
    startTime: '2022-02-09T12:00:00Z',
    endTime: '2022-02-09T14:00:00Z',
    winner: {
        id: 'player1',
    },
    players: [
        {
            id: 'player1',
            firstname: 'John',
            lastname: 'Doe',
            shortname: 'JD',
            country: {
                picture: {
                    url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"
                },
                code: "SUI",
            }
        },
        {
            id: 'player2',
            firstname: 'Jane',
            lastname: 'Doe',
            shortname: 'JD',
            country: {
                picture: {
                    url: "https://i.eurosport.com/_iss_/geo/country/flag/large/2213.png"
                },
                code: "SUI",
            }
        },
    ],
};


describe('Match Component', () => {
    it('renders match details correctly', () => {
        render(<Match match={mockMatch} />);

        // Check if player names are rendered
        expect(screen.getByText('John Doe')).toBeInTheDocument();
        expect(screen.getByText('Jane Doe')).toBeInTheDocument();

    });
});
