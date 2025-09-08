import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/api';
import type { ICategory } from '../types/interfaces';
import Search from '../components/Search/Search';
import Preloader from '../components/Preloader/Preloader';
import CategoriesList from '../components/CategoriesList/CategoriesList';
import { useLocation, useNavigate } from 'react-router-dom';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);
  const [filteredCategories, setFilteredCategories] = useState<ICategory[]>([]);
  const { pathname, search } = useLocation();
  const navigate = useNavigate();

  const handleSearch = (str: string) => {
    setFilteredCategories(
      categories.filter((el) =>
        el.strCategory.toLowerCase().includes(str.toLowerCase())
      )
    );

    navigate({
      pathname,
      search: `?search=${str}`,
    });
  };

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data.categories);
      setFilteredCategories(
        search
          ? data.categories.filter((el) =>
              el.strCategory
                .toLowerCase()
                .includes(search.split('=')[1].toLowerCase())
            )
          : data.categories
      );
    });
  }, [search]);

  return (
    <>
      <Search handleSearch={handleSearch} />
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoriesList categories={filteredCategories} />
      )}
    </>
  );
};

export default Home;
