
import { EventEmitter } from 'events';
import * as ActionType from '../ActionType/ActionTypes';
import CounterStore from './CounterStore';
import CounterDispatcher from '../Dispatcher/CounterDispatcher';

const EVENT_CHANGE = 'changed';

const SummaryStore = Object.assign({},EventEmitter.prototype,{
    addChangeListener: function(callback){
        this.on(EVENT_CHANGE,callback)
    },
    emitChange:function(){
        this.emit(EVENT_CHANGE);
    },
    remoteChangeListener: function(callback){
        this.removeListener(EVENT_CHANGE,callback);
    },
    getSummary: function(){
        let sum = 0;
        Object.keys(CounterStore.getCounterValue()).map(key=>sum +=CounterStore.getCounterValue()[key]);
        return sum;
    }
});

SummaryStore.dispatchToken = CounterDispatcher.register((action)=>{
    if(action.type == ActionType.INCREMENT || action.type == ActionType.DECREMENT){
        CounterDispatcher.waitFor([CounterStore.dispatchToken]);
        SummaryStore.emitChange();
    }
});
export default SummaryStore;