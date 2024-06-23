// helpers.js

export const isFieldVisible = (job, fieldName, fieldVisibility) => {
       const field = job[fieldName];
       if (field && typeof field === "object" && ("min" in field || "max" in field)) {
         return fieldVisibility[fieldName] && field.min !== "" && field.max !== "";
       }
       return fieldVisibility[fieldName] && job[fieldName];
     };
     