import React from 'react';

const Sidebar = ({ jobs, onSelectJob }) => {
  return (
    <div className="bg-gray-200 h-screen w-[20%] p-4">
      <h2 className="text-lg font-semibold mb-4">New Job +</h2>
      <ul>
        {jobs.map((job) => (
          <li
            key={job.id}
            className="cursor-pointer mb-2 p-2 rounded hover:bg-gray-300 text-wrap"
            onClick={() => onSelectJob(job.id)}
          >
            {job.title}ts, with conditional visibility based on whether a job post
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
