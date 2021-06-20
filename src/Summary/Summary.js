import React,{Component} from 'react';
import CounterStore from '../Store/CounterStore';
import SummaryStore from '../Store/SummaryStore';
class Summary extends Component{
    constructor(props){
        super(props);
        let initSum = 0;
        Object.keys(CounterStore.getCounterValue()).map(key=>initSum +=CounterStore.getCounterValue()[key]);
        this.state = {
            sum: initSum
        }
        this.onUpdate = this.onUpdate.bind(this);
    }
    componentDidMount(){
        SummaryStore.addChangeListener(this.onUpdate);
    }
    onUpdate(){
        this.setState(
            {sum:SummaryStore.getSummary()}
        );
    }
    render(){
        return(
            <div>
                <hr/>
                <span>Total:{this.state.sum}</span>
            </div>
        );
    }
}
export default Summary;