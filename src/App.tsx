import DefaultLayout from '@layouts/default';
import '@styles/style.scss';
import Router from '@/routes/Router';

const App = () => {
  return (
    <>
      <DefaultLayout>
        <Router />
      </DefaultLayout>
    </>
  );
};

export default App;
