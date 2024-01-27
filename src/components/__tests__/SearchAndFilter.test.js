import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from '../mocks/resListMock.json';
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";



global.fetch = jest.fn(() =>{
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    }
  })
})

test("Should search RsList for the pizza text input", async ()=>{

  await act(async () => render(   <BrowserRouter> <Body></Body> </BrowserRouter>)) 

  const searchbtn = screen.getByRole("button", {name: "Search"})
  screen.getByPlaceholderText
  expect(searchbtn).toBeInTheDocument();

  const searchInput = screen.getByTestId("searchInput");
  //console.log(searchInput);

  fireEvent.change(searchInput, {target: {value:"pizza"}})
  fireEvent.click(searchbtn);

  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(4);

})


test("Should filter the top rated restuarants", async ()=>{

  await act(async () => render(   <BrowserRouter> <Body></Body> </BrowserRouter>)) 

  const topRatedBtn = screen.getByRole("button", {name:"Top Rated Restaurants"})
  fireEvent.click(topRatedBtn);
  
  const cards = screen.getAllByTestId("resCard");

  expect(cards.length).toBe(3);

})

