import { render, screen } from "@testing-library/react"
import Contact from "../Contact"
import "@testing-library/jest-dom";
// import "@testing-library/jest-dom/extend-expect";


describe("Contact US page test cases", ()=>{

    test("Should load the heading inside contact us page", () =>{

        render(<Contact></Contact>)
    
        const heading = screen.getByRole("heading");
    
        expect(heading).toBeInTheDocument();
    
        expect(heading).toHaveTextContent("This is a contact us page");
    
    })
    
    test("Should load the button inside the contact us page", () =>{
        render(<Contact></Contact>)
    
        const button = screen.getByRole("button");
    
        expect(button).toBeInTheDocument();
    
        expect(button).toHaveTextContent(/submit/i);
    
    
    })
    
    test("Should load the 2 input text boxes inside the contact us page", () =>{
    
        render(<Contact></Contact>)
    
        const inputName = screen.getByPlaceholderText(/name/i)
        const inputMessage = screen.getByPlaceholderText(/message/i);
    
        expect(inputName).toBeInTheDocument();
        expect(inputMessage).toBeInTheDocument();
    })
    
    test("Should load the 2 input text boxes inside the contact us page", ()=>{
    
        render(<Contact></Contact>)
    
        const inputBoxes = screen.getAllByRole("textbox")
        
        //console.log(screen.getAllByRole("textbox"))
        //console.log(inputBoxes.length);
        
        expect(inputBoxes.length).toBe(2);
        expect(inputBoxes.length).not.toBe(3);
    })
    
})



