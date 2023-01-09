import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Detail from '../Components/Detail';

describe('Comic details', () => {
    it('Correctly renders comic details', () => {
        const testDeets = {
            issue: 25,
            publishDate: 'June 41st, 4089',
            creators: [
                {
                    resourceURI: 'https://veryuninterestedinthatoption.com',
                    name: 'David Rose',
                    role: 'Disgruntled Pelican'
                },
                {
                    resourceURI: 'https://eewdavid.com',
                    name: 'Alexis Rose',
                    role: 'A Little Bit Alexis'
                },
                {
                    resourceURI: 'https://thatsoundsdangersome.com',
                    name: 'Moira Rose',
                    role: 'Dr. Clara Mandrake, Definitely Not A Crow'
                },
            ],
        };

        render(
            <Detail
                issue={testDeets.issue}
                publishDate={testDeets.publishDate}
                creators={testDeets.creators.map((creator) => creator.name)}
            />
        );

        expect(screen.getByTestId("issue-number")).toBeInTheDocument();
        expect(screen.getByTestId("publish-date")).toBeInTheDocument();
        expect(screen.getByTestId("creators-list")).toBeInTheDocument();
    })
})