import React from "react";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<h1>Here is the HomePage</h1> />
      <Route path="*" element=<h1>Here is the error Page</h1> />
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
