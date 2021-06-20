import DispatcherPractise from "../Dispatcher/DispatcherPractise";
import * as ActionTypes from '../Action/ActionTypes';
import { EventEmitter } from "events";

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First':0,
    'Second':10,
    'Third':30
}

const CounterStorePractise = Object.assign({},EventEmitter.prototype,{
    getCounterValues: function(){
        return counterValues;
    },
    emitChange: function() {
        this.emit(CHANGE_EVENT);
    },
    addChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    },
    removeChangeListener:function(callback){
        this.on(CHANGE_EVENT,callback);
    }
});

CounterStorePractise.dispatchToken = DispatcherPractise.register((action)=>{
    if(action.type == ActionTypes.INCREMENT){
        counterValues[action.caption] ++;
        CounterStorePractise.emitChange();
    }else if(action.type == ActionTypes.DECREMENT){
        counterValues[action.caption] --;
        CounterStorePractise.emitChange();
    }
});

export default CounterStorePractise;