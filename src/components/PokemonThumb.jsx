import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom';
import PokemonDetails from './PokemonDetails';


const PokemonThumb = ({image, name, type, weight, height}) => {

    const[isExpanded, setIsExpanded] = useState(false)
    const navigate = useNavigate()
    const style = type + " thumb-container";
    return (
        <div onMouseOver={() => setIsExpanded(true)} onMouseLeave={() => setIsExpanded(false)} onClick={() => navigate(`/video/${name}_pokemon`)}>
            <div className={style}>
                <img src={image} alt={name} />
                <div className="detail-wrapper">
                    <h3>{name}</h3>
                    <small>Type: {type}</small>
                </div>
                {isExpanded ? <PokemonDetails
                    height={height}
                    weight={weight}
                    isExpanded={isExpanded}
                /> : null}
            </div>
        </div>
    )
}

export default PokemonThumb