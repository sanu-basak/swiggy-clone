import { useState,useEffect } from "react"
import { RES_LIST_URL } from "./constants"

const useRestaurantList = () => {
    const [resData,setResData] = useState([])
    const fetchData = async () => {
        const data = await fetch(RES_LIST_URL)
        const json = await data.json()
        setResData(json)
    }

    useEffect(() => {
        fetchData()
    },[])

    return resData
}

export default useRestaurantList