import React, { useReducer, useState } from "react";

// Creating form component with uncontrolled element

const formReducer = (state, e) => {
  return {
    ...state,
    [e.name]: e.value,
  };
};

const FormOps = () => {
  const [formData, setFormData] = useReducer(formReducer, {});
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // alert("You just submitted a file to Strakins");
    setSubmitting(true);
    // Create a settimeout
    setTimeout(() => {
      setSubmitting(false);
    }, 3000);
  };

  const handleChange = (e) => {
    const checkBox = e.target.type === 'checkbox'
    setFormData({
      name: e.target.name,
    //   value: e.target.value,
      value: checkBox ? e.target.checked : e.target.value,
    });
  };

  return (
    <div className="p-16">
      <section className="h-fit w-auto border-2 bg-slate-500 p-8 text-gray-200">
        <h1 className="text-4xl pb-2">How About Some Apples</h1>
        {submitting && (
          <div className="bg-white text-blue-600 border-2 rounded my-2 border-slate-500 w-1/2 p-2">
            <h4 className=""> You are submitting the following:</h4>
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
          <fieldset className="p-2 border-2  mb-3">
            <label htmlFor="">
              <p className="py-2">Name</p>
              <input
                type="text"
                name="name"
                onChange={handleChange}
                className="py-2 px-4 rounded-md text-gray-700"
              />
            </label>
          </fieldset>
          <fieldset className="p-2 border-2">
            <label htmlFor="">
              <p>Apple Juice</p>
              <select
                name="apple"
                onChange={handleChange}
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
                <p  className="py-2">Count</p>
                <input type="number" step={2} name="count" onChange={handleChange} className="py-2 px-1 rounded-sm text-gray-700" />
            </label>
            <label htmlFor="" >
                <p className="py-2">Gift Wrap</p>
                <input type="checkbox" name="gift-wrap" onChange={handleChange} className="ml-4" />
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

export default FormOps;
