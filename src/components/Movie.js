import {useEffect, useState} from "react";
import {Rating} from "./Rating";

export const Movie = ({title, image, synopsis, duration, genres, rating}) => {

    const [showDescription, setShowDescription] = useState(false);
    const [showFullSynopsis, setShowFullSynopsis] = useState(false);
    const synopsisMaxLength = 400;

    return (
        <div
            onMouseEnter={() => setTimeout(() => setShowDescription(true), 300)}
            onMouseLeave={() => setTimeout(() => {
                setShowDescription(false);
                setShowFullSynopsis(false);
            }, 300)}
        >
            <div className={showDescription ? 'card card-back' : 'card card-front'}>
                {showDescription ?
                    <div className='movie-description'>
                        <h3>{title}</h3>
                        <Rating rating={rating}/>
                        <p><b>Duration:</b> {duration}</p>
                        <p><b>Genres:</b> {genres}</p>
                        <div className='synopsis-container'>
                            {synopsis.length > synopsisMaxLength ?
                                <p>
                                    {showFullSynopsis ? synopsis : synopsis.slice(0, synopsisMaxLength) + '...'}
                                    {showFullSynopsis ?
                                        <span onClick={() => setShowFullSynopsis(false)}>
                                    <b>-</b>
                                </span> :
                                        <span onClick={() => setShowFullSynopsis(true)}>
                                    <b> +</b>
                                </span>
                                    }
                                </p> :
                                <p>{synopsis}</p>
                            }
                        </div>

                    </div> :
                    <div>
                        <img src={image} className='movie-poster' alt={title}/>
                    </div>
                }
            </div>
        </div>

    );
}