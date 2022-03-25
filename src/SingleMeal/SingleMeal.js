import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'


const SingleMeal = ({ meal, handleCart }) => {
    const [isRead, setIsRead] = useState(true)
    const { idMeal, strCategory, strMeal, strInstructions, strMealThumb } = meal;

    return (
        <div className="col-md-4">
            <div className='card'>
                <div className='card-body'>
                    <img className='img-fluid' src={strMealThumb} alt={idMeal} />
                    <span>{strMeal}</span>
                    <h4>Category:{strCategory}</h4>
                    <p className='text-muted'>{isRead ? <span>{strInstructions.slice(0, 100)}<p onClick={() => setIsRead(false)} className='text-info'>read-more</p></span> : <span>{strInstructions} <p className='text-warning' onClick={() => setIsRead(true)}>read-less</p> </span>}</p>

                    <button onClick={() => handleCart(strMeal)} className='btn btn-success'> <FontAwesomeIcon icon={faPlus} />
                    </button>
                </div>

            </div>

        </div>
    );
};

export default SingleMeal;