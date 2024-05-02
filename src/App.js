import React, { useState } from "react";
import { SketchPicker } from "react-color";

const App = () => {
  // State to hold form data
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    checkbox: false,
    selectedDate: "",
    color: "#000000",
    file: null,
  });

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Do something with the form data, like send it to a server
    console.log(formData);
  };

  // Function to handle input changes
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    const newValue =
      type === "checkbox" ? checked : type === "file" ? files[0] : value;
    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  // Function to handle color picker changes
  const handleColorChange = (color) => {
    setFormData({
      ...formData,
      color: color.hex,
    });
  };

  return (
    <div className="max-w-md mx-auto mt-8 w-full h-350 ">
      <form
        onSubmit={handleSubmit}
        className=" shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-grey-500"
      >
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="name"
            type="text"
            placeholder="Enter your name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="Enter your email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="message"
          >
            Message
          </label>
          <textarea
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="message"
            placeholder="Enter your message"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="checkbox"
          >
            Checkbox
          </label>
          <input
            className="mr-2 leading-tight"
            id="checkbox"
            type="checkbox"
            name="checkbox"
            checked={formData.checkbox}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="datepicker"
          >
            Date Picker
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="datepicker"
            type="datetime-local"
            name="selectedDate"
            value={formData.selectedDate}
            onChange={handleChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="colorpicker"
          >
            Color Picker
          </label>
          <SketchPicker
            color={formData.color}
            onChangeComplete={handleColorChange}
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="file"
          >
            Upload
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="file"
            type="file"
            name="file"
            onChange={handleChange}
          />
        </div>
        <div className="mb-6">
          <a href="#" className="text-blue-500 hover:underline">
            Link
          </a>
        </div>
        <div className="flex items-center justify-between">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default App;
