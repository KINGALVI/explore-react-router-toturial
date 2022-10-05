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

// Things that show a component in other component file or web page without makeing thish component clone into thosh component file or webpage:

/*
we can do thish with nested routeing . nested routing in a react dom sistem that make a component useful in other component file or website without makeing that componer clone . we can do thish with <Outlet> react sistem and connect this <Outlet> component with add.js file . whatever we create somthing in those <Outlet> component we can show thish in every singel component file that we use to create thish website .
*/

function App() {
  const router = createBrowserRouter([

    //inside the Outlet .
    {
      element: <Main></Main>, children: [
        { path: '/', element: <Defalts></Defalts> },
        { path: '/home', element: <Home></Home> }
      ]
    },

    //outside the Outlet .
    { path: '/about', element: <About></About> }

  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
