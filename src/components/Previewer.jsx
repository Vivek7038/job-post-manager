import React from "react";

const Previewer = ({ job, fieldVisibility }) => {
  if (!job) return null;

  // Array of field names and their corresponding labels
  const fields = [
    { name: "title", label: "Job Post Title" },
    { name: "introduction", label: "Introduction" },
    { name: "rolesAndResponsibilities", label: "Roles and Responsibilities" },
    { name: "company", label: "Company" },
    { name: "experienceRange", label: "Experience Range" },
    { name: "qualifications", label: "Qualifications" },
    { name: "salaryRange", label: "Salary Range" },
    { name: "callToAction", label: "Call to Action" },
    { name: "jobLocation", label: "Job Location" },
    { name: "jobType", label: "Job Type" },
    { name: "labels", label: "Labels" },
  ];
  const isFieldVisible = (fieldName) => {
    return fieldVisibility[fieldName];
  };

  const renderBulletPoints = (text) => {
    return text.split("\n").map((line, index) => (
      <li key={index} className="mb-1 ml-4 list-disc">
        {line}
      </li>
    ));
  };

  return (
    <div className="w-[30%] p-4 min-h-[80vh]">
      <h2 className="text-lg font-semibold mb-4">Job Preview</h2>
      <div className="border p-4 rounded">
        <div className="mb-4 flex flex-row justify-between gap-1 items-center">
          {/* Job Post Title */}
          {isFieldVisible("title") && (
            <div className="">
              <p className="text-lg font-bold text-wrap">{job.title}</p>
            </div>
          )}
          {isFieldVisible("labels") && (
            <div className="w-full flex flex-row items-center gap-x-1">
              {job.labels.map((label, index) => (
                <span
                  key={index}
                  className="inline-block bg-teal-500 text-white rounded-full px-3 py-1 text-sm font-semibold mr-2 mb-2 hover:bg-teal-600 cursor-pointer"
                >
                  {label}
                </span>
              ))}
            </div>
          )}
        </div>

        {/* Introduction */}
        {isFieldVisible("introduction") && (
          <div className="mb-4">
            <label className="text-base font-semibold">Introduction :</label>
            <p className="text-sm">{job.introduction}</p>
          </div>
        )}

        {/* Roles and Responsibilities */}
        {isFieldVisible("rolesAndResponsibilities") && (
          <div className="mb-4">
            <label className="text-base font-semibold">
              Roles and Responsibilities:
            </label>
            <ul className="text-sm">
              {renderBulletPoints(job.rolesAndResponsibilities)}
            </ul>
          </div>
        )}

        {/* Company */}
        {isFieldVisible("company") && (
          <div className="mb-4 flex flex-row gap-x-2 items-center ">
            <label className="text-base font-semibold">Company :</label>
            <p className="text-sm">{job.company}</p>
          </div>
        )}

        {/* Experience Range */}
        {isFieldVisible("experienceRange") && (
          <div className="mb-4 flex flex-row gap-x-2 items-center ">
            <label className="text-base font-semibold">
              Preferred Experience :
            </label>
            <p className="text-sm">
              {job.experienceRange.min} to {job.experienceRange.max} years
            </p>
          </div>
        )}

        {/* Qualifications */}
        {isFieldVisible("qualifications") && (
          <div className="mb-4">
            <label className="text-base font-semibold">Qualifications :</label>
            <p className="text-sm">{job.qualifications}</p>
          </div>
        )}

        {/* Salary Range */}
        {isFieldVisible("salaryRange") && (
          <div className="mb-4  flex flex-row items-center gap-x-1">
            <label className="text-base font-semibold">Salary Range :</label>
            <p className="text-sm">
              {job.salaryRange.min} to {job.salaryRange.max} LPA
            </p>
          </div>
        )}

        {/* Call to Action */}
        {isFieldVisible("callToAction") && (
          <div className="mb-4">
            <label className="text-base font-semibold">Call to Action :</label>
            <p className="text-sm">{job.callToAction}</p>
          </div>
        )}

        {/* Job Location */}
        {isFieldVisible("jobLocation") && (
          <div className="mb-4  flex flex-row items-center gap-x-1">
            <label className="text-base font-semibold">Job Location :</label>
            <p className="text-sm  font-medium text-wrap">{job.jobLocation}</p>
          </div>
        )}

        {/* Job Type */}
        {isFieldVisible("jobType") && (
          <div className="mb-4  flex flex-row items-center gap-x-1">
            <label className="text-base font-semibold ">Job Type :</label>
            <p className="text-sm bg-purple-700 text-yellow-300 w-fit px-2 py-1 border rounded-full hover:bg-purple-500">
              {job.jobType}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Previewer;
