import { useState } from "react";

export const useFieldVisibility = (initialVisibility) => {
  const [fieldVisibility, setFieldVisibility] = useState(initialVisibility);

  const toggleFieldVisibility = (fieldName, isChecked) => {
    setFieldVisibility({
      ...fieldVisibility,
      [fieldName]: isChecked,
    });
  };

  return {
    fieldVisibility,
    toggleFieldVisibility,
  };
};
