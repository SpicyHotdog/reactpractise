import React,{Component} from 'react';
import * as CounterAction from '../Action/CounterAction';
import CounterStore from '../Store/CounterStore';

const buttonStyle = {
    margin:"10px"
};

const display = {
    display:"block"
}

class Counter extends Component{
    constructor(props){
        super(props);
        this.increaseAction = this.increaseAction.bind(this);
        this.decreaseAction = this.decreaseAction.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            count: CounterStore.getCounterValue()[this.props.caption],
            increaseError: {display:"none"},
            decreaseError: {display:"none"},
        }
        
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    componentWillUnmount(){
        CounterStore.removeChangeListener(this.onChange);
    }
    increaseAction(){
        if(this.state.count < 10){
            CounterAction.increse(this.props.caption);
            this.setState({
                decreaseError:{display:"none"}
            });
        }else{
            this.setState({
                increaseError:{display:"block",color:"red"}
            });
        }  
    }
    decreaseAction(){
        if(this.state.count > 0){
            CounterAction.decrese(this.props.caption);
            this.setState({
                increaseError:{display:"none"}
            });
        }else{
            this.setState({
                decreaseError:{display:"block",color:"red"}
            });
        }   
    }

    onChange(){
        //update state counter
        const newCount = CounterStore.getCounterValue()[this.props.caption];
        this.setState({
            count:newCount
        });
    }

    render(){
        const caption = this.props.caption;
        return(
            <div>
                <button style={buttonStyle} onClick={this.increaseAction}>+</button>
                <button style={buttonStyle} onClick={this.decreaseAction}>-</button>
                <span>{caption}: {this.state.count}</span>
                <span style={this.state.increaseError}> Already reach maximum number 10, cannot increase.</span>
                <span style={this.state.decreaseError}> Already reach minimum number 0, cannot decrease.</span>
            </div>
        );
    }
}
export default Counter;