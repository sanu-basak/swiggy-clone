import { render, screen } from "@testing-library/react"
import ContactUs from "../ContactUs"
import "@testing-library/jest-dom"

describe("Contact us test case",() => {
    it("should load contact us component",() => {
        render(<ContactUs />)
        const heading = screen.getByRole('heading')
        //Assertion
        expect(heading).toBeInTheDocument()
    })
    
    test("should button in contact us component", () => {
        render(<ContactUs/>)
        const button = screen.getByRole('button')
        expect(button).toBeInTheDocument()
    })
    
    it("some specific text is exits or not",() => {
        render(<ContactUs/>)
        const text = screen.getByText('Submit')
        expect(text).toBeInTheDocument()
    })
    
    test("check input placeholder",() => {
        render(<ContactUs/>)
        const inputText = screen.getByPlaceholderText('name')
        expect(inputText).toBeInTheDocument()
    })
})

