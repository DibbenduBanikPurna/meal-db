import React, { useEffect, useState } from 'react';
import SingleMeal from '../SingleMeal/SingleMeal';

const Resturent = () => {

    const [meals, setMeals] = useState([])
    const [name, setName] = useState([])
    console.log(name)

    useEffect(() => {
        fetch("https://www.themealdb.com/api/json/v1/1/search.php?f=a")
            .then(res => res.json())
            .then(data => {

                setMeals(data.meals)
            })
    }, [])

    const handleCart = (mealName) => {
        console.log(mealName)
        let names = mealName;
        setName([...name, mealName])

    }

    return (
        <div className="container">
            <div className="row mt-5 pt-5">
                <div className='col-md-8'>
                    <div className='row'>
                        {

                            meals.map((meal) => {
                                return <SingleMeal handleCart={handleCart} key={meal.idMeal} meal={meal} />
                            })

                        }
                    </div>

                </div>
                <div style={{ borderLeft: '1px solid gray' }} className='col-md-4'>
                    <div className='m-5 p-5'>
                        <p>Item-Lists:</p>
                        {name.map((name) => {
                            return <p key={name}>{name}</p>
                        })}
                    </div>

                </div>
            </div>



        </div>
    );
};

export default Resturent;