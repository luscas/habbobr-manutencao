import fetch from 'isomorphic-unfetch';
import xmlToJson from './xmlToJson';

export function radioNewStatus(type, newText){
    switch (type) {
        case 'avatar':
            // document.setProperty('--avatar', `url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=${newText}&action=std&direction=2&head_direction=3&gesture=spk&size=b)`);
            document.querySelector('.radio-status-avatar').style.backgroundImage = `url(https://www.habbo.com.br/habbo-imaging/avatarimage?img_format=gif&user=${newText}&action=std&direction=2&head_direction=3&gesture=spk&size=b)`;
        break;

        case 'locutor':
            document.querySelector('.ver-locutor').textContent = newText;
        break;
        case 'programa':
            document.querySelector('.ver-programa').textContent = newText;
        break;
        case 'ouvintes':
            document.querySelector('.ver-ouvintes').textContent = newText;
        break;
    }
};

export function radioUpdate(action) {
    if (action == 'avatar' || action == 'all') {
        radioNewStatus('avatar', 'AutoDJ');
    } else {
        radioNewStatus(action, '...');
    }

    fetch('https://painel.audiovox.pw/api/Njc2OCsw').then(response => response.text()).then(str => (new window.DOMParser()).parseFromString(str, "text/xml")).then(data => {
        let status = xmlToJson(data).info;
        switch (action) {
            case 'all':
                radioNewStatus('avatar', status.titulo['#text']);
                radioNewStatus('locutor', status.titulo['#text']);
                radioNewStatus('programa', status.genero['#text']);
                radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
                break;
            case 'locutor':
                radioNewStatus('avatar', status.titulo['#text']);
                radioNewStatus('locutor', status.titulo['#text']);
                break;
            case 'programa':
                radioNewStatus('programa', status.genero['#text']);
                break;
            case 'ouvintes':
                radioNewStatus('ouvintes', status.ouvintes_conectados['#text']);
                break;
        }
    });
};