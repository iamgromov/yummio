const API_KEY = import.meta.env.VITE_API_URL_KEY as string;

const API_URL = `https://www.themealdb.com/api/json/v1/${API_KEY}/`;

export { API_URL };
