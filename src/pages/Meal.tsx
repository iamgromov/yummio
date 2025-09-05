import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import type { IMeal } from '../types/interfaces';
import { getMealById } from '../services/api';
import Preloader from '../components/Preloader/Preloader';

const Meal: React.FC = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState<IMeal[]>([]);

  useEffect(() => {
    if (id) {
      getMealById(id).then((data) => setMeal(data.meals));
    }
    // eslint-disable-next-line
  }, []);

  console.log(meal);

  return (
    <>
      {!meal.length ? (
        <Preloader />
      ) : (
        <div>
          <img
            src={meal[0].strMealThumb}
            alt=''
          />
          <h1>{meal[0].strMeal}</h1>
        </div>
      )}
    </>
  );
};

export default Meal;
