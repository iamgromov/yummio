import type { ICategoriesListProps } from '../../types/interfaces';
import CategoryItem from '../CategoryItem/CategoryItem';

const CategoriesList: React.FC<ICategoriesListProps> = ({
  categories = [],
}) => {
  return (
    <div className='list'>
      {categories.map((category) => {
        return (
          <CategoryItem
            key={category.idCategory}
            {...category}
          />
        );
      })}
    </div>
  );
};

export default CategoriesList;
