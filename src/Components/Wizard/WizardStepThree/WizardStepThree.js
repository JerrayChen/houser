import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './WizardStepThree.css';
import store, { UPDATE_STEP3, INIT_STATE } from '../../../store';
class WizardStepThree extends Component {
    constructor() {
        super();
        this.state = {
            mortgage: store.getState().mortgage,
            rent: store.getState().rent
        }
    }

    componentDidMount() {
        store.subscribe(() => {
            this.setState({
                mortgage: store.getState().mortgage,
                rent: store.getState().rent
            })
        });
    }

    handleInputChange(e, inputName) {
        let updateObj = {};
        updateObj[inputName] = e.target.value;
        this.setState(updateObj);
    }

    addHouse() {
        const { name, address, city, state, zip, img } = store.getState();
        const { mortgage, rent } = this.state;
        const newHouse = {
            name, address, city, state, zip, img, mortgage, rent
        }
        axios.post('/api/house', newHouse).then(() => {
            store.dispatch({
                type: INIT_STATE,
            });
            this.props.history.push('/');
        })
    }

    saveChange() {
        const { mortgage, rent } = this.state;
        const sendingObj = { mortgage, rent };
        store.dispatch({
            type: UPDATE_STEP3,
            payload: sendingObj
        });
    }

    render() {
        return (
            <div>
                WizardStepThree
                Monthly Mortgage Amount:
                <input onChange={(e) => { this.handleInputChange(e, 'mortgage') }} value={this.state.mortgage} />
                Desired Monthly Rent:
                <input onChange={(e) => { this.handleInputChange(e, 'rent') }} value={this.state.rent} />
                <Link to='/wizard/step2' ><button onClick={() => { this.saveChange() }}>Previous Step</button></Link>
                <button onClick={() => { this.addHouse() }}>Complete</button>
            </div>
        )
    }
}
export default WizardStepThree;