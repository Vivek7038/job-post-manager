import React from "react";
import Sidebar from "./components/Sidebar";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";
import { useJobs } from "./hooks/useJobs";
import { useFieldVisibility } from "./hooks/useFieldVisibility";

const App = () => {

  // custom hook to  get job posts data and handle events 
  const {
    jobs,
    selectedJobId,
    selectedJob,
    handleNewJob,
    handleSelectJob,
    handleJobChange,
    handleDuplicateJob,
    handleDeleteJob,
  } = useJobs();

  // custom hook to toggle visibility of fields on checkbox state
  const { fieldVisibility, toggleFieldVisibility } = useFieldVisibility({
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
