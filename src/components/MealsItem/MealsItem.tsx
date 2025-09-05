import { Link } from 'react-router-dom';
import type { IMeals } from '../../types/interfaces';

const MealsItem: React.FC<IMeals> = ({ idMeal, strMeal, strMealThumb }) => {
  return (
    <div
      id={idMeal}
      className='item card cyan darken-3'
    >
      <div className='card-image'>
        <img
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.jp/30/ff8c00/ffffff/300x300.png?text=${strMeal}`;
          }}
          alt={`${strMeal} poster`}
          src={strMealThumb}
        />
      </div>
      <div className='card-content white-text'>
        <div className='title-wrapper'>
          <span className='card-title'>{strMeal.toUpperCase()}</span>
        </div>
      </div>
      <div className='card-action'>
        <Link
          to={`/meal/${idMeal}`}
          className='btn'
        >
          Open
        </Link>
      </div>
    </div>
  );
};

export default MealsItem;
