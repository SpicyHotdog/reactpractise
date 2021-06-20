import React from 'react';
import styles from './Button.module.css'

const counter = (state = {value:0},action)=>{
    switch(action.type){
        case 'INCREASEMENT':
            return {value:state.value+1};
        case 'DECREASEMENT':
            return {value:state.value-1};
        case 'RESET':
            return {value:0};
        default:
            return state;
    }
}
class Button extends React.Component{
    state = counter(undefined,{});
    dispatch(action){
        this.setState(prevState=>counter(prevState,action));
    }
    //Increasement
    increasement = ()=>{
        this.dispatch({type:'INCREASEMENT'});
    }
    //Decreasement
    decreasement = ()=>{
        this.dispatch({type:'DECREASEMENT'});
    }
    //Reset
    reset = ()=>{
        this.dispatch({type:'RESET'});
    }
    componentDidMount(){
        //console.log(this.props.computedMatch.params);
    }
    render(){
        return(
            <div>
                {this.state.value}
                <div className={styles.button} role='button' onClick={this.increasement}>Increase</div>
                <div className={styles.button} role='button' onClick={this.decreasement}>Decrease</div>
                <div className={styles.button} role='button' onClick={this.reset}>Reset</div>
                <div><a href="#/app">Return</a></div>
                <div><button onClick={()=>this.props.history.push('app')}>通过函数跳转</button></div>
            </div>
        )
    }
}
export default Button;