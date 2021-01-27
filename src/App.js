import logo from './logo.svg';
import './App.css';

import Counter from "./counter-component/counter";
import Counter1 from "./counter-component/counter1";

function App() {
    var fct = function(input) {
        debugger;
    }
    
    return (
        <div className="App" >

            <div>

                <Counter fct = {fct}></Counter>
            </div>
            <div>

                <Counter1 count={0}></Counter1>
            </div>

        </div>
    );
}


export default App;