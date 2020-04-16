import { Component } from 'react';
import ReactHowler from 'react-howler'
import ReactTooltip from "react-tooltip";
import ReactSlider from 'react-slider';
import xmlToJson from '../helpers/xmlToJson';

class Index extends Component {
    constructor(props) {
        super(props);

        this.state = {
            stream: "https://player.audiovox.pw/proxy/6768/;",
            status: 'stop',
            format: ['mp3', 'acc'],
            volume: 100,
            locutor: null,
            programa: null,
            ouvintes: 0,
            equipe: [
                {
                    habbo: 'Colecction',
                    cargo: 'Web Master'
                },
                {
                    habbo: ',Abobado',
                    cargo: 'Web Master'
                },
                {
                    habbo: 'Sven',
                    cargo: 'Web Master'
                },
                {
                    habbo: 'Renato_Moura',
                    cargo: 'Administrador de Conteúdo'
                },
                {
                    habbo: '.:Root:.',
                    cargo: 'Jornalista'
                },
                {
                    habbo: 'CaioXzZ',
                    cargo: 'Locutor'
                },
                {
                    habbo: 'Frats',
                    cargo: 'Locutor'
                }
            ]
        }
    }

    radioNewStatus(type, newText){
        switch (type) {
            case 'locutor':
                this.setState({ locutor: newText });
                break;
            case 'programa':
                this.setState({ programa: newText });
                break;
            case 'ouvintes':
                this.setState({ ouvintes: newText });
                break;
        }
    }

    radioUpdate(action) {
        this.radioNewStatus(action, null);
    
        fetch('https://painel.audiovox.pw/api/Njc2OCsw').then(response => response.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
            let status = xmlToJson(data).info;
            switch (action) {
                case 'all':
                    this.radioNewStatus('locutor', status.titulo['#text']);
                    this.radioNewStatus('programa', status.genero['#text']);
                    this.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
                    break;
                case 'locutor':
                    this.radioNewStatus('locutor', status.titulo['#text']);
                    break;
                case 'programa':
                    this.radioNewStatus('programa', status.genero['#text']);
                    break;
                case 'ouvintes':
                    this.radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
                    break;
            }
        });
    }

    componentDidMount() {
        this.radioUpdate('all');
    }

    setSlider(value) {
        if(value > 0) {
            this.sound.volume(parseFloat(value));
        }
    }

    toggle() {
        if(window.Howler._muted == true) {
            window.Howler.mute(false);
            this.setState({ status: 'stop' });
        } else {
            window.Howler.mute(true);
            this.setState({ status: 'play' });
        }
    }

    render() {
        let { stream, format, status, volume } = this.state;

        return (
            <>
                <ReactTooltip
                    backgroundColor="#000"
                />
                <ReactHowler
                    src={stream}
                    autoplay={true}
                    volume={1.0}
                    html5={true}
                    format={format}
                    ref={(ref) => (this.sound = ref)}
                />

                <input type="checkbox" id="close"/>
                <div className="backdrop">
                    <div className="content">
                        <div className="panel">
                            <div className="header">
                                <h1>Equipe</h1>

                                <label htmlFor="close">❌</label>
                            </div>
                            <div className="equipe">
                                {this.state.equipe.map((membro) => (
                                <div className="membro">
                                    <img
                                        data-tip={`${membro.habbo} - ${membro.cargo}`}
                                        width={33}
                                        height={56}
                                        src={`https://www.habbo.com.br/habbo-imaging/avatarimage?hb=image&user=${membro.habbo}&headonly=0&direction=2&head_direction=2&action=&gesture=&size=s`}
                                        alt={`Habbo ${membro.habbo}`}
                                    />
                                    <div className="habbo">{membro.habbo}</div>
                                </div>))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className="background"></div>
                <div className="radial"></div>

                <div className="player">
                    <div className="radio-status">
                        <div
                            className="radio-status-avatar"
                            style={{
                                backgroundImage: `url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=${this.state.locutor == null ? 'Colecction' : this.state.locutor}&direction=2&head_direction=2&gesture=sml&size=b)`
                            }}
                        />
                        <div className="radio-status-data" onClick={() => this.radioUpdate('locutor')}>
                            {this.state.locutor == null ? (<img src="img/loading.gif" alt="" />) : this.state.locutor}
                        </div>
                        <div className="radio-status-data" onClick={() => this.radioUpdate('programa')}>
                            {this.state.programa == null ? (<img src="img/loading.gif" alt="" />) : this.state.programa}
                        </div>
                    </div>

                    <ReactSlider
                        className="radio-slider"
                        trackClassName="radio-slider-control"
                        onChange={(value) => this.setSlider(value / 100)}
                        min={0}
                        defaultValue={volume}
                    />

                    <div className="radio-status-data-listeners" onClick={() => this.radioUpdate('ouvintes')}>
                        {!this.state.ouvintes ? (<img src="img/loading.gif" alt="" />) : this.state.ouvintes}
                        <div className="radio-status-data-listeners-text">ouvintes</div>
                    </div>
                </div>

                <div className="center">
                    <div className="logo">
                        <div className="vacancies" onClick={() => alert('vagas@habbobr.org')}>Vagas</div>
                        <div className={`control ${status}`} onClick={() => this.toggle() }></div>
                        <label htmlFor="close" className="team">Equipe</label>
                    </div>
                </div>
            </>
        );
    }
}

// Index.getInitialProps = async function() {
//     const res  = await fetch('http://serv3.audiovox.pw:6768/stats?sid=1&json=1');
//     const data = await res.json();
  
//     return {
//         radio: data
//     };
// };

export default Index;