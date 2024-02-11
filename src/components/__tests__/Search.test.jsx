import { fireEvent, render, screen } from "@testing-library/react";
import Body from "../Body";
import MOCK_DATA from "../mocks/restaurantsData.json";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
    return Promise.resolve({
        json: () => Promise.resolve(MOCK_DATA)
    });
});

describe('<Body />', () => {
    it('render body component', async () => {
        await act(() => {
            render(<BrowserRouter>
                <Body />
            </BrowserRouter>);
        });
        const searchEl = screen.getByRole('textbox');
        fireEvent.change(searchEl, { target: { value: 'cafe' } });
        fireEvent.submit(searchEl);

        const testCards = screen.getAllByTestId('resCard');
        // console.log('searchEl: ', searchEl);
        expect(testCards.length).toBe(1);
    });
});