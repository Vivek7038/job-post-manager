// TextareaField.jsx
import React from "react";

const TextareaField = ({
  fieldName,
  label,
  fieldVisibility,
  handleVisibilityCheckboxChange,
  formData,
  handleChange,
}) => {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium leading-6 text-gray-900">
        <input
          type="checkbox"
          name={fieldName}
          checked={fieldVisibility[fieldName]}
          onChange={handleVisibilityCheckboxChange}
          className="mr-2"
        />
        {label}
      </label>
      <textarea
        name={fieldName}
        value={formData[fieldName]}
        onChange={handleChange}
        className="w-full p-2 border border-gray-300 rounded-md shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 resize-none overflow-y-auto"
        rows={2}
      />
    </div>
  );
};

export default TextareaField;
