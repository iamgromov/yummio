import type { IMealsListProps } from '../../types/interfaces';
import MealsItem from '../MealsItem/MealsItem';

const MealsList: React.FC<IMealsListProps> = ({ meals = [] }) => {
  return (
    <>
      <div className='list'>
        {meals.map((meal) => {
          return (
            <MealsItem
              key={meal.idMeal}
              {...meal}
            />
          );
        })}
      </div>
    </>
  );
};

export default MealsList;
