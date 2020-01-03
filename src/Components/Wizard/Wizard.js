import React, { Component } from 'react';
import { Link, Route, Switch } from 'react-router-dom';

import './Wizard.css';
import WizardStepOne from './WizardStepOne/WizardStepOne';
import WizardStepTwo from './WizardStepTwo/WizardStepTwo';
import WizardStepThree from './WizardStepThree/WizardStepThree';
import  store ,{INIT_STATE}from '../../store'


class Wizard extends Component {
    constructor() {
        super();

    }

    deleteChange(){
        store.dispatch({
            type: INIT_STATE,
        });
    }

    render() {
        return (
            <div>
                Wizard
                <Switch>
                    <Route component={WizardStepOne} path='/wizard/step1' />
                    <Route component={WizardStepTwo} path='/wizard/step2' />
                    <Route component={WizardStepThree} path='/wizard/step3' />
                </Switch>
                <Link to='/'><button onClick={()=>{this.deleteChange()}}>Cancel</button></Link>
            </div>
        )
    }
}
export default Wizard;