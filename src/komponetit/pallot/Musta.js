import React from 'react'

export default class Musta extends React.Component {
    render() {
        return (
            <button id="Must" className="button musta" onClick={this.props.Must}></button>
        )
    }
}
