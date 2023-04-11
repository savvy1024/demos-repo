import { useField } from "formik";
import React from "react";

function CustomSelect({ label, ...props }) {
  const [field, meta, helper] = useField(props);

  return (
    <div className='flex flex-col pb-3'>
      <label>{label}</label>
      <select
        {...field}
        {...props}
        className={
          meta.error && meta.touched
            ? "border-2 border-red-500 rounded"
            : "border-2 rounded"
        }
      />
      {meta.error && meta.touched && (
        <p className='text-red-500'>{meta.error}</p>
      )}
    </div>
  );
}

export default CustomSelect;
