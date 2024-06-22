import React from "react";

const Previewer = ({ job }) => {
  if (!job) return null;

  return (
    <div className="w-[30%] p-4">
      <h2 className="text-lg font-semibold mb-4">Job Preview</h2>
      <div className="border p-4 rounded">
        <h3 className="text-md font-semibold mb-2">{job.title}</h3>
        <p className="text-sm mb-2">{job.company}</p>
      </div>
    </div>
  );
};

export default Previewer;
