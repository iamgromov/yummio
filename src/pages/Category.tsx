import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { getFilteredCategory } from '../services/api';
import type { IMeals } from '../types/interfaces';
import Preloader from '../components/Preloader/Preloader';
import MealsList from '../components/MealsList/MealsList';

const Category: React.FC = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState<IMeals[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    if (name) {
      getFilteredCategory(name).then((data) => setMeals(data.meals));
    }
  }, [name]);

  console.log(meals);

  return (
    <>
      <button
        className='btn'
        onClick={() => navigate(-1)}
      >
        BACK
      </button>
      {!meals.length ? <Preloader /> : <MealsList meals={meals} />}
    </>
  );
};

export default Category;
