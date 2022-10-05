import './App.css';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

// how make a router path website in react :

/*
1. install react router: npm i react-router-dom .
2. create a router use createBrowserRouter .
3. add RouterProveder and pass props .
4. create some route .
*/

function App() {
  const router = createBrowserRouter([
    { path: '/', element: <div>Thish Is Defalt Page</div> },
    { path: '/home', element: <div>Home Page</div> },
    { path: '/about', element: <div>Thish Is About Page</div> }
  ])
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
