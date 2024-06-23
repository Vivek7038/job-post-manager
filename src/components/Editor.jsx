import React, { useState, useEffect } from "react";

const Editor = ({ job, setJob, fieldVisibility, toggleFieldVisibility }) => {
  const [formData, setFormData] = useState({
    title: "",
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
    labelOptions: ["Is Remote", "5 Day week"],
  });

  useEffect(() => {
    if (job) {
      setFormData({
        title: job.title || "",
        introduction: job.introduction || "",
        rolesAndResponsibilities: job.rolesAndResponsibilities || "",
        experienceRange: {
          min: job.experienceRange?.min || "",
          max: job.experienceRange?.max || "",
        },
        qualifications: job.qualifications || "",
        salaryRange: {
          min: job.salaryRange?.min || "",
          max: job.salaryRange?.max || "",
        },
        callToAction: job.callToAction || "",
        company: job.company || "",
        jobLocation: job.jobLocation || "",
        jobType: job.jobType || "",
        labels: job.labels || [],
        labelOptions: formData.labelOptions,
      });
    }
  }, [job, formData.labelOptions]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    setJob({
      ...job,
      [name]: value,
    });
  };

  const handleRangeChange = (e, rangeField) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [rangeField]: {
        ...prevData[rangeField],
        [name]: value,
      },
    }));
    setJob({
      ...job,
      [rangeField]: {
        ...job[rangeField],
        [name]: value,
      },
    });
  };

  const handleCheckboxChange = (e) => {
    const { name, checked } = e.target;
    let updatedLabels = [...formData.labels];

    if (checked && !updatedLabels.includes(name)) {
      updatedLabels.push(name);
    } else {
      updatedLabels = updatedLabels.filter((label) => label !== name);
    }

    setFormData((prevData) => ({
      ...prevData,
      labels: updatedLabels,
    }));
    setJob({
      ...job,
      labels: updatedLabels,
    });
  };

  const handleVisibilityCheckboxChange = (e) => {
    const { name, checked } = e.target;
    toggleFieldVisibility(name, checked);
  };

  if (!job) return null;

  return (
    <div className="w-1/2 p-4">
      <h2 className="text-lg font-semibold mb-4">Edit Job</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="title"
              checked={fieldVisibility.title}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Job Post Title
          </label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="introduction"
              checked={fieldVisibility.introduction}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Introduction
          </label>
          <textarea
            name="introduction"
            value={formData.introduction}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="rolesAndResponsibilities"
              checked={fieldVisibility.rolesAndResponsibilities}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Roles and Responsibilities
          </label>
          <textarea
            name="rolesAndResponsibilities"
            value={formData.rolesAndResponsibilities}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="experienceRange"
              checked={fieldVisibility.experienceRange}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Experience Range (yrs)
          </label>
          <div className="flex">
            <input
              type="number"
              name="min"
              value={formData.experienceRange.min}
              onChange={(e) => handleRangeChange(e, "experienceRange")}
              className="w-full p-2 border rounded mr-2"
            />
            <input
              type="number"
              name="max"
              value={formData.experienceRange.max}
              onChange={(e) => handleRangeChange(e, "experienceRange")}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="salaryRange"
              checked={fieldVisibility.salaryRange}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Salary Range (LPA)
          </label>
          <div className="flex">
            <input
              type="number"
              name="min"
              value={formData.salaryRange.min}
              onChange={(e) => handleRangeChange(e, "salaryRange")}
              className="w-full p-2 border rounded mr-2"
            />
            <input
              type="number"
              name="max"
              value={formData.salaryRange.max}
              onChange={(e) => handleRangeChange(e, "salaryRange")}
              className="w-full p-2 border rounded"
            />
          </div>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="qualifications"
              checked={fieldVisibility.qualifications}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Qualifications
          </label>
          <input
            type="text"
            name="qualifications"
            value={formData.qualifications}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="callToAction"
              checked={fieldVisibility.callToAction}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Call to Action
          </label>
          <textarea
            name="callToAction"
            value={formData.callToAction}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="company"
              checked={fieldVisibility.company}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="jobLocation"
              checked={fieldVisibility.jobLocation}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Job Location
          </label>
          <input
            type="text"
            name="jobLocation"
            value={formData.jobLocation}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">
            <input
              type="checkbox"
              name="jobType"
              checked={fieldVisibility.jobType}
              onChange={handleVisibilityCheckboxChange}
              className="mr-2"
            />
            Job Type
          </label>
          <select
            name="jobType"
            value={formData.jobType}
            onChange={handleChange}
            className="w-full p-2 border rounded"
          >
            <option value="Part Time">Part Time</option>
            <option value="Contract">Contract</option>
            <option value="Internship">Internship</option>
          </select>
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Labels</label>
          {formData.labelOptions.map((option) => (
            <div key={option} className="flex items-center">
              <input
                type="checkbox"
                name={option}
                checked={formData.labels.includes(option)}
                onChange={handleCheckboxChange}
                className="mr-2"
              />
              <span>{option}</span>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Editor;
