import 'bootstrap'
import './styles/styles.scss'
import videojs from 'video.js'
import tram from './medias/tram.mp4';

videojs( 'tramVideo',
    {
        controls: true
    } ).ready( () => {
        let vPlayer = this;
        vPlayer.src( tram );
    } );