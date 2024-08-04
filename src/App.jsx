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
import JobPage, { jobLoader } from "./pages/JobPage";
import AddJobPage from "./pages/AddJobPage";

const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element=<Mainlayout />>
        <Route index element=<Homepage /> />
        <Route path="/jobs" element=<Jobspage /> />
        <Route path="/addJob" element=<AddJobPage /> />
        <Route path="/job/:id" element=<JobPage /> loader={jobLoader} />
        <Route path="*" element=<NotFounded /> />
      </Route>
    </>
  )
);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
