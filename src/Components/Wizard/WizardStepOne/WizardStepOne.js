import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './WizardStepOne.css';
import store, {UPDATE_STEP1} from '../../../store';

class WizardStepOne extends Component {
    constructor() {
        super();
        let reduxState = store.getState();
        this.state = {
            name: reduxState.name,
            address: reduxState.address,
            city: reduxState.city,
            state: reduxState.state,
            zip: reduxState.zip
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            let reduxState = store.getState();
            this.setState({
                name: reduxState.name,
                address: reduxState.address,
                city: reduxState.city,
                state: reduxState.state,
                zip: reduxState.zip
            })
        })
    }

    handleInputChange(e, inputName) {
        let updateObj = {};
        updateObj[inputName] = e.target.value;
        this.setState(updateObj);
    }

    saveChange(){
        const {name, address, city, state, zip} = this.state;
        const sendingObj = {name, address, city, state, zip};
        store.dispatch({
            type: UPDATE_STEP1,
            payload: sendingObj
        });
    }

    render() {
        return (
            <div>
                WizardStepOne

                Name: <input onChange={(e) => { this.handleInputChange(e, 'name') }} value={this.state.name} />
                Address: <input onChange={(e) => { this.handleInputChange(e, 'address') }} value={this.state.address} />
                City: <input onChange={(e) => { this.handleInputChange(e, 'city') }} value={this.state.city} />
                State: <input onChange={(e) => { this.handleInputChange(e, 'state') }} value={this.state.state} />
                Zip Code: <input onChange={(e) => { this.handleInputChange(e, 'zip') }} value={this.state.zip} />
                <Link to='/wizard/step2' ><button onClick={()=>{this.saveChange()}}>Next Step</button></Link>
            </div>
        )
    }
}
export default WizardStepOne;