import {useState} from "react";

export const UseValidationForm = (options) => {
  const {data, setData} = options;
  const [errors, setErrors] = useState({});

  const handleChange = (key, sanitizeFn) => (
    e,
  ) => {
    const value = sanitizeFn ? sanitizeFn(e.target.value) : e.target.value;
    setData({
      ...data,
      [key]: value,
    });
    if (Object.keys(errors).length > 0) {
      let temp = {...errors};
      if (temp.hasOwnProperty(key)) {
        delete temp[key];
        setErrors({
          ...temp
        });
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validations = options?.validations;
    if (validations) {
      let valid = true;
      const newErrors = {};
      for (const key in validations) {
        const value = data[key];
        const validation = validations[key];
        if (validation?.required?.value && !value) {
          valid = false;
          newErrors[key] = validation?.required?.messageKey;
          continue;
        }

        const custom = validation?.custom;
        if (value != undefined && value != "" && custom?.isValid && !custom.isValid(value)) {
          valid = false;
          if(!custom.messageKey) {
            newErrors[key] = custom.getMessageKey(value);
          } else {
            newErrors[key] = custom.messageKey;
          }

          continue;
        }

        if (custom?.isDependentValid && !custom.isDependentValid(value,data)) {
          valid = false;
          if(!custom.messageKey) {
            newErrors[key] = custom.getMessageKey(value,data);
          } else {
            newErrors[key] = custom.messageKey;
          }

          continue;
        }

        const pattern = validation?.pattern;

        if (value != undefined && value != "" && pattern?.value && !RegExp(pattern.value).test(value)) {
          valid = false;
          newErrors[key] = pattern.messageKey;
        }
      }

      if (!valid) {
        setErrors(newErrors);
        return;
      }
    }

    setErrors({});

    if (options?.onSubmit) {
      options.onSubmit();
    }
  };

  return {
    data,
    handleChange,
    handleSubmit,
    errors,
    setData
  };
};