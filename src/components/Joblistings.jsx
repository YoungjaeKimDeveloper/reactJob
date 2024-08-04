import React, { useEffect, useState } from "react";
import Spinners from "./Spinners";

import Joblisting from "./Joblisting";
import axios from "axios";

const Joblistings = ({ isHomePage = false }) => {
  const [jobs, setJobs] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const apiUrl = isHomePage
    ? "http://localhost:8000/jobs?_limit=3"
    : "http://localhost:8000/jobs";
  const fetchData = async () => {
    try {
      setLoading(true);
      const res = await axios.get(apiUrl);
      setJobs(res.data);
    } catch (error) {
      setLoading(false);
      setError(error.message);
    } finally {
      setLoading(false);
      console.log("We get the Data!");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);
  console.log(jobs);
  const currentJobs = jobs.slice(0, 3);
  return (
    <section className="bg-blue-50 px-4 py-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-indigo-500 mb-6 text-center">
          {isHomePage ? "Browse Jobs" : "Recent Jobs"}
        </h2>
        {error && (
          <em className="flex justify-center font-bold text-red-400">
            {error}
          </em>
        )}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {loading ? (
            <Spinners isloading={loading} />
          ) : isHomePage ? (
            currentJobs.map((job, index) => (
              <Joblisting key={index} job={job} />
            ))
          ) : (
            jobs.map((job, index) => <Joblisting key={index} job={job} />)
          )}
        </div>
      </div>
    </section>
  );
};

export default Joblistings;
