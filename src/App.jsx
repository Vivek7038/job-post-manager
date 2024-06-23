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

  const handleNewJob = () => {
    const newJob = {
      id: Date.now(),
      title: "New Job",
      introduction: "",
      rolesAndResponsibilities: "",
      experienceRange: { min: "", max: "" },
      qualifications: "",
      salaryRange: { min: "", max: "" },
      callToAction: "",
      company: "",
      jobLocation: "",
      jobType: "",
      labels: [],
    };
    setJobs([...jobs, newJob]);
    setSelectedJobId(newJob.id);
    setJob(newJob);
  };

  const handleSelectJob = (id) => {
    setSelectedJobId(id);
  };

  const handleJobChange = (updatedJob) => {
    setJobs(jobs.map((job) => (job.id === updatedJob.id ? updatedJob : job)));
  };

  const handleDuplicateJob = (id) => {
    const jobToDuplicate = jobs.find((job) => job.id === id);
    const duplicatedJob = {
      ...jobToDuplicate,
      id: Date.now(),
      title: `${jobToDuplicate.title} (Copy)`,
    };
    setJobs([...jobs, duplicatedJob]);
  };

  const handleDeleteJob = (id) => {
    setJobs(jobs.filter((job) => job.id !== id));
    if (selectedJobId === id) {
      setSelectedJobId(null);
      setJob(null);
    }
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
      <Sidebar
        jobs={jobs}
        onSelectJob={handleSelectJob}
        onDuplicateJob={handleDuplicateJob}
        onDeleteJob={handleDeleteJob}
        onNewJob={handleNewJob}
        selectedJobId={selectedJobId}
      />
      {selectedJob && (
        <>
          <Editor
            job={selectedJob}
            setJob={handleJobChange}
            fieldVisibility={fieldVisibility}
            toggleFieldVisibility={toggleFieldVisibility}
          />
          <Previewer job={selectedJob} fieldVisibility={fieldVisibility} />
        </>
      )}
    </div>
  );
};

export default App;
