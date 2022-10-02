import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Input from "../../components/Input";
import { GoBack } from "../../components/GoBack";
import { EVENT_CREATE, initState } from "./constants";
import { useImage } from "../../hooks/useImage";

export const Create = () => {
  const [form, setForm] = useState(initState);
  const [errors, setError] = useState(initState);
  const router = useNavigate();
  const getImage = useImage();

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "eventImage") {
      const data = new FormData();
      data.append("file", files[0]);
      const url = URL.createObjectURL(files[0]);
      setForm((p) => ({
        ...p,
        preview: url,
        [name]: value,
      }));
      fetch(
        "https://aws-file-upload-v1.herokuapp.com/api/v2/samunnati/upload/other",
        {
          method: "POST",
          body: data,
        }
      )
        .then((response) => response.json())
        .then((success) => {
          setForm((p) => ({
            ...p,
            preview: success?.link,
            [name]: value,
          }));
        });
    }
    setForm((pre) => ({
      ...pre,
      [name]: value,
    }));
    if (errors[name]) {
      setError((pre) => ({
        ...pre,
        [name]: false,
      }));
    }
  };

  const handleBlur = (e) => {
    const { name, value } = e.target;
    if (name === "eventImage") return;
    setError((pre) => ({
      ...pre,
      [name]: !value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const isValid = Object.keys(form).every((i) => !!form[i]);
    if (!isValid) {
      const errorData = Object.keys(form).reduce((acc, item) => {
        if (!form[item]) {
          acc[item] = true;
        }
        return acc;
      }, {});
      setError(errorData);
      return null;
    }
    localStorage.setItem("data", JSON.stringify(form));
    router("/event");
  };

  return (
    <>
      <div className="py-2 mx-3">
        <GoBack to="/" />
      </div>
      <div className="px-20 md-px-10">
        <h4 className="text-center mt-4 mb-4 text-4xl text-skin-primary font-bold">
          Create Event
        </h4>

        <div className="max-w-full flex justify-center pb-10 pt-3 flex mx-auto overflow-hidden md:max-w-full">
          <div className="w-6/12 md-w-100 px-5">
            <form onSubmit={onSubmit}>
              {EVENT_CREATE.map((props) => (
                <Input
                  {...{
                    ...props,
                    key: props.name,
                    onChange: handleChange,
                    handleBlur,
                    value: form[props.name],
                    error: errors[props.name],
                  }}
                />
              ))}
              <div className="flex justify-end my-10">
                <button
                  type="submit"
                  className="bg-gradient-primary items-center align-center flex justify-center text-center font-bold text-xl text-white px-2 py-1 w-80 h-14 rounded-primary"
                >
                  <span>Next</span>
                </button>
              </div>
            </form>
          </div>
          <div className="w-6/12 md-hidden">
            <img src={form.preview || getImage("create")} alt="create" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Create;
