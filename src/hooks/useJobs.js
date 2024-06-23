import { useState } from "react";
import { JobPostData } from "../data/JobPostsData";

export const useJobs = () => {
       const [jobs, setJobs] = useState(JobPostData);
       const [selectedJobId, setSelectedJobId] = useState(null);

       const handleNewJob = () => {
              const newJob = {
                     id: Date.now(), // for unique id 
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
              }
       };

       return {
              jobs,
              selectedJobId,
              selectedJob: jobs.find((job) => job.id === selectedJobId),
              handleNewJob,
              handleSelectJob,
              handleJobChange,
              handleDuplicateJob,
              handleDeleteJob,
       };
};
