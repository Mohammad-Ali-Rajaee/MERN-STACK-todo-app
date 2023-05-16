import { useState } from "react";
// import { addTodo } from "../Api/apiHandler";
import { Link } from "react-router-dom";

const NewTodo = () => {
  const [formField, setFormField] = useState({
    title: "",
    isDone: false,
  });

  function titleChange(e) {
    setFormField({ ...formField, title: e.target.value });
  }

  function checkboxHandler(e) {
    setFormField({ ...formField, isDone: e.target.checked });
  }

  const addingTodo = () => {
    // formField.title && addTodo(formField);
    console.log("formfield :", formField);
  };

  return (
    <div className="p-form__container w-full h-full">
      <form className="w-full max-w-xl m-auto my-14">
        <div className="md:flex md:items-center mb-6">
          <div className="pr-4">
            <label
              className="block font-semibold w-max md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-full-name"
            >
              Title :
            </label>
          </div>
          <div className="w-full">
            <input
              className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-gray-200"
              id="inline-full-name"
              value={formField.title}
              required
              onChange={(e) => titleChange(e)}
              type="text"
            />
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div></div>
          <label className=" block font-semibold">
            <input
              className="mr-2 leading-tight"
              value={formField.isDone}
              onChange={(e) => checkboxHandler(e)}
              type="checkbox"
            />
            <span className="text-sm">The task is completed</span>
          </label>
        </div>
        <div className="md:flex md:items-center">
          <div>
            <Link to={"/todos"}>
              <button
                className="bg-transparent hover:bg-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded-md"
                type="submit"
                onClick={() => addingTodo()}
              >
                Add
              </button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
};

export default NewTodo;
