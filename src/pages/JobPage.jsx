import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
const JobPage = () => {
  const { id } = useParams();
  const [job, setJob] = useState([]);
  const [error, setError] = useState("");
  const fetchData = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/jobs/${id}`);
      setJob(res.data);
    } catch (error) {
      setError(error.message);
    } finally {
      console.log("We get the Data!");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  console.log(job);
  return <div>{job.title}</div>;
};

export default JobPage;
