import React from 'react'
import {logicalExpression} from "@babel/types";


export class UserCard extends React.Component{
    constructor(props){
        super(props)
        this.state={
            arr: props.arr || []
        }
    }
    componentDidMount() {
        console.log('UserCard');
    }

    render() {
        console.log('UserRender');
        return(
            <div >
                <ul>
                    {this.props.arr.map((v,i)=>{
                        return (
                            <h1 key={i}>{v}</h1>
                        )
                    })}
                </ul>
            </div>
        )
    }
}

// export default UserCard