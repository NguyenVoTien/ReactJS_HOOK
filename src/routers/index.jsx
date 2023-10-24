import { useRoutes } from 'react-router-dom';
import OutletChild from './outletChild';
//* import
import {
  ExerciseOneUseState,
  NavBar,
  HomePage,
  NotfoundPage,
  ExerciseTwoUseState,
  ExerciseThreeUseState,
  ExerciseTwoUSeEffect,
  ExerciseThreeUseEffect,
  ExerciseOneUseRef,
  ExerciseTwoUseRef,
  ExerciseThreeUseRef,
  ExerciseFourUseRef,
  ExerciseFiveUseRef,
  ExerciseSixUseRef,
  LoginPage,
  AboutPage,
  DetailPage,
} from '@/imports';
import ExerciseOneEffect from '@/pages/useEffect/exerciseOne';
import ExerciseOneReducer from '@/pages/useReducer/exerciseOne';

const RouterPage = () => {
  const elements = useRoutes([
    {
      path: '/',
      element: (
        <OutletChild>
          <NavBar />
        </OutletChild>
      ),
      children: [
        {
          index: true,
          element: <HomePage />,
        },
        {
          path: 'useState',
          children: [
            {
              path: 'ExerciseOneUseState',
              element: <ExerciseOneUseState />,
            },
            {
              path: 'ExerciseTwoUseState',
              element: <ExerciseTwoUseState />,
            },
            {
              path: 'ExerciseThreeUseState',
              element: <ExerciseThreeUseState />,
            },
          ],
        },
        {
          path: 'AboutPage',
          element: <AboutPage />,
        },
        {
          path: 'DetailPage',
          element: <DetailPage />,
        },
        {
          path: 'useEffect',
          children: [
            {
              path: 'ExerciseOneUseEffect',
              element: <ExerciseOneEffect />,
            },
            {
              path: 'ExerciseTwoUseEffect',
              element: <ExerciseTwoUSeEffect />,
            },
            {
              path: 'ExerciseThreeUseEffect',
              element: <ExerciseThreeUseEffect />,
            },
          ],
        },
        {
          path: 'useRef',
          children: [
            {
              path: 'ExerciseOneUseRef',
              element: <ExerciseOneUseRef />,
            },
            {
              path: 'ExerciseTwoUseRef',
              element: <ExerciseTwoUseRef />,
            },
            {
              path: 'ExerciseThreeUseRef',
              element: <ExerciseThreeUseRef />,
            },
            {
              path: 'ExerciseFourUseRef',
              element: <ExerciseFourUseRef />,
            },
            {
              path: 'ExerciseFiveUseRef',
              element: <ExerciseFiveUseRef />,
            },
            {
              path: 'ExerciseSixUseRef',
              element: <ExerciseSixUseRef />,
            },
          ],
        },
        {
          path: 'projects',
          children: [],
        },
        {
          path: 'useReducer',
          children: [
            {
              path: 'ExerciseOneUseReducer',
              element: <ExerciseOneReducer />,
            },
          ],
        },
      ],
    },
    {
      path: 'LoginPage',
      element: <LoginPage />,
    },
    {
      path: '/*',
      element: <NotfoundPage />,
    },
  ]);
  return elements;
};

export default RouterPage;
