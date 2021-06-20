import * as ActionTypes from '../ActionType/ActionTypes';
import { EventEmitter } from 'events';
import CounterDispatcher from '../Dispatcher/CounterDispatcher';
import { emit } from 'process';
const counterValues = {
    'First':0,
    'Second':10,
    'Third':20
};
let total = 0;
const CHANGE_EVENT="changed";

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValue: function(){
        return counterValues;
    },
    emitChange:function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener: function(callback){
        this.removeListener(CHANGE_EVENT,callback);
    }
});

//dispatcherToken belongs to a specific Store
CounterStore.dispatchToken = CounterDispatcher.register((action)=>{
    if(action.type == ActionTypes.INCREMENT){
        counterValues[action.caption] ++;
    }else if(action.type == ActionTypes.DECREMENT){
        counterValues[action.caption] --;
    }
    //count summary
    total = 0;
    Object.keys(counterValues).map(key=>total += counterValues[key]);
    CounterStore.emitChange();
});

export default CounterStore;