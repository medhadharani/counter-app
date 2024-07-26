// import React, { Component } from 'react';
// import './App.css';
// import NavBar from './components/navbar';
// import Counters from './components/counters';


// function App() {
  
//     state = {
//       counters: [
//           {id: 1, value: 4},
//           {id: 2, value: 0},
//           {id: 3, value: 0},
//           {id: 4, value: 0}
//       ]
//     };

//   handleIncrement = counter => {
//       const counters = [...this.state.counters];// use spread operator to clone the counters array to new counters array
//       const index = counters.indexOf(counter);
//       counters [index] = {...counter};
//       counters[index].value++;
//       this.setState({counters});
//   };
  
//     handleReset = () => {
//       const counters = this.state.counters.map(c => {
//           c.value = 0;
//           return c;
//       });
//       this.setState({counters});
//   };

//     handleDelete = (counterId) => {
//       const counters = this.state.counters.filter(c => c.id !== counterId);
//       this.setState({counters});
//   }
//   return(
//     <React.Fragment>
//     <NavBar/>
//     <main className='container'>
//       <Counters
//       counters = {this.state.counters}
//       onReset = {this.handleReset}
//       onIncrement = {this.handleIncrement}
//       onDelete = {this.handleDelete}
//       />
//     </main>
//     </React.Fragment>
//   );
// }

// export default App;

import React, { useState, useCallback } from 'react';
import './App.css';
import NavBar from './components/navbar';
import Counters from './components/counters';

function App() {
    const [counters, setCounters] = useState([
        { id: 1, value: 0 },
        { id: 2, value: 0 },
        { id: 3, value: 0 },
        { id: 4, value: 0 }
    ]);

    const handleIncrement = useCallback((counter) => {
        const newCounters = [...counters];
        const index = newCounters.indexOf(counter);
        newCounters[index] = { ...counter };
        newCounters[index].value++;
        setCounters(newCounters);
    }, [counters]);

    const handleReset = useCallback(() => {
        const newCounters = counters.map(c => {
            c.value = 0;
            return c;
        });
        setCounters(newCounters);
    }, [counters]);

    const handleDelete = useCallback((counterId) => {
        const newCounters = counters.filter(c => c.id !== counterId);
        setCounters(newCounters);
    }, [counters]);

    return (
        <React.Fragment> 
            <NavBar
            totalCounters = {counters.filter(c => c.value > 0).length}
            />
            <main className='container'>
                <Counters
                    counters={counters}
                    onReset={handleReset}
                    onIncrement={handleIncrement}
                    onDelete={handleDelete}
                />
            </main>
        </React.Fragment>//use this react fragment because we call both navbar and counters files simultaneously
    );
}

export default App;

