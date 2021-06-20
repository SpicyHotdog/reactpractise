import React,{Component} from 'react';
import Counter from '../Counter/Counter';
import Summary from '../Summary/Summary';

class ControlPannel extends Component{
    constructor(props){
        super(props);
        this.state = {
            sum:30
        }
    }

    render(){
        return(
            <div>
                <Counter caption='First' />
                <Counter caption='Second' />
                <Counter caption='Third' />
                <Summary/>
            </div>
        );
    }
}

export default ControlPannel;

