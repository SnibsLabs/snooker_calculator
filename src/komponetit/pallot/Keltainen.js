import React from 'react'

export default class Keltainen extends React.Component {
    render() {
        return (
            <button id="Kelt" className="button keltainen" onClick={this.props.Kelt}></button>
        )
    }
}
