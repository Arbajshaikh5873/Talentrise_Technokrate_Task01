import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { profileContext } from "../App";

function AddEdit() {
  const [imagePreview, setImagePreview] = useState();
  const { setProfileData } = useContext(profileContext);
  const handleFormSubmit = (values) => {
    console.log(values);
    values._id = Date.now().toString();
    setProfileData((prev) => [...prev, values]);
  };

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, "name should be at least 2 characters")
      .required("name required"),
    email: Yup.string().email("invalid email").required("email required"),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, "Phone must be 10 digits")
      .required("Phone is required"),
    address: Yup.string()
      .min(5, "Address must be at least 5 characters")
      .required("Address is required"),
  });

  return (
    <div>
      <Formik
        initialValues={{
          name: "",
          email: "",
          phone: "",
          address: "",
          imagePreview: "",
        }}
        validationSchema={validationSchema}
        onSubmit={handleFormSubmit}
      >
        {(formik) => (
          <Form>
            <div className="text-center my-2 ">
              <div className="bg-red-950 p-2 text-white my-2">
                Add/Edit From
              </div>

              {/* For File */}
              <div className="flex justify-center m-2 p-2 w-[50%] mx-auto ">
                <label
                  htmlFor="name"
                  className="bg-blue-500 p-2 rounded-2xl w-sm text-end flex justify-end items-center text-white font-bold mx-2"
                >
                  {" "}
                  Upload Image
                </label>
                <div>
                  <input
                    className="bg-blue-500 p-2 rounded-2xl w-md text-end flex justify-start items-center text-white font-bold"
                    type="file"
                    onChange={(e) => {
                      console.log(e.target.files);
                      formik.setFieldValue("image", e.target.files[0]);
                      const preview = URL.createObjectURL(e.target.files[0]);
                      formik.setFieldValue("imagePreview", preview);
                      setImagePreview(preview);
                    }}
                  />
                </div>
              </div>

              {/* for name */}
              <div className="flex justify-center m-2 p-2 w-[50%] mx-auto ">
                <label
                  htmlFor="name"
                  className="bg-blue-500 p-2 rounded-2xl w-sm text-end flex justify-end items-center text-white font-bold mx-2"
                >
                  name
                </label>
                <div>
                  <Field
                    name="name"
                    placeholder="enter name"
                    className="bg-blue-500 p-2 rounded-2xl w-md text-end flex justify-start items-center text-white font-bold "
                  />
                  <ErrorMessage
                    name="name"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* for Email */}
              <div className="flex justify-center m-2 p-2 w-[50%] mx-auto ">
                <label
                  htmlFor="email"
                  className="bg-blue-500 p-2 rounded-2xl w-sm text-end flex justify-end items-center text-white font-bold mx-2"
                >
                  email
                </label>
                <div>
                  <Field
                    name="email"
                    placeholder="enter email"
                    className="bg-blue-500 p-2 rounded-2xl w-md text-end flex justify-start items-center text-white font-bold "
                  />
                  <ErrorMessage
                    name="email"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* Phone */}
              <div className="flex justify-center m-2 p-2 w-[50%] mx-auto ">
                <label
                  htmlFor="phone"
                  className="bg-blue-500 p-2 rounded-2xl w-sm text-end flex justify-end items-center text-white font-bold mx-2"
                >
                  phone
                </label>
                <div>
                  <Field
                    name="phone"
                    placeholder="enter phone"
                    className="bg-blue-500 p-2 rounded-2xl w-md text-end flex justify-start items-center text-white font-bold "
                  />
                  <ErrorMessage
                    name="phone"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* address */}
              <div className="flex justify-center m-2 p-2 w-[50%] mx-auto  ">
                <label
                  htmlFor="address"
                  className="bg-blue-500 p-2 rounded-2xl w-sm text-end flex justify-end items-center text-white font-bold mx-2"
                >
                  address
                </label>
                <div>
                  <Field
                    name="address"
                    placeholder="enter address"
                    className="bg-blue-500 p-2 rounded-2xl w-md text-end flex justify-start items-center text-white font-bold "
                  />
                  <ErrorMessage
                    name="address"
                    component={"div"}
                    className="text-red-500"
                  />
                </div>
              </div>

              {/* submit button */}

              <button
                type="submit"
                className="bg-blue-500 p-2 rounded-2xl w-sm flex justify-center items-center text-white font-bold mx-auto my-auto"
              >
                Submit
              </button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default AddEdit;
