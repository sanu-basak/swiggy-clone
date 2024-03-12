import { Provider } from "react-redux"
import Header from "../Header"
import { fireEvent, render,screen } from "@testing-library/react"
import appStore from '../../utils/appStore'
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom"

test("Should render header component with about us",()=>{
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                <Header/>
            </Provider>
        </BrowserRouter>
    )

    const aboutUs = screen.getByText(/About Us/)
    
    // const loginBtn = screen.getByRole("button",{name:"Login"})
    // fireEvent.click(loginBtn)
    // const logoutBtn = screen.getByRole("button",{name : "Logout"})
    // expect(logoutBtn).toBeInTheDocument()

    expect(aboutUs).toBeInTheDocument()
    
    
})