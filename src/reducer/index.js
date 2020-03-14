import {ON_POST_LOADED, TOGGLE_ITEM_TO_CART} from '../action-types'

const initialState = {
    posts:[],
    count: 0,
    products: [
        {
            id: 1,
            name: 'Iphone',
            price: 500,
            isAddedToCart: false
        },                {
            id: 2,
            name: 'Samsung G',
            price: 600,
            isAddedToCart: false
        },
        {
            id: 3,
            name: 'Motorola',
            price: 200,
            isAddedToCart: false
        },
        {
            id: 4,
            name: 'Fly',
            price: 100,
            isAddedToCart: false
        },
        {
            id: 5,
            name: 'Iphone',
            price: 500,
            isAddedToCart: false
        },       ]
};
export default (state = initialState,action)=>{
    switch (action.type) {
        case TOGGLE_ITEM_TO_CART :
            console.log(action);
            const id  = action.payload;
            const {products} = state
            const copyProducts = [...products]
            const indexOFCarrentItem = products.findIndex(el=> el.id === id)
            copyProducts[indexOFCarrentItem].isAddedToCart = !copyProducts[indexOFCarrentItem].isAddedToCart;
            const updateCount = copyProducts.filter(el=>el.isAddedToCart)

            return {...state, products: copyProducts, count: updateCount.length };
        case ON_POST_LOADED :
            const {payload: posts} = action;
            return {...state, posts};
        default:
            return state;

    }
}