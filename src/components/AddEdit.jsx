import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import React, { useContext, useState } from "react";
import { editIdContext, profileContext } from "./Container";
import { useNavigate } from "react-router";

// AddEdit Component
function AddEdit({ setCurrentView }) {
  const [text, setText] = useState("");
  const { profileData, setProfileData } = useContext(profileContext);
  const { editId, setEditId } = useContext(editIdContext);

  const editingProfile = profileData.find((p) => p._id === editId);

  const [formValues, setFormValues] = useState({
    name: editingProfile?.name || "",
    email: editingProfile?.email || "",
    phone: editingProfile?.phone || "",
    address: editingProfile?.address || "",
    image: editingProfile?.image || null,
    imagePreview: editingProfile?.imagePreview || "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formValues.name || formValues.name.length < 2) {
      newErrors.name = "Name should be at least 2 characters";
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formValues.email) {
      newErrors.email = "Email is required";
    } else if (!emailRegex.test(formValues.email)) {
      newErrors.email = "Invalid email";
    }

    const phoneRegex = /^[0-9]{10}$/;
    if (!formValues.phone) {
      newErrors.phone = "Phone is required";
    } else if (!phoneRegex.test(formValues.phone)) {
      newErrors.phone = "Phone must be 10 digits";
    }

    if (!formValues.address || formValues.address.length < 5) {
      newErrors.address = "Address must be at least 5 characters";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      return;
    }

    if (editId) {
      setProfileData((prev) =>
        prev.map((profile) =>
          profile._id === editId ? { ...formValues, _id: editId } : profile
        )
      );
      setText("Profile updated successfully");
      setEditId(null);
    } else {
      const newProfile = { ...formValues, _id: Date.now().toString() };
      setProfileData((prev) => [...prev, newProfile]);
      setText("Profile added successfully");
    }

    setFormValues({
      name: "",
      email: "",
      phone: "",
      address: "",
      image: null,
      imagePreview: "",
    });

    setTimeout(() => {
      setText("");
      setCurrentView("viewPage");
    }, 1500);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files[0]) {
      setFormValues((prev) => ({
        ...prev,
        image: e.target.files[0],
        imagePreview: URL.createObjectURL(e.target.files[0]),
      }));
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 py-8 px-4">
      <div className="max-w-2xl mx-auto">
        {text && (
          <div className="mb-6 p-4 bg-green-500 text-white rounded-lg shadow-lg">
            <p className="text-center font-semibold">{text}</p>
          </div>
        )}

        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden">
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
            <h2 className="text-3xl font-bold text-white text-center">
              {editId ? "Edit Profile" : "Add New Profile"}
            </h2>
          </div>

          <div className="p-8 space-y-6">
            {/* Image Upload */}
            <div className="flex flex-col items-center space-y-4">
              {formValues.imagePreview && (
                <div className="relative">
                  <img
                    src={formValues.imagePreview}
                    alt="Preview"
                    className="w-32 h-32 rounded-full object-cover border-4 border-purple-500 shadow-lg"
                  />
                </div>
              )}
              <label className="cursor-pointer">
                <div className="px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-200 shadow-md">
                  {formValues.imagePreview ? "Change Image" : "Upload Image"}
                </div>
                <input
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={handleImageChange}
                />
              </label>
            </div>

            {/* Name Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Name
              </label>
              <input
                type="text"
                name="name"
                value={formValues.name}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
              {errors.name && (
                <div className="text-red-500 text-sm font-medium">
                  {errors.name}
                </div>
              )}
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Email
              </label>
              <input
                type="email"
                name="email"
                value={formValues.email}
                onChange={handleChange}
                placeholder="Enter your email"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none"
              />
              {errors.email && (
                <div className="text-red-500 text-sm font-medium">
                  {errors.email}
                </div>
              )}
            </div>

            {/* Phone Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Phone
              </label>
              <input
                type="text"
                name="phone"
                value={formValues.phone}
                onChange={handleChange}
                placeholder="Enter 10-digit phone number"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-blue-500 focus:ring-2 focus:ring-blue-200 transition-all duration-200 outline-none"
              />
              {errors.phone && (
                <div className="text-red-500 text-sm font-medium">
                  {errors.phone}
                </div>
              )}
            </div>

            {/* Address Field */}
            <div className="space-y-2">
              <label className="block text-sm font-semibold text-gray-700">
                Address
              </label>
              <textarea
                name="address"
                value={formValues.address}
                onChange={handleChange}
                rows="3"
                placeholder="Enter your address"
                className="w-full px-4 py-3 border-2 border-gray-300 rounded-lg focus:border-purple-500 focus:ring-2 focus:ring-purple-200 transition-all duration-200 outline-none resize-none"
              />
              {errors.address && (
                <div className="text-red-500 text-sm font-medium">
                  {errors.address}
                </div>
              )}
            </div>

            {/* Buttons */}
            <div className="flex gap-4">
              <button
                onClick={handleSubmit}
                className="flex-1 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                {editId ? "Update Profile" : "Add Profile"}
              </button>
              {editId && (
                <button
                  onClick={() => {
                    setEditId(null);
                    setCurrentView("viewPage");
                  }}
                  className="px-6 py-3 bg-gray-500 text-white rounded-lg font-bold hover:bg-gray-600 transition-all duration-200 shadow-lg"
                >
                  Cancel
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AddEdit;
