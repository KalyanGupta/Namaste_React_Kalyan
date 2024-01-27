import RestaurantCard from "../RestaurantCard";
import { render, screen } from "@testing-library/react";
import MOCK_DATA from '../../components/mocks/resCardMock.json';
import "@testing-library/jest-dom";

test("Should render the RestaurantCard component with props data", () =>{

    render(<RestaurantCard resData={MOCK_DATA}></RestaurantCard>)

    const name = screen.getByText("Pizza Hut");

    expect(name).toBeInTheDocument(name);

    const cost = screen.getByText("₹350 for two");
    expect(cost).toBeInTheDocument();

    const time = screen.getByText("31 minutes");
    expect(time).toBeInTheDocument();

    const stars = screen.getByText("3.6 stars");
    expect(stars).toBeInTheDocument();

})