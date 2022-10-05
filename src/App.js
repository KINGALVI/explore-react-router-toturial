import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Home from './components/home/Home';
import About from './components/about/About';
import Defalts from './components/defalt/Defalts';
import Main from './layout/Main';

// how make a router path website in react :

/*
1. install react router: npm i react-router-dom .
2. create a router use createBrowserRouter .
3. add RouterProveder and pass props .
4. create some route .
*/

//Things you need to create a route

/*
1. create a Link: so that you can go to this route .
2.Create component: to add you will show something once you go to that route
3. Add route in App.js so that react router know the component if needs to display while you are visiting to that route .
*/

function App() {
  const router = createBrowserRouter([
    //inside the OutLet .
    {
      element: <Main></Main>, children: [
        { path: '/', element: <Defalts></Defalts> },
        { path: '/home', element: <Home></Home> }
      ]
    },
    //outside the OutLet .
    { path: '/about', element: <About></About> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
