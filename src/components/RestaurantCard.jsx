import {RES_IMG_URL} from "../utils/constants"
const RestaurantCard = (props) => {

    if(props.resData != undefined){
        const {name,cloudinaryImageId,cuisines,avgRating,sla} = props.resData.info;
    
        return (
            <>
                <div className="m-4 p-4 w-[285px] h-96 bg-gray-100 rounded-lg hover:bg-gray-300 hover:ring-gray-300 cursor-pointer">
                    <img src={ RES_IMG_URL + cloudinaryImageId }  className="rounded-lg h-48 w-64" alt="res-logo"/>
                    <h1 className="font-bold py-3 text-lg">{name}</h1>
                    <h4>{cuisines.join(",")}</h4>
                    <h4>{avgRating + " stars"}</h4>
                    <h4>{sla.slaString}</h4>    
                </div>
            </>
        );
    }else{
        return <div className="simmer-card"></div>
    }
    
}

export default RestaurantCard;