import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../store/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

describe('Header Component', () => {
    test('should render Header Component', () => {
        render(
            <BrowserRouter>
                <Provider store={appStore}>
                    <Header />
                </Provider>
            </BrowserRouter>
        );
        const homeLink = screen.getByRole('link', { name: 'Home' });
        screen.debug();
        // console.log('homeLink: ', homeLink);
        expect(homeLink).toBeInTheDocument()
    });
});