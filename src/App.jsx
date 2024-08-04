import React from "react";
import Homepage from "./pages/Homepage";

import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
import Mainlayout from "./layouts/Main";
import Jobspage from "./pages/Jobspage";
import NotFounded from "./pages/NotFounded";
import JobPage from "./pages/JobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<Mainlayout />>
        <Route index element=<Homepage /> />
        <Route path="/jobs" element=<Jobspage /> />
        <Route path="/job/:id" element=<JobPage /> />
        <Route path="*" element=<NotFounded /> />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
