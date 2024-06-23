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

  return (
    <div className="w-[30%] p-4">
      <h2 className="text-lg font-semibold mb-4">Job Preview</h2>
      <div className="border p-4 rounded">
        {fields.map((field) =>
          fieldVisibility[field.name] && job[field.name] ? (
            <div key={field.name} className="mb-4">
              <label className="block text-sm mb-1">{field.label}</label>
              {/* Rendering different types of fields accordingly */}
              {typeof job[field.name] === "object" ? (
                Array.isArray(job[field.name]) ? (
                  // Rendering array of labels
                  job[field.name].map((label, index) => (
                    <span
                      key={index}
                      className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2"
                    >
                      {label}
                    </span>
                  ))
                ) : (
                  // Rendering object fields like experienceRange and salaryRange
                  <p className="text-sm">
                    Min: {job[field.name].min}, Max: {job[field.name].max}
                  </p>
                )
              ) : (
                // Render simple text fields
                <p className="text-sm">{job[field.name]}</p>
              )}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
};

export default Previewer;
