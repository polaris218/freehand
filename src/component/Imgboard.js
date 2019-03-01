import React, { Component } from 'react';
import boardimage from '../resource/zac-ong-394558-unsplash.png';

class Imgboard extends Component {
    render() { 
        return ( 
            <div className="row">
                <img src={boardimage} alt="Image" />
            </div>
         );
    }
}
 
export default Imgboard;