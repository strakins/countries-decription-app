import React, { useReducer, useState } from "react";

// Creating forms with controlled component using State and Props

const formReducer = (state, e) => {
  if (e.reset) {
    return {
      name: "",
      apple: "",
      count: 0,
      "gift-wrap": false,
    };
  }
  return {
    ...state,
    [e.name]: e.value,
  };
};

const ControlledFormOps = () => {
  const [formData, setFormData] = useReducer(formReducer, {
    // We can preset value for count here and other fields too
    count: 2,
  });
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("You just submitted a file to Strakins");
    setSubmitting(true);
    // Create a settimeout
    setTimeout(() => {
      setSubmitting(false);
      setFormData({
        reset: true,
      });
    }, 4000);
  };

  const handleChange = (e) => {
    const checkBox = e.target.type === "checkbox";
    setFormData({
      name: e.target.name,
      //   value: e.target.value,
      value: checkBox ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="h-screen grid place-items-center">
      <section className="h-fit lg:w-1/2 border-2 bg-slate-500 p-8 text-gray-200">
        <h1 className="text-xl lg:text-4xl pb-2">How About Some Apples</h1>
        {submitting && (
          <div className="bg-white text-blue-600 border-2 rounded my-2 border-slate-500 p-2">
            <h4 className="">
              {" "}
              Hey {formData.name} You are submitting the following:
            </h4>
            <ul>
              {Object.entries(formData).map(([name, value]) => (
                <li key={name}>
                  <strong>{name}</strong>: {value.toString()}{" "}
                </li>
              ))}
            </ul>
          </div>
        )}
        <form action="" onSubmit={handleSubmit} className="">
          <fieldset className="p-2  border-2  mb-3" disabled={submitting}>
            <label htmlFor="">
              <p className="py-2">Name</p>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                value={formData.name || " "}
                className="py-2 px-2 w-80 rounded-md text-gray-700"
              />
            </label>
          </fieldset>
          <fieldset className="p-2 border-2" disabled={submitting}>
            <label htmlFor="">
              <p>Apple Juice</p>
              <select
                name="apple"
                onChange={handleChange}
                value={formData.apple || " "}
                className="p-3 rounded-md text-gray-600 my-2"
              >
                <option value="" className="">
                  -- Please Choose an Option
                </option>
                <option value="fuji">Fuji Flavour</option>
                <option value="hollands">Hollandia Flavour</option>
                <option value="commods">Commato Falvour</option>
              </select>
            </label>
            <label htmlFor="">
              <p className="py-2">Count</p>
              <input
                type="number"
                step={2}
                name="count"
                onChange={handleChange}
                value={formData.count || " "}
                className="py-2 px-1 rounded-sm text-gray-700"
              />
            </label>
            <label htmlFor="">
              <p className="py-2">Gift Wrap</p>
              <input
                type="checkbox"
                name="gift-wrap"
                onChange={handleChange}
                checked={formData["gift-wrap"] || false}
                disabled={formData.apple !== 'fuji'}
                className="ml-4"
              />
              <h5 className="text-sm text-red-300">Select Fuji to enable Me</h5>
            </label>
          </fieldset>
          <button type="submit" className="border-2 my-3 py-2 px-4 rounded-lg">
            Submit
          </button>
        </form>
      </section>
    </div>
  );
};

export default ControlledFormOps;
