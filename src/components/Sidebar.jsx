import React from "react";
import { FaRegClone, FaTrashAlt } from "react-icons/fa";

const Sidebar = ({
  jobs,
  onSelectJob,
  onDuplicateJob,
  onDeleteJob,
  onNewJob,
  selectedJobId
}) => {
  return (
    <div className="min-w-[20%] max-w-[20%] min-h-[100vh] p-4 border-r">
      <h2 className="text-lg font-semibold mb-4">Jobs</h2>
      <button
        onClick={onNewJob}
        className="mb-4 p-2 w-full max-w-[170px] text-center bg-blue-500 text-white rounded"
      >
        New Job +
      </button>
      <ul>
        {jobs.map((job) => (
          <li key={job.id} className="mb-2 flex items-center justify-between">
            <button
              onClick={() => onSelectJob(job.id)}
              className={`flex-grow text-left text-wrap p-2 border rounded ${selectedJobId === job.id ? 'bg-blue-200 shadow-lg transform scale-105' : ''}`}
              >
              {job.title}
            </button>
            <div className="ml-2 flex items-center">
              <button
                onClick={() => onDuplicateJob(job.id)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <FaRegClone color="blue"/>
              </button>
              <button
                onClick={() => onDeleteJob(job.id)}
                className="p-2 text-gray-500 hover:text-gray-700"
              >
                <FaTrashAlt  color="red"/>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
