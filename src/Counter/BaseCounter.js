import React,{Component} from 'react';
import PropTypes from 'prop-types';

class BaseCounter extends Component{
    //use default Props if parent component not passing any value
    static defaultProps = {
        initVal:20  
    }
    constructor(props){
        super(props);
        this.increaseCount = this.increaseCount.bind(this);
        this.decreaseCount = this.decreaseCount.bind(this);
        this.state = {
            count: props.initVal,   //default value as 20 if not retrieved from props
            warningTextStyleDecrease:"none",
            warningTextStyleIncrease:"none",
        }
    }
    increaseCount(){
        if(this.state.count<10){
            const prevValue = this.state.count;
            const newValue = this.state.count + 1;
            this.setState({
                count:newValue
            });
            
            this.props.onValueUpdate(prevValue,newValue);
            this.props.alertValueUpdate("Increase",1);
            
            //同步state 对象用于UI操作
            this.state.count = this.state.count + 1; 
            if(this.state.count >=0){ // count >=0
                this.setState({
                    warningTextStyleDecrease:"none",
                    warningTextStyleIncrease:"none"
                });
            }else{  //count less than 0
                this.setState({
                    warningTextStyleDecrease:"block",
                    warningTextStyleIncrease:"none"
                });
            }
        }else{
            this.setState({
                warningTextStyleDecrease:"none",
                warningTextStyleIncrease:"block"
            });
        }
    }
    decreaseCount(){
        if(this.state.count >0){
            const preValue = this.state.count;
            const newValue = this.state.count - 1;

            this.setState({
                count:newValue
            })
            this.props.onValueUpdate(preValue,newValue);
            this.props.alertValueUpdate("Decrease",1);
            //同步state对象，用作UI操作
            this.state.count = this.state.count -1;
            if(this.state.count <=10){ //count <= 10
                this.setState({
                    warningTextStyleDecrease:"none",
                    warningTextStyleIncrease:"none"
                });
            }else{  // count larger than 10
                this.setState({
                    warningTextStyleDecrease:"none",
                    warningTextStyleIncrease:"block"
                });
            }
        }else{  //count less than 0 already
            this.setState({
                warningTextStyleDecrease:"block",
                warningTextStyleIncrease:"none"
            });
        }
    }
    render(){
        const {caption} = this.props;
        return (
            <div>
                <span>Count of {caption} pannel:</span>
                <button onClick={this.increaseCount}>+</button>
                <span>{this.state.count}</span>
                <button onClick={this.decreaseCount}>-</button>
                <span style={{display:this.state.warningTextStyleDecrease,color:"red"}}>The count should be minimum as 0.</span>
                <span style={{display:this.state.warningTextStyleIncrease,color:"red"}}>The count should be maximum as 10.</span>
                </div>
        );
    }
}
BaseCounter.propTypes = {
    caption:PropTypes.string.isRequired,
    initVal:PropTypes.number,
    onValueUpdate:PropTypes.func,
    alertValueUpdate:PropTypes.func
}

export default BaseCounter;