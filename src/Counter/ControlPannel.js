import React,{Component} from 'react';
import BaseCounter from './BaseCounter';
class ControlPannel extends Component{
    constructor(props){
        super(props);
        this.initVal = [20,10,20,-5];
        const initSum = this.initVal.reduce((a,b)=>a+b,0)
        this.state = {
            sum: initSum
        }
        this.updateTotalSum = this.updateTotalSum.bind(this);
        this.alertUpdate = this.alertUpdate.bind(this);
    }
    updateTotalSum(preValue,newValue){
        const valueChange = newValue - preValue;
        this.setState({
            sum:this.state.sum + valueChange
        });
    }
    alertUpdate(type,valueChange){
        console.log("executing value update:" + type);
        console.log("value change:"+valueChange);
        console.log("---------------------------");
    }
    render(){
        return(
            <div>
            <BaseCounter caption="First" onValueUpdate={this.updateTotalSum} alertValueUpdate = {this.alertUpdate}/>
            <BaseCounter caption="Second" initVal={10} onValueUpdate={this.updateTotalSum} alertValueUpdate = {this.alertUpdate}/>
            <BaseCounter caption="Third" initVal={20} onValueUpdate={this.updateTotalSum} alertValueUpdate = {this.alertUpdate}/>
            <BaseCounter caption="Forth" initVal={-5} onValueUpdate={this.updateTotalSum} alertValueUpdate = {this.alertUpdate}/>
            <hr/>
            <span>Total sum:{this.state.sum}</span>
            </div>

        );
    }
} 
export default ControlPannel;