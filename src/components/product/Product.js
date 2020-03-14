import React, {Component} from 'react';
import './Product.css'
import {connect} from 'react-redux'
import {toggleItemInCart,onPostsloaded} from "../../actions/products-actions";
import {withService} from "../../hoc/myHoc";

class Product extends Component {
    componentDidMount() {
        const {getPosts,getCommit,onPostsloaded} = this.props;
        getPosts().then(res=>onPostsloaded(res))
        getCommit().then(console.log)
    }
    renderPosts=({title,body,id})=>{
        return(
            <div  key={id}>
                <h2>{title}</h2>
                <p>{body}</p>
            </div>
        )
    }


    renderCartItem = ({name,price,isAddedToCart,id})=>{
        return(
            <div className={'cart-item'} key={id}>
                <h4>{name}</h4>
                <h4>{price}</h4>
                <h4>Is Added : {isAddedToCart ? 'true':'false'}</h4>
                <button onClick={this.handlerItemToCart.bind(this,id)}>Add to cart</button>
            </div>
        )
    }
    handlerItemToCart=(id)=>{
        const {toggleItemInCart} = this.props
        toggleItemInCart(id)
    }
    render() {
        console.log("this.props");
        console.log(this.props);
        const {products,posts} = this.props;
        return (
            <div className='product-wraper'>
                {
                    products.map(this.renderCartItem)
                }
                {
                    posts.map(this.renderPosts)
                }
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    const {products,posts} = state
    return{
        products,
        posts
    }
}
const mapDispatchToProps = (dispatch)=>{
    return  {
        toggleItemInCart : (id)=>dispatch(toggleItemInCart(id)),
        onPostsloaded : (data)=>dispatch(onPostsloaded(data))
    }
}
export default withService(connect(mapStateToProps,mapDispatchToProps)(Product));