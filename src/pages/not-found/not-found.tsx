import { Link } from 'react-router-dom';
import { AppRoute } from '../../const';

function NotFound(): JSX.Element {
  return (
    <div>
      <h1>404 Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      <Link to={AppRoute.Root}>Go to Home</Link>
    </div>
  );
}

export default NotFound;
