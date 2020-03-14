import {TOGGLE_ITEM_TO_CART,ON_POST_LOADED} from '../action-types'
export const toggleItemInCart = (id)=>{
    return{
        type : TOGGLE_ITEM_TO_CART,
        payload: id
    }
}

export const onPostsloaded = (data)=>{
    return{
        type : ON_POST_LOADED,
        payload: data
    }
}