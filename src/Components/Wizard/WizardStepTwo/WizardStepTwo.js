import React, {Component} from 'react';
import {Link} from 'react-router-dom';

import './WizardStepTwo.css';
import store,{UPDATE_STEP2} from '../../../store';


class WizardStepTwo extends Component{
    constructor(){
        super();
        this.state = {
            img: store.getState().img,
        }
    }

    componentDidMount(){
        store.subscribe(()=>{
            this.setState({
                img: store.getState().img
            })
        });
    }

    handleInputChange(e, inputName){
        let updateObj = {};
        updateObj[inputName] = e.target.value;
        this.setState(updateObj);
    }

    saveChange(){
        const {img} = this.state;
        const sendingObj = {img};
        store.dispatch({
            type: UPDATE_STEP2,
            payload: sendingObj
        });
    }

    render(){
        return (
            <div>
                WizardStepTwo
                Image URL: 
                <input onChange={(e)=>{this.handleInputChange(e, 'img')}} value={this.state.img}/>
                <Link to='/wizard/step1' ><button onClick={()=>{this.saveChange()}}>Previous Step</button></Link>
                <Link to='/wizard/step3' ><button onClick={()=>{this.saveChange()}}>Next Step</button></Link>
            </div>
        )
    }
}
export default WizardStepTwo;