import { useEffect, useState } from 'react'
import {RES_MENU_LIST} from './constants'


const useRestaurantCategory = (resId) => {
    const [resMenuList,setResMenuList] = useState([]) 
    const fetchData = async () => {
        const data = await fetch(RES_MENU_LIST+resId)
        const json = await data.json()
        console.log(json)
        setResMenuList(json.data)
    }

    useEffect(() => {
        fetchData()
    },[])

    return resMenuList
}

export default useRestaurantCategory