import './App.scss';
import { RouterProvider } from 'react-router-dom';
import router from './routher/Router';
import WOW from 'wowjs';

function App() {

    const wow  = new WOW.WOW()
    wow.init();

  // const wow = new WOW.WOW();
  // // ---- ^^ const wow = WOW(); 
  // wow.init();


  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
