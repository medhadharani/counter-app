import React, { Component } from 'react';

class Counter extends Component {
    // state = {
    //     value: this.props.counter.value
    //     // tags: ['tag1', 'tag2', 'tag3']
    // };

    // renderTags(){//conditionally rendering using if
    //     if(this.state.tags.length === 0) return <p>There is no tags</p>;
    //     return <ul>{this.state.tags.map(tag => <li key = {tag}>{tag}</li>)}</ul>;
    // }

    // handleIncrement = product => {//create a event to handle event
    //     console.log("Increment Clicked", this);
    //     console.log(product);//passing event arguments
    //     this.setState({value: this.state.value + 1}); //change the state of count
    // }

    render() {
        const product = {id: '', name: ''};//passing event arguments
        return (
            <div>
                <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
                <button onClick={() => this.props.onIncrement(this.props.counter)}//passing event arguments
                 className='btn btn-secondary btn-sm m-2'>Increment</button>
                 <button onClick={() => this.props.onDelete(this.props.counter.id)}
                  className='btn btn-danger btn-sm'>Delete</button>
                {/* {this.state.tags.length === 0 && "Please create new tags"}
                {this.renderTags()} */}
            </div>
        )
    }

    getBadgeClasses() { // create method to add bootstrap for formatCount, Here first initiate a variable and assign the common part of classname for that.
        let classes = 'badge m-2 text-bg-';
        classes += this.props.counter.value === 0 ? 'warning' : 'primary';
        return classes;
    }

    formatCount(){ //create a method to print count as zero for 0 and otherwise numbers.
        const {value: count} = this.props.counter;
        return count === 0 ? 'Zero' : count;
    }
}
 
export default Counter;