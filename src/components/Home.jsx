import RestaurantCard from "./RestaurantCard";
import {useState,useEffect} from 'react'

const Home = () => {
    const fetchData = async () => {
        let resData = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?page_type=DESKTOP_WEB_LISTING&lat=19.1174798&lng=72.86916029999999")
        const json = await resData.json()
        setResList(json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    }

   

    const [resList,setResList] = useState([]);
    const filteredRes = () => {
        let filterList = resList.filter((res) => {
            return res.info.avgRating >= 4
        })
        setResList(filterList)
    }

    useEffect(() => {
        fetchData()
    },[])

    if(resList.length === 0 ){
        return <h1>Loading</h1>
    }
    return (
        <>
            <div className="home">
                <div className="flex">
                    <div className="m-4 p-4 flex items-center">
                        <input type="text" placeholder="Search" className="border border-solid border-gray"/>
                        <button className="px-4 py-2 m-4 bg-green-100 rounded-lg">Search</button>
                    </div>
                    <div className="m-4 p-4 flex items-center">
                        <button onClick={filteredRes}className="px-4 py-2 m-4 bg-gray-100 rounded-lg">Top Rated Restaurant</button>
                    </div>
                    
                </div>
                <div className="flex flex-wrap">
                    { 
                        resList.map((res) => { 
                            return <RestaurantCard key={res.id}
                                  resData = {res}
                        /> })
                    }
                </div>                
            </div>
        </>
    )
}

export default Home;