import { API_URL } from './config';
import type { ICategory, IMeal, IMeals } from '../types/interfaces';

const getMealById = async (mealId: string): Promise<{ meals: IMeal[]}> => {
  const response = await fetch(API_URL + 'lookup.php?i=' + mealId);
  return await response.json();
};
const getAllCategories = async (): Promise<{ categories: ICategory[] }> => {
  const response = await fetch(API_URL + 'categories.php');
  return await response.json();
};

const getFilteredCategory = async (categoryName: string): Promise<{ meals: IMeals[]}> => {
  const response = await fetch(API_URL + 'filter.php?c=' + categoryName);
  return await response.json();
};

export { getMealById, getAllCategories, getFilteredCategory };
