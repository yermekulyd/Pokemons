import React, { useState } from 'react'
import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import YouTubeAPI from './YouTubeAPI';

function PokemonVideo() {
    const {pokemon} = useParams()
    const [video, setSelectedVideo] = useState(null);
    const [src, setSrc] = useState()
    const OnTermSubmit = async term => {
        const responce = await YouTubeAPI.get('/search', {
            params: {
                q: term,
            },
        });
        console.log(responce.data.items[0].id.videoId)
        setSelectedVideo(responce.data.items[0]); 
        setSrc(responce.data.items[0].id.videoId) 
    };
    useEffect(() => {
        console.log(pokemon)
        OnTermSubmit(pokemon)
    }, [pokemon])

    if (!video) {
        return <div style={{marginTop: '15rem'}} class="ui massive active centered inline loader"></div>;
    }
    
    if(video) {
        return(
            <React.Fragment>
                <div>
                    <div className="ui embed">
                        <iframe title="video player" src={`https://www.youtube.com/embed/${src}`} />
                    </div>
                    <div className="ui segment">
                        <h4 className="header">{video.snippet.title}</h4>
                    </div>
                </div>
                
            </React.Fragment>
            
        );
    }
}

export default PokemonVideo