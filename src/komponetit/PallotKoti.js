import React from "react"

import Punainen from "./pallot/Punainen"
import Keltainen from "./pallot/Keltainen"
import Vihrea from "./pallot/Vihrea"
import Ruskea from "./pallot/Ruskea"
import Sininen from "./pallot/Sininen"
import Pinkki from "./pallot/Pinkki"
import Musta from "./pallot/Musta"

export default class PallotKoti extends React.Component{

    render(){
        return(
            <div className = "pelaaja1">
                <Punainen id="PPallo" className="btn" PPallo={this.props.PPallo.bind(this)}/>
                <Keltainen id="Kelt" className="btn" Kelt={this.props.Kelt.bind(this)}/>
                <Vihrea id="Vihr" className="btn" Vihr={this.props.Vihr.bind(this)}/>
                <Ruskea id="Rusk" className="btn" Rusk={this.props.Rusk.bind(this)}/>
                <Sininen id="Sini" className="btn" Sini={this.props.Sini.bind(this)}/>
                <Pinkki id="Vaal" className="btn" Vaal={this.props.Vaal.bind(this)}/>
                <Musta id="Must" className="btn" Must={this.props.Must.bind(this)}/>
            </div>
        )
    }
}