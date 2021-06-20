import CounterDispatcher from "../Dispatcher/CounterDispatcher";
import * as ActionTypes from '../ActionType/ActionTypes';

export const increse = (caption) =>{
    CounterDispatcher.dispatch({
        type:ActionTypes.INCREMENT,
        caption:caption
    });
};

export const decrese = (caption) =>{
    CounterDispatcher.dispatch({
        type:ActionTypes.DECREMENT,
        caption:caption
    });
};