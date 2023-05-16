import {
  Search,
  EditRectangle,
  RemoveRectangle,
} from "react-huge-icons/outline";
import { useEffect, useState } from "react";
import { useCollectionState } from "../context/todoContext";
import { getTodoById, updateTodo } from "../Api/apiHandler";

const Home = () => {
  const { state, fetchAll, createTodo, removeTodo, todoDispatch } =
    useCollectionState();
  const { isLoading, todos } = state;

  useEffect(() => {
    fetchAll();
  }, [fetchAll]);

  useEffect(() => {
    console.log(todos);
  }, [todos]);

  const [isEditing, setIsEditing] = useState(false);
  const [editing, setEditing] = useState({
    title: "",
    complete: false,
  });
  const submitHandler = async (newTodo) => {
    createTodo(newTodo);
    setEditing({
      title: "",
      complete: false,
    });
    setIsEditing(false);
  };

  const editHandler = async ({ _id, title, complete }) => {
    const temp = await updateTodo(_id, { title, complete });
    todoDispatch({
      type: "UPDATE",
      payload: temp,
    });
    // editTodo({ _id, title, complete });
    setIsEditing(false);
    setEditing({
      title: "",
      complete: false,
    });
  };

  const deleteHandler = (_id) => {
    removeTodo(_id);
  };

  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(!isShown);
  };
  const editor = async (id) => {
    getTodoById(id)
      .then((res) => {
        setEditing(res);
      })
      .then(() => setIsEditing("editing"));
    handleShow();
  };

  const adder = (e) => {
    e.preventDefault();
    setIsEditing("adding");
    handleShow();
  };

  const [search, setSearch] = useState("");
  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  return (
    <main>
      <div
        onClick={isShown ? handleShow : undefined}
        className={`${
          isShown ? "bg" : ""
        } main_container h-screen w-full flex flex-col items-center`}
      >
        <div className="p-header bg-primary w-full relative flex flex-col items-center justify-end gap-2 py-3">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
            alt="a shape in the corner"
            className="rounded-full w-28 h-28 object-cover"
          />
          <h4 className="font-semibold text-white">Welcome Aiony Haust</h4>
          <button
            className="font-semibold text-primary bg-white rounded-md py-1 px-3"
            // onClick={logoutHandler}
          >
            Logout
          </button>
          <div className="search-box flex border items-center rounded-full bg-white gap-1 px-2 h-9 max-w-sm w-3/5">
            <Search className="bg-inherit text-lg rounded-full w-6 h-6" />
            <input
              placeholder="Search"
              className="w-full bg-inherit focus:outline-none text-sm"
              type="text"
              name="search"
              id="search"
              value={search}
              onChange={(e) => searchHandler(e)}
            />
          </div>
        </div>
        <div className="p-todo__container h-full w-full bg-secondary px-6 py-4">
          <div className="p-todos max-w-2xl w-full mx-auto h-max">
            <div className="p-todos__header flex items-center justify-between">
              <h3 className="text-base text-primary font-bold py-4">
                Today's Tasks
              </h3>
              <button
                onClick={adder}
                className="bg-primary text-white rounded-md text-base font-bold py-2 px-4 border-2 border-inherit hover:text-primary hover:bg-inherit hover:border-2 hover:border-primary"
              >
                Add Todo
              </button>
            </div>
            <ul className="p-task__container flex flex-col p-2 gap-2">
              {todos?.map(({ title, complete, _id }, index) => {
                if (title.includes(search))
                  return (
                    <li
                      key={index}
                      className="w-full h-12 flex items-center px-2 rounded-xl shadow-3xl bg-white justify-between"
                    >
                      <div className="task">
                        <input
                          className=" cursor-pointer"
                          id={_id}
                          onChange={() =>
                            editHandler({ _id, title, complete: !complete })
                          }
                          type="checkbox"
                          checked={complete}
                        />{" "}
                        <label className="pl-2 cursor-pointer" htmlFor={_id}>
                          {title}
                        </label>{" "}
                      </div>
                      <div className="btns mr-3 flex gap-3 justify-between items-center">
                        <EditRectangle
                          className="hover:scale-150 hover:text-green-500"
                          onClick={() => editor(_id)}
                          title="Edit Todo"
                        />
                        <RemoveRectangle
                          className="hover:scale-150 hover:text-red-500"
                          onClick={() => deleteHandler(_id)}
                          title="Delete Todo"
                        />
                      </div>
                    </li>
                  );
              })}
            </ul>
          </div>
          {isLoading && (
            <div role="status" className="flex justify-center my-8">
              <svg
                aria-hidden="true"
                className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600"
                viewBox="0 0 100 101"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                  fill="currentColor"
                />
                <path
                  d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                  fill="currentFill"
                />
              </svg>
              <span className="sr-only">Loading...</span>
            </div>
          )}
        </div>
      </div>
      <div
        className={`${
          isEditing === "adding" && isShown ? "active" : ""
        } add-member w-5/6 max-w-md flex flex-col py-5 px-5 h-max justify-evenly absolute left-1/2 top-1/2 shadow-3xl rounded-3xl bg-white`}
      >
        <form
          className="w-full m-auto py-4 flex flex-col items-center gap-6"
          onSubmit={(e) => {
            e.preventDefault();
            submitHandler(editing);
            handleShow();
          }}
        >
          <h3 className="text-2xl font-semibold">Add Todo</h3>
          <div className="md:flex md:items-center w-full">
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
                value={editing.title}
                required
                onChange={(e) =>
                  setEditing({ ...editing, title: e.target.value })
                }
                type="text"
              />
            </div>
          </div>

          <div className="md:flex md:items-center mb-6">
            <label className=" block font-semibold">
              <input
                className="mr-2 leading-tight"
                checked={editing.complete}
                onChange={(e) =>
                  setEditing({ ...editing, complete: !editing.complete })
                }
                type="checkbox"
              />
              <span className="text-sm">The task is completed</span>
            </label>
          </div>
          <div className="md:flex md:items-center">
            <div>
              <button
                className="bg-transparent hover:bg-slate-700 font-semibold hover:text-white py-2 px-4 border border-slate-500 hover:border-transparent rounded-md"
                type="submit"
              >
                Add
              </button>
            </div>
          </div>
        </form>
      </div>
      {isEditing && (
        <div
          className={`${
            isEditing === "editing" && isShown ? "active" : ""
          } add-member flex flex-col py-5 px-5 h-max justify-evenly absolute left-1/2 top-1/2 shadow-3xl rounded-3xl bg-white w-1/2`}
        >
          <form
            onSubmit={(e) => {
              e.preventDefault();
              editHandler(editing);
              handleShow();
            }}
            className="flex flex-col gap-10 items-center"
          >
            <h3 className="text-2xl font-semibold">Editing Todo</h3>
            <input
              type="text"
              value={editing.title}
              onChange={(e) =>
                setEditing({ ...editing, title: e.target.value })
              }
              className="focus-within:outline-none w-full border border-gray-400 rounded-md px-2 py-1"
            />
            <button
              type="submit"
              className="bg-blue-500 hover:bg-slate-700 text-white font-semibold hover:text-white py-2 px-3 border border-slate-500 hover:border-transparent rounded-md"
            >
              Submit
            </button>
          </form>
        </div>
      )}
    </main>
  );
};

export default Home;
