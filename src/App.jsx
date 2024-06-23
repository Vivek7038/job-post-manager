import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { JobPostData } from "./data/JobPostsData";
const App = () => {
  const [jobs, setJobs] = useState(JobPostData);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [fieldVisibility, setFieldVisibility] = useState({
    title: true,
    introduction: true,
    rolesAndResponsibilities: true,
    experienceRange: true,
    qualifications: true,
    salaryRange: true,
    callToAction: true,
    company: true,
    jobLocation: true,
    jobType: true,
    labels: true,
  });
  const handleSelectJob = (id) => {
    setSelectedJobId(id);
  };

  const handleJobChange = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const selectedJob = jobs.find((job) => job.id === selectedJobId);
  const toggleFieldVisibility = (fieldName, isChecked) => {
    setFieldVisibility({
      ...fieldVisibility,
      [fieldName]: isChecked,
    });
  };
  return (
    <div className="flex">
      <Sidebar jobs={jobs} onSelectJob={handleSelectJob} />
      {selectedJob && (
        <>
          <Editor job={selectedJob} setJob={handleJobChange}  fieldVisibility={fieldVisibility} toggleFieldVisibility={toggleFieldVisibility}/>
          <Previewer job={selectedJob}  fieldVisibility={fieldVisibility} />
        </>
      )}
    </div>
  );
};

export default App;
