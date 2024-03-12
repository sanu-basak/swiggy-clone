import { render,screen } from "@testing-library/react"
import RestaurantCard from '../RestaurantCard'
import "@testing-library/jest-dom"
import restaurantList from '../mocks/resMockData'

it("check restaurant card",() => {
    render(<RestaurantCard resData={restaurantList}/>)
    const name = screen.getByText(/McDonald/)
    expect(name).toBeInTheDocument() 
})