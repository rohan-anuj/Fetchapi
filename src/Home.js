import React, {useContext} from 'react';
import Card from "./Card";
import "./Home.css"
import {datacontext } from "./Fetch"






function Home() {
    const info=useContext(datacontext)

    // const [state, dispatch]=useReducer(reducer,initialstate)

    return (
        <div className="home">
        <h1>Our Users:-</h1>
        <div className="Card">      { info.map(info=><Card avatar={info.avatar} name={info.first_name} email={info.email} id={info.id} />)}
        </div>
        
            
        </div>
    )
}

export default Home
