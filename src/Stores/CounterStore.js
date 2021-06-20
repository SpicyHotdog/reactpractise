import AppDispatcher from '../Dispatcher/AppDispatcher.js';
import * as Action from '../Action/Action.js';
import {EventEmitter} from 'events';
import * as ActionTypes from '../Action/ActionTypes.js';

const CHANGE_EVENT = 'changed';

const counterValues = {
    'First':0,
    'Second': 10,
    'Third':30
}

const CounterStore = Object.assign({},EventEmitter.prototype,{
    getCounterValues: function(){
        return counterValues;
    },
    emitChange: function(){
        this.emit(CHANGE_EVENT);
    },
    addChangeListener: function(callback) {
        this.on(CHANGE_EVENT, callback);
    }
})

CounterStore.dispatchToken = AppDispatcher.register((action)=>{
    if(action.type == ActionTypes.INCREMENT){
        counterValues[action.counterCaption]++;
        CounterStore.emitChange();
    }else if(action.type == ActionTypes.DECREMENT){
        counterValues[action.counterCaption]--;
        CounterStore.emitChange();
    }
});
export default CounterStore;
