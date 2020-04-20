import React from 'react'

export default class Punainen extends React.Component { // Punaisen pallon pisteytys

    render(){
        return (
              <button id="PPallo"className="button punainen" onClick={this.props.PPallo}></button>
        )
    }
}