import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { IMeal } from '../types/interfaces';
import { getMealById } from '../services/api';
import Preloader from '../components/Preloader/Preloader';

const Recipe: React.FC = () => {
  const { id } = useParams();
  const [recipe, setRecipe] = useState<IMeal>(Object);
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      getMealById(id).then((data) => setRecipe(data.meals[0]));
    }
  }, [id]);

  console.log(recipe);

  return (
    <>
      {!recipe.idMeal ? (
        <Preloader />
      ) : (
        <div className='recipe'>
          <img
            src={recipe.strMealThumb}
            alt={recipe.strMeal}
          />
          <h1>{recipe.strMeal}</h1>
          <h6>{recipe.strCategory}</h6>
          {recipe.strArea ? <h6>{recipe.strArea}</h6> : null}
          <p>{recipe.strInstructions}</p>
          <table className='striped'>
            <thead>
              <tr>
                <th>Ingredient</th>
                <th>Measure</th>
              </tr>
            </thead>
            <tbody>
              {Object.keys(recipe).map((key) => {
                if (key.includes('Ingredient') && recipe[key]) {
                  return (
                    <tr key={key}>
                      <td>{recipe[key]}</td>
                      <td>{recipe[`strMeasure${key.slice(13)}`]}</td>
                    </tr>
                  );
                }

                return null;
              })}
            </tbody>
          </table>
          {recipe.strYoutube ? (
            <div className='row'>
              <h5>Video recipe</h5>
              <iframe
                title={recipe.idMeal}
                src={`https://www.youtube.com/embed/${recipe.strYoutube.slice(
                  -11
                )}`}
                allowFullScreen
              />
            </div>
          ) : null}
        </div>
      )}
      <button
        className='btn'
        onClick={() => navigate(-1)}
      >
        BACK
      </button>
    </>
  );
};

export default Recipe;
