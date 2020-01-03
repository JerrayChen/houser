import React, {Component} from 'react';
import './House.css';
class House extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className='House'>
                <div>
                    <div><img src={this.props.house.img} /></div>
                </div>
                <div>
                    <div><span>Property Name: </span> {this.props.house.name} </div>
                    <div><span>Address: </span> {this.props.house.address} </div>
                    <div><span>City: </span> {this.props.house.city} </div>
                    <div><span>State: </span> {this.props.house.state} </div>
                    <div><span>Zip Code: </span> {this.props.house.zip} </div>
                </div>
                <div>
                    <div><span>Monthly Mortgage: </span> {this.props.house.mortgage} </div>
                    <div><span>Desired Rent: </span> {this.props.house.rent} </div>
                </div>
                <div>
                    <button onClick={()=>{this.props.deleteHouse(this.props.house.id)}}>X</button>
                </div>
            </div>
        )
    }
}
export default House;