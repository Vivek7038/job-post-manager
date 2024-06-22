import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

const App = () => {
  const [jobs, setJobs] = useState([
    { id: 1, title: "Job 1", company: "Company A" },
    { id: 2, title: "Job 2", company: "Company B" },
  ]);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [selectedJob, setSelectedJob] = useState(null);

  const onSelectJob = (id) => {
    setSelectedJobId(id);
    const newSelectedJob = jobs.find((job) => job.id === id);
    setSelectedJob(newSelectedJob);
  };

  return (
    <div className="flex">
      <Sidebar jobs={jobs} onSelectJob={onSelectJob} />
      {selectedJob && (
        <>
          <Editor job={selectedJob} />
          <Previewer job={selectedJob} />
        </>
      )}
    </div>
  );
};

export default App;
