import { Provider } from 'react-redux';
import Header from '../Header';
import {fireEvent, render, screen} from '@testing-library/react';
import appStore from '../../utils/appStore';
import { BrowserRouter } from 'react-router-dom';
import "@testing-library/jest-dom";

test("should render header component with login button", () =>{
    
    render( 
        <BrowserRouter>
            <Provider store={appStore}>
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    //Querying in different ways
    //first way: const login = screen.getByRole("button");
    
    //seond way: const login = screen.getByText(/LoGiN/i); 

    //When we have multiple buttons and you want to specifically check whether Login button is rendered or not
    const login = screen.getByRole("button", {name: "Login"});

    //Assertion
    expect(login).toBeInTheDocument();
    
})

test("should render the header component with cart items 0", ()=>{

    render(
        <BrowserRouter>
            <Provider store={appStore}>
                    <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    //Querying

    const cart = screen.getByText(/cart - 0 Items/i)
    expect(cart).toBeInTheDocument();
})

test("Should change the Login button to Logout on click and vice versa", ()=>{
   
    render(
        <BrowserRouter>
            <Provider store={appStore}> 
                <Header></Header>
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByRole("button", {name: "Login"});
    expect(loginButton).toBeInTheDocument();

    //This will click on our loginButton and now our button will change to Logout
    fireEvent.click(loginButton);

    const logoutButton = screen.getByRole("button", {name: "Logout"});
    expect(logoutButton).toBeInTheDocument();

    //This will click on our logoutButton and now our button will change to Login
    fireEvent.click(logoutButton);

    const loginButton1 = screen.getByRole("button", {name: "Login"});
    expect(loginButton1).toBeInTheDocument();

})


