//* Lib
// import { Suspense } from 'react';
//* CSS
import './App.css';
//* HOOK
import { useDispatch } from 'react-redux';

//* Router
// import RouterPages from '@/routers/index';
// import Loading from '@/components/loadings';
//* Store
import { addTodoPending, addTodoSuccess, addTodoError } from './stores/ActionType';

function App() {
  const dispatch = useDispatch();
  const handleAddTodo = () => {
    dispatch(addTodoPending());
    try {
      setTimeout(() => {
        dispatch(addTodoSuccess());
      }, 2000);
    } catch (error) {
      dispatch(addTodoError(error));
    }
  };
  return (
    <>
      {/* RouterPages
      <Suspense fallback={<Loading />}>
        <RouterPages />
      </Suspense> */}
      <button onClick={handleAddTodo}>ADD TODO</button>
    </>
  );
}

export default App;
