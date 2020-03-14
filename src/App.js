import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./components/header/Header";
import Product from "./components/product/Product";

class App extends React.Component {
    // constructor(props) {
    //     super(props)
    // }
    // addItemToCart =(id)=>{
    //     const {products} = this.state
    //     const copyProducts = [...products]
    //     const indexOFCarrentItem = products.findIndex(el=> el.id === id)
    //     copyProducts[indexOFCarrentItem].isAddedToCart = !copyProducts[indexOFCarrentItem].isAddedToCart;
    //     const updateCount = copyProducts.filter(el=>el.isAddedToCart)
    //     this.setState({
    //         products: copyProducts,
    //         count: updateCount.length
    //     })
    //
    // }
    render() {
        console.log(this.state);
        return (
            <div className="App">
                <Header />
                    {/*<Product b={'bbbbbbbbb'} />*/}
                {Product({b:'bbbbb'})}
            </div>
        );
    }
}

export default App;
