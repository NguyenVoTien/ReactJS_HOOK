//* Lib
import { Suspense } from 'react';
//* CSS
import './App.css';

//* Router
import RouterPages from '@/routers/index';
import Loading from '@/components/loadings';

function App() {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <RouterPages />
      </Suspense>
    </>
  );
}

export default App;
