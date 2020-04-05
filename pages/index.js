import { useState, useEffect } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import ReactSlider from 'react-slider';
import fetch from 'isomorphic-unfetch';

let toggle = () => {
    let audio = document.querySelector('.react-audio-player');
    
    if(audio.volume == 0) {
        audio.volume = 1;
    } else {
        audio.volume = 0;
    }
}

const Index = props => {
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
                    onChange={(value) => document.querySelector('.react-audio-player').volume = (value / 100)}
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
                    <div className="control play" onClick={() => toggle() }></div>
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