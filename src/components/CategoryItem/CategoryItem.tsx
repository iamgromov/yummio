import type { ICategory } from '../../types/interfaces';
import { Link } from 'react-router-dom';

const CategoryItem: React.FC<ICategory> = ({
  idCategory,
  strCategory,
  strCategoryDescription,
  strCategoryThumb,
}) => {
  return (
    <div
      id={idCategory}
      className='item card cyan darken-3'
    >
      <div className='card-image'>
        <img
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = `https://placehold.jp/30/ff8c00/ffffff/300x300.png?text=${strCategory}`;
          }}
          alt={`${strCategory} poster`}
          src={strCategoryThumb}
        />
      </div>
      <div className='card-content white-text'>
        <div className='title-wrapper'>
          <span className='card-title'>{strCategory.toUpperCase()}</span>
        </div>
        <p className='card-description'>{strCategoryDescription}</p>
      </div>
      <div className='card-action'>
        <Link
          to={`/category/${strCategory}`}
          className='btn'
        >
          Open
        </Link>
      </div>
    </div>
  );
};

export default CategoryItem;
