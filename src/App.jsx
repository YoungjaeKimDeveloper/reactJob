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
import JobDetails from "./pages/JobDetails";
import NotFounded from "./pages/NotFounded";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<Mainlayout />>
        <Route index element=<Homepage /> />
        <Route path="/jobs" element=<Jobspage /> />
        <Route path="/job/:id" element=<JobDetails /> />
        <Route path="*" element=<NotFounded /> />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
