import { useEffect, useState } from 'react';
import { getAllCategories } from '../services/api';
import type { ICategory } from '../types/interfaces';
import Preloader from '../components/Preloader/Preloader';
import CategoriesList from '../components/CategoriesList/CategoriesList';

const Home: React.FC = () => {
  const [categories, setCategories] = useState<ICategory[]>([]);

  useEffect(() => {
    getAllCategories().then((data) => setCategories(data.categories));
  }, []);

  console.log(categories)

  return (
    <>
      {!categories.length ? (
        <Preloader />
      ) : (
        <CategoriesList categories={categories} />
      )}
    </>
  );
};

export default Home;
