import React,{Component} from 'react';
import Counter_Flux from './Counter_Flux';
import * as ActionPractise from '../Action/ActionPractise';
import CounterStorePractise from '../Stores/CounterStorePractise';
const buttonStyle = {
    margin: '10px'
}
class CounterPractise extends Component{
    constructor(props){
        super(props);
        this.clickIncreaseButton = this.clickIncreaseButton.bind(this);
        this.clickDecreaseButton = this.clickDecreaseButton.bind(this);
        this.onChange = this.onChange.bind(this);
        this.state = {
            count:CounterStorePractise.getCounterValues()[this.props.caption]
        }
    }

    componentWillUnmount(){
        CounterStorePractise.removeChangeListener(this.onChange);
    }
    componentDidMount(){
        CounterStorePractise.addChangeListener(this.onChange);
    }
    onChange(){
        const newCount = CounterStorePractise.getCounterValues()[this.props.caption];
        this.setState({
            count:newCount
        });
    }
    clickIncreaseButton(){
        ActionPractise.increment(this.props.caption);
    }
    clickDecreaseButton(){
        ActionPractise.decrement(this.props.caption);
    }
    render(){
        const {caption} = this.props;
        return(
            <div>
                <button style = {buttonStyle} onClick = {this.clickIncreaseButton}>+</button>
                <button tyle = {buttonStyle} onClick = {this.clickDecreaseButton}>-</button>
                <span>{caption}: {this.state.count}</span>
            </div>
        );
    }
}
export default CounterPractise;