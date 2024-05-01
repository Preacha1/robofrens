import React, { Component } from "react";
import Cardlist from "../components/Cardlist";
import SearchBox from "../components/SearchBox";
import './App.css';
import Scroll from '../components/scroll';

class App extends Component {
    constructor(){
        super()
        this.state = {
            robots: [],
            searchfield: ''
        }
    }

componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response=>{
        return response.json();
})
    .then( users => {
        this.setState({robots: users})
    });
}
    

onSearchChange=(event) =>{
        this.setState({searchfield: event.target.value});     
    }


    render(){
        const {robots, searchfield}=this.state;
        const filterRobots = robots.filter(robot => {
        return robot.name.toLowerCase().includes(searchfield.toLowerCase());
        })

       return !robots.length? 
            <h1>Loading</h1>:

            <div className="tc">
                <h1 className="f2">ROBOFRENS</h1>
                <SearchBox searchChange={this.onSearchChange}/>
                <Scroll>
                    <Cardlist robots={filterRobots}/>
                </Scroll>
            </div>
    }
    
}

export default App;