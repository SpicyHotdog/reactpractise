import React,{Component} from 'react';
import CounterPractise  from '../Counter/CounterPractise';

class ControlPanelPractise extends Component{
    render(){
        return(
            <div>
                <CounterPractise caption='First'/>
                <CounterPractise caption='Second'/>
                <CounterPractise caption='Third'/>
            </div>
        );
    }
}
export default ControlPanelPractise;