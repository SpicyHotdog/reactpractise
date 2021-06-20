import * as ActionTypes from './ActionTypes';
import DispatcherPractise from '../Dispatcher/DispatcherPractise';

export const increment = (caption)=>{
    DispatcherPractise.dispatch({
        type: ActionTypes.INCREMENT,
        caption:caption
    });
};

export const decrement = (caption)=>{
    DispatcherPractise.dispatch({
        type:ActionTypes.DECREMENT,
        caption:caption
    });
};
