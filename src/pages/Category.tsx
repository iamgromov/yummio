import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getFilteredCategory } from '../services/api';
import type { IMeals } from '../types/interfaces';
import Preloader from '../components/Preloader/Preloader';
import MealsList from '../components/MealsList/MealsList';

const Category: React.FC = () => {
  const { name } = useParams();
  const [meals, setMeals] = useState<IMeals[]>([]);

  useEffect(() => {
    if (name) {
      getFilteredCategory(name).then((data) => setMeals(data.meals));
    }
  }, [name]);

  console.log(meals);

  return <>{!meals.length ? <Preloader /> : <MealsList meals={meals} />}</>;
};

export default Category;
