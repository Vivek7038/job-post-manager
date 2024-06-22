import React, { useEffect } from "react";

const Editor = ({ job }) => {
  return (
    <div className="w-1/2 p-4">
      <h2 className="text-lg font-semibold mb-4">Edit Job</h2>
      <form>
        <div className="mb-4">
          <label className="block text-sm mb-1">Title</label>
          <input
            type="text"
            name="title"
            className="w-full p-2 border rounded"
            value={job.title}
          />
        </div>
        <div className="mb-4">
          <label className="block text-sm mb-1">Company</label>
          <input
            type="text"
            name="company"
            className="w-full p-2 border rounded"
            value={job.company}
          />
        </div>
      </form>
    </div>
  );
};

export default Editor;
