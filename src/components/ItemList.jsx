import { RES_IMG_URL } from "../utils/constants"
import { addItem } from "../utils/cartSlice"
import { useDispatch } from "react-redux"

const ItemList = ({item}) => {
    const dispatch = useDispatch()
    const handleAddItem = (item) => {
        dispatch(addItem(item))
    }

    return (
        <>
            <div>
                {
                    item.map((resItem) => (
                        <div key={resItem.card.info.id} className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between">
                           
                            <div className="w-9/12">
                                <div className="text-sm py-2">
                                    <span>{resItem.card.info.name}</span>
                                    <span> - Rs.{resItem.card.info.defaultPrice ?  resItem.card.info.defaultPrice : resItem.card.info.price }</span>
                                </div>
                           
                                <p className="text-xs">
                                {resItem.card.info.description}
                                </p>
                            </div>
                            <div className="w-3/12">
                                <button onClick={() => handleAddItem(resItem)} className="p-1 ml-12 bg-white shadow-lg absolute rounded">Add +</button>
                                <img src={RES_IMG_URL + resItem.card.info.imageId } className="w-30 h-28"/>
                            </div>
                           
                           
                           
                        </div>
                        
                    ))
                }
              
            </div>
        </>
    )
}

export default ItemList