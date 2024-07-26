import React, { Component } from 'react';
import Counter from './counter';

class Counters extends Component {
    render() { 
        const {onReset, counters, onDelete, onIncrement} = this.props;
        return (<div>
            <button onClick= {onReset} 
            className='btn btn-primary btn-sm m-2'>Reset</button>
            {counters.map(counter => (
            <Counter 
            key={counter.id} 
            onDelete={this.props.onDelete} 
            onIncrement={this.props.onIncrement}
            // value={counter.value} 
            // id={counter.id}
            counter = {counter}//can initialize all the counter props usin this ex:this.props.counter.id
            >
                </Counter>
                ))}
        </div>);
    }
}
 
export default Counters;