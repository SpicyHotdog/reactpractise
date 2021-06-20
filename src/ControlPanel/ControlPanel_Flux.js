import React,{Component} from 'react';
import Counter_Flux from '../Counter/Counter_Flux';
class ControlPannel_Flux extends Component{
    render(){
        return(
            <div>
                <Counter_Flux caption="First"/>
                <Counter_Flux caption="Second"/>
                <Counter_Flux caption="Third"/>
            </div>
        );
    }
}
export default ControlPannel_Flux;