import React, { Component } from 'react';
import Logo from '../resource/1.png';
import avatar from '../resource/avatar.png';


/**
 * @see https://stackoverflow.com/questions/23116591/how-to-include-a-font-awesome-icon-in-reacts-render
 */
class Freehand extends Component {
    render() { 
        return ( 
            <div className="row">
                <div className="col-md-1"></div>
                <div className="col-md-4 my-5">
                    <img src={Logo} alt="logo"/>
                    <button
                        type="button"
                        className="btn-save-draft"
                    >
                        save draft
                    </button>
                </div>
                <div className="col-md-4 my-5 func-icons">
                    <button
                        type="button"
                        className="btn btn-light"
                    >
                    <i className="fa fa-location-arrow fa-flip-horizontal fa-2x"></i>
                    </button>
                    <button 
                        type="button"
                        className="btn btn-light ml-2 btn-icon"
                    >
                    <i className="fa fa-pencil fa-2x fa-inverse"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-light ml-2"
                    >
                    <i className="fa fa-text-width fa-2x"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-light ml-2"
                    >
                        <i className="fa fa-picture-o fa-2x"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-light ml-2"
                    >
                        <i className="fa fa-eraser fa-2x"></i>
                    </button>
                </div>
                <div className="col-md-3 my-5 function-icons">
                    <button
                        type="button"
                        className="btn btn-default"
                    >
                    <i className="fa fa-ellipsis-h fa-2x"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-default ml-2"
                    >
                    <i className="fa fa-play fa-2x"></i>
                    </button>
                    <button
                        type="button"
                        className="btn btn-default ml-2"
                    >
                        <img src={avatar} alt="avatar"/>
                    </button>
                    <button
                        type="button"
                        className="btn-default ml-2 btn-share"
                    >&nbsp;&nbsp;
                    <i className="fa fa-share" style={{color:'#f2f2f2'}}></i>
                        &nbsp;&nbsp;Share&nbsp;&nbsp;
                    </button>
                </div>
            </div>
         );
    }
}
 
export default Freehand;