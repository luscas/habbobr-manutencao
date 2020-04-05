import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactSlider from 'react-slider';
import fetch from 'isomorphic-unfetch';

const Index = props => {
    let [status, setStatus] = useState('stop');

    function setSlider(value) {
        if(value > 0) {
            setStatus('stop');
        } else {
            setStatus('play');
        }

        if(value > 0) {
            document.querySelector('.react-audio-player').volume = parseFloat(value);
        }

        console.log(value);
    }

    function toggle() {
        let audio = document.querySelector('.react-audio-player');
        
        if(audio.volume <= 0) {
            audio.volume = 1;
            audio.muted = false;
            setStatus('stop');
        } else {
            audio.volume = 0.0;
            audio.muted = true;
            setStatus('play');
        }
    }

    return (
        <>
            <ReactAudioPlayer
                src="https://player.audiovox.pw/proxy/6768/;type=mp3"
                autoPlay
                controls
                listenInterval={"1000"}
            />

            <div className="background"></div>
            <div className="radial"></div>

            <div className="player">
                <div className="radio-status">
                    <div className="radio-status-avatar" style={{ backgroundImage: `url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=${props.radio.servertitle}&direction=2&head_direction=2&gesture=sml&size=b)` }}></div>
                    <div className="radio-status-data">{props.radio.servertitle}</div>
                    <div className="radio-status-data">{props.radio.servergenre}</div>
                </div>

                {/* <RadioSlider /> */}
                <ReactSlider
                    className="radio-slider"
                    trackClassName="radio-slider-control"
                    onChange={(value) => setSlider(value / 100)}
                    min={0}
                    defaultValue={100}
                />

                <div className="radio-status-data-listeners">
                    {props.radio.currentlisteners}
                    <div className="radio-status-data-listeners-text">ouvintes</div>
                </div>
            </div>

            <div className="center">
                <div className="logo">
                    <div className="vacancies" onClick={() => alert('Not now!')}>Vagas</div>
                    <div className={`control ${status}`} onClick={() => toggle() }></div>
                    <div className="team" onClick={() => alert('Not now!')}>Equipe</div>
                </div>
            </div>
        </>
    );
}

Index.getInitialProps = async function() {
    const res  = await fetch('http://serv3.audiovox.pw:6768/stats?sid=1&json=1');
    const data = await res.json();
  
    return {
        radio: data
    };
};

export default Index;