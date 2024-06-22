import React from 'react';

const Sidebar = ({ jobs, onSelectJob }) => {
  return (
    <div className="w-1/4 p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Jobs</h2>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-2">
            <button
              onClick={() => onSelectJob(job.id)}
              className="w-full text-left p-2 border rounded"
            >
              {job.title}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
