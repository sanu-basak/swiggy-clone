import ItemList from "./ItemList"
import useRestaurantCategory from '../utils/useRestaurantCategory'
import { useState } from "react"
import { useParams } from "react-router-dom"
import RestaurantCategory from "./RestaurantCategory"

const RestaurantMenu = () => {
    const {resId} = useParams()
    const resInfo = useRestaurantCategory(resId)

    const [showIndex,setShowIndex] = useState(0)
    const [showListIndex,setShowListIndex] = useState(true)
    
    
    if (Array.isArray(resInfo.cards) && resInfo.cards.length > 0) {
        const {name,cuisines,city,sla} = resInfo?.cards[0]?.card?.card?.info
        const categories = resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.['@type'] == "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    return (
        <>
         <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <p className="font-bold text-lg">{cuisines.join(", ")}</p>
            <p className="font-bold text-lg">{city}, {sla?.lastMileTravelString}</p>
            {
                categories.map((category,index) => (
                    //Controlled Component
                    <RestaurantCategory 
                        key={category?.card?.card?.title} 
                        data={category?.card?.card}
                        showItems = {index === showIndex && showListIndex}
                        setShowIndex = {() => {
                            setShowIndex(index)
                            setShowListIndex(!showListIndex)
                        }}
                        index={index}
                    />
                ))
            }
         </div>
        </>
    )
    } else {
        console.error("resInfo.cards is not an array or is empty");
    } 
  
}

export default RestaurantMenu