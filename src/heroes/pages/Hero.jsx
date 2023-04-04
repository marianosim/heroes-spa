import { Navigate, useParams } from 'react-router-dom';
import { getHeroById } from '../helpers/getHeroesById';

export const Hero = () => {

  const { id } = useParams();
  const hero = getHeroById(id);

  if(!hero) {
    return <Navigate to='/marvel' />
  }

  return (
    <h1>Hero Page</h1>
  )
}
