import React from "react"
import Slider from "react-rangeslider"
import 'react-rangeslider/lib/index.css'


// vapaapalloikkunan tyylit
const backdropStyle = {
    position: 'fixed',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    backgroundClose: 'rgba(0,0,0,0.3)',
    padding: 50 
}

const modalStyle = {
    backgroundColor: '#fff',
    borderRadius: 5,
    maxWidth: 500,
    minHeight: 300,
    margin: '0 auto',
    padding: 30,
    position: 'relative'
}

const footerStyle = {
    position: 'absolute',
    bottom: 20,

}

export default class VapaaPallo extends React.Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
          virhepiste: 4,
          vapaapallo: 1,
          color: "punainen"
        }
    }
    onClose = (e) => {
        this.props.onClose && this.props.onClose(e);
    }
    childFunction=(e) => { 
        e.preventDefault();
        this.props.functionCallVirhepiste(this.state.virhepiste);
        this.props.functionCallVapaapallo(this.state.vapaapallo);
    }
      handleOnChangeVirhepiste = (value) => {
        this.setState({
          virhepiste: value,
        })
      }
      handleOnChangeVapaapallo = (value) => {
        this.setState({
          vapaapallo: value,
        })
        switch (this.state.vapaapallo) {
            case 1:
                this.setState({ color: "punainen" })
                break;
            case 2:
                this.setState({ color: "keltainen" })
                break;
            case 3:
                this.setState({ color: "vihrea" })
                break;
            case 4:
                this.setState({ color: "ruskea" })
                break;
            case 5:
                this.setState({ color: "sininen" })
                break;
            case 6:
                this.setState({ color: "pinkki" })
                break;
            case 7:
                this.setState({ color: "musta" })
                break;
            default:
                this.setState({ color: "default" })
          }
      }
    render() {
        if (!this.props.show) {
            return null;
        }
        const { virhepiste, vapaapallo, color } = this.state
        return (
            <div style={backdropStyle}>    
                <div style={modalStyle}>
                    {this.props.children}
                    <div className='slider orientation-reversed'>
                        <div className='slider-group'>
                        <div className='slider-virhepiste'>
                            <Slider
                                min={4}
                                max={7}
                                value={virhepiste}
                                orientation="horizontal"
                                onChange={this.handleOnChangeVirhepiste}
                            />
                            <div className='value'>Virhepiste: {virhepiste}</div>
                        </div>
                        <div className='slider-vapaapallo'>
                            <Slider
                            min={1}
                            max={7}
                            value={vapaapallo}
                            orientation='horizontal'
                            onChange={this.handleOnChangeVapaapallo}
                            />
                            <div className='value'>Vapaapallo: {color}</div>
                        </div>
                        </div>
                    </div>
                    
                    <div style={footerStyle}>
                        <button className="peruutusButton" onClick = {(e) => { this.onClose(e) }}> 
                            Sulje
                        </button>
                        <button className="syötäButton" onClick = {this.childFunction.bind(this)}> 
                            Syötä
                        </button>                        
                    </div>
                </div>
            </div>
        )
    }
}
