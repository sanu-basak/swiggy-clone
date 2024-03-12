import RestaurantCard from "./RestaurantCard";
import {useEffect, useState} from 'react'
import useRestaurantList from "../utils/useRestaurantList"
import { Link } from "react-router-dom";
import Shimmer from "./Shimmer";

const Home = () => {

    const [resList,setResList] = useState([])
    const resData = useRestaurantList()

    const filteredRes = () => {
        let filterList = resList.filter((res) => {
            return res.info.avgRating >= 4
        })
        setResList(filterList)
    }

    useEffect(() =>{
        setResList(resData?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants)
    },[resData])
    
    return (resList === undefined || resList === null || resList.length === 0 ) ?  <Shimmer/> :  (
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
                        resList.map((res) => { console.log(res)
                            return <Link to={"/restaurant/"+res.info.id}>
                                <RestaurantCard key={res.info.id}
                                  resData = {res}
                                />
                            </Link> })
                    }
                </div>                
            </div>
        </>
    )
}

export default Home;