import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import './Dashboard.css';
import House from '../House/House';
class Dashboard extends Component{
    constructor(){
        super();
        this.state = {
            houses:[]
        }
        this.getHouses = this.getHouses.bind(this);
        this.deleteHouse = this.deleteHouse.bind(this);
    }

    getHouses(){
        axios.get('/api/house').then(response=>{       
            this.setState({
                houses: response.data
            });
        })
    }

    deleteHouse(id){
        axios.delete(`/api/house/${id}`).then(()=>{
            this.getHouses();
        });
    }

    componentDidMount(){
        this.getHouses();
    }

    render(){
        let houses = this.state.houses.map((e,i)=>{
            return(
                <House key={i} house={e} deleteHouse={this.deleteHouse}/>
            );
        })
        return (
            <div>
                Dashboard
                <Link to='/wizard/step1'><button>Add New Property</button></Link>
                {houses}

            </div>
        )
    }
}
export default Dashboard;