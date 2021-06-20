import React,{Component} from 'react';
import * as Action from '../Action/Action.js';
import CounterStore from '../Stores/CounterStore.js';
class Counter_Flux extends Component{
    constructor(props){
        super(props);
        this.increaseValue = this.increaseValue.bind(this);
        this.decreaseValue = this.decreaseValue.bind(this);
        this.state = {
            count:CounterStore.getCounterValues()[this.props.caption]
        }

        this.onChange = this.onChange.bind(this);
    }
    componentDidMount(){
        CounterStore.addChangeListener(this.onChange);
    }
    onChange(){
       const newCount = CounterStore.getCounterValues()[this.props.caption];
       this.setState({
           count: newCount
       }) 
    }
    increaseValue(){
        Action.increment(this.props.caption);
    }
    decreaseValue(){
        Action.decrement(this.props.caption);
    }
    render(){
        const {caption} = this.props;
        return(
            <div>
                <button onClick={this.increaseValue}>+</button>
                <button onClick={this.decreaseValue}>-</button>
                <span>{caption} count:{this.state.count}</span>
            </div>
        );
    }
}
export default Counter_Flux;