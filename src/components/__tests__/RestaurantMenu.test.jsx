import { act } from 'react-dom/test-utils';
import MOCK_DATA from '../mocks/restMenuMock.json';
import { fireEvent, render, screen } from '@testing-library/react';
import RestaurantMenu from '../RestaurantMenu';
import { Provider } from 'react-redux';
import appStore from '../../store/appStore';
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => Promise.resolve({
    json: () => Promise.resolve(MOCK_DATA)
}));

describe("<RestaurantMenu />", () => {
    it('should render RestaurantMenu component', async () => {

        await act(() => render(
            <Provider store={appStore}>
                <RestaurantMenu />
            </Provider>
        ));
        const res_menu = screen.getAllByTestId('accordion-header');
        fireEvent.click(res_menu[1]);
        const accordionDetails = screen.getAllByTestId('accordionDetails');
        expect(accordionDetails.length).toBe(2);
    });
});