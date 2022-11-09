import { createBrowserRouter } from 'react-router-dom';

import Home from '../pages/home';
import Error from '../pages/error';
import PlaceHolderExample from '../features/placeHolderExample';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Home />,
    errorElement: <Error />,
  },
  {
    path: '/placeholder',
    element: <PlaceHolderExample />,
  },
]);
