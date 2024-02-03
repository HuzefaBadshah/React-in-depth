import { render, screen } from "@testing-library/react"
import MOCK_RES_INFO from "../mocks/restaurantCardMock.json";
import RestaurantCard from "../RestaurantCard";
import "@testing-library/jest-dom";

describe("RestaurantCard component", () => {
    it('should render name of the restaurant passsed', () => {
        render(<RestaurantCard info={MOCK_RES_INFO} />);
        const h3 = screen.getByRole('heading', { level: 3 });
        expect(h3).toHaveTextContent('Jain Mithai Bhandar (JMB)');
    })
})