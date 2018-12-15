import React, { Component } from 'react';
import tours from '../Json/tours.json';

export default class Tours extends Component {
    render() {
        return (
            <React.Fragment>
        {
            
            tours.map(it =>(
            
                <div className="list-item" key={it.id}>
                    <div className="img">
                        <img src="img/ar.png" alt="" />
                    </div>
                    <div className="text">
                        {it.name}
                    </div>
                    <div className="days">
                        {it.duration} days
                    </div>
                    <div className="more">
                        more details
                    </div> 
                </div>           
    
            ))
        }
            </React.Fragment>
    )  
    } 
}    