import { fireEvent, render, screen } from "@testing-library/react"
import RestaurantMenu from "../RestaurantMenu"
import { act } from "react-dom/test-utils"
import MOCK_DATA from '../mocks/resMenuMock.json';
import "@testing-library/jest-dom";
import { Provider } from "react-redux";
import appStore from '../../utils/appStore';
import { BrowserRouter } from "react-router-dom";
import Header from '../Header';
import Cart from "../Cart";
import Checkout from "../Checkout";

global.fetch = jest.fn(()=>{
    return Promise.resolve({
        json: () =>{
            return Promise.resolve(MOCK_DATA);
        }
    })
})

jest.useFakeTimers();

test("Should load the restaurant menu page", async () =>{

    await act(async() => render(
    <BrowserRouter>
        <Provider store={appStore}>
            <Header></Header>
            <RestaurantMenu></RestaurantMenu>
            <Cart></Cart>
            <Checkout></Checkout>
        </Provider>
    </BrowserRouter>
    ))

    const text = screen.getByText("Mahesh Andhra Mess");
    expect(text).toBeInTheDocument();

    const accordianHeader = screen.getByText("Recommended (12)");
    expect(accordianHeader).toBeInTheDocument();

    const allDownArrowButtons = screen.getAllByText("⬇️");
    const firstDownArrowButton = allDownArrowButtons[0];
    fireEvent.click(firstDownArrowButton);

    const items = screen.getAllByTestId("foodItems");
    expect(items.length).toBe(12);

    const addBtns = screen.getAllByRole("button", {name: "Add +"});
    const firstBtn= addBtns[0];
    fireEvent.click(firstBtn);

    //Now in the above we clicked on the first add button of the Recommended (12) accordian, now our header should change
    const cartItems = screen.getByText("Cart - 1 Items")
    expect(cartItems).toBeInTheDocument();

    const secondBtn= addBtns[1];
    fireEvent.click(secondBtn);

    const cartItems1 = screen.getByText("Cart - 2 Items")
    expect(cartItems1).toBeInTheDocument();


    fireEvent.click(cartItems1);

    const finalItems = screen.getAllByTestId("cartItems");
    expect(finalItems.length).toBe(2);

    const clearCartBtn = screen.getByRole("button", {name:"Clear Cart"})
    expect(clearCartBtn).toBeInTheDocument();

    const checkoutBtn = screen.getByRole("button", {name: "Checkout"})
    expect(checkoutBtn).toBeInTheDocument();

    const removeBtns = screen.getAllByRole("button", {name: "remove -"});
    const firsRemovetBtn= removeBtns[0];
    fireEvent.click(firsRemovetBtn);

    const finalItemsAfterRemove = screen.getAllByTestId("cartItems");
    expect(finalItemsAfterRemove.length).toBe(1);

    fireEvent.click(clearCartBtn);
    const afterClearCartText = screen.getByText("Please add items to your cart and come here😄")
    expect(afterClearCartText).toBeInTheDocument();

    const headerAfterClearCart = screen.getByText("Cart - 0 Items");

    expect(headerAfterClearCart).toBeInTheDocument();

    //Again adding the items:
    const addBtnsAgain = screen.getAllByRole("button", {name: "Add +"});
    const firstBtnAgain= addBtns[0];
    fireEvent.click(firstBtnAgain);
    //fireEvent.click(firstBtnAgain);

    const cartItemsAgain = screen.getByText("Cart - 1 Items")
    expect(cartItemsAgain).toBeInTheDocument();

    fireEvent.click(checkoutBtn);

    const orderDetailsHeader = await screen.findByText("Your Order Details");
    expect(orderDetailsHeader).toBeInTheDocument();

    // //Simulate the passage of time to trigger the useEffect in Checkout
    act(() => {
        jest.advanceTimersByTime(8000);
    });

    //Ensure that the cart is cleared and the "Thanks for Ordering" message is displayed
    const afterTimeoutText = screen.getByText("Thanks for Ordering with Us!");
    expect(afterTimeoutText).toBeInTheDocument();

    const allDownArrowButtonsArrowTest = screen.getAllByText("⬇️");
    const firstDownArrowButtonArrowTest = allDownArrowButtonsArrowTest[0];
    fireEvent.click(firstDownArrowButtonArrowTest);
   
})
