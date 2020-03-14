import React, {Component} from 'react';
import {connect} from 'react-redux'
import './Header.css'
import {withService} from "../../hoc/myHoc";

class Header extends Component {
    render() {
        console.log('header props');
        console.log(this.props);
        const {count} = this.props
        return (

            <div className="App-header">
                <h1>Hello in my shop</h1>
                <h1>Count : {count}</h1>
            </div>
        );
    }
}
const mapStateToProps = (state)=>{
    const {count} = state
    return{
        count
    }
}
export default withService(connect(mapStateToProps)(Header));