import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { JobPostData } from "./data/JobPostsData";
const App = () => {
  const [jobs, setJobs] = useState(JobPostData);
  const [selectedJobId, setSelectedJobId] = useState(null);

  const handleSelectJob = (id) => {
    setSelectedJobId(id);
  };

  const handleJobChange = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const selectedJob = jobs.find((job) => job.id === selectedJobId);

  return (
    <div className="flex">
      <Sidebar jobs={jobs} onSelectJob={handleSelectJob} />
      {selectedJob && (
        <>
          <Editor job={selectedJob} setJob={handleJobChange} />
          <Previewer job={selectedJob} />
        </>
      )}
    </div>
  );
};

export default App;
