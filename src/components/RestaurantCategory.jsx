import { useState } from "react"
import ItemList from "./ItemList"

const RestaurantCategory = ({data,showItems,setShowIndex,index}) => {
   
    const handleClick = () => {
        console.log(index)
        setShowIndex()
    }

    return <>
        <div className="font-bold text-lg w-6/12 m-auto my-4 shadow-lg bg-gray-50 p-4 ">
            <div className="flex justify-between cursor-pointer" onClick={handleClick}>
                <span>{data?.title} ({data?.itemCards.length})</span>
                <span>&#x25BC;</span>
            </div>
    
            { showItems && <ItemList item={data.itemCards}/> }
        </div>
        
       
       
        
    </>
}

export default RestaurantCategory