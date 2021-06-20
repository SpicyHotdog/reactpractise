import React from 'react';
import style from './Title.module.css'

class Title extends React.Component{
    render(){
        return(
        <div className={style.wrapper}>
            <h1 className={style.title}>hello react</h1>
        </div>
        )
    }
}
export default Title;