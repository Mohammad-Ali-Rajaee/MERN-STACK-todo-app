// import { Link } from "react-router-dom";

import { useState } from "react";
import "../style.css";

const Members = () => {
  const [isShown, setIsShown] = useState(false);

  const handleShow = () => {
    setIsShown(!isShown);
  };

  return (
    <main>
      <div
        onClick={isShown ? handleShow : undefined}
        className="main_container w-full h-full"
      >
        <div className={`${isShown ? "bg" : ""} container w-5/6 max-w-4xl mx-auto`}>
          <div className="input_contain border border-blue-500 rounded-md my-5">
            <input
              type="text"
              placeholder="Find member ... "
              className="w-full h-full text-lg py-3 px-3 outline-none rounded-md"
            />
          </div>
          {/* <Link to={"/addMember"}> */}
          <button
            onClick={handleShow}
            className="w-full bg-blue-500 hover:bg-slate-700 text-lg text-white font-semibold hover:text-white py-3 px-3 border border-slate-500 hover:border-transparent rounded-md"
          >
            Add Member
          </button>
          {/* </Link> */}
          <div className="members mt-5 grid gap-3 sm:grid-cols-2 grid-cols-1">
            <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-3xl py-2">
              <div className="px-5 flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-full"
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Mohammad Ali Rajaee
                  </div>
                  <p className="text-gray-700 text-base">
                    <strong>Age : </strong> 21
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="flex">
                <strong className="mr-4"> Skills: </strong>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      react.js
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      css3
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      nodejs
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      express.js
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Languages:</strong> Arabic , germany
                  , japanese, English ...
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">LinkedIn Address:</strong>{" "}
                  muali.rajaee@linkedin.com
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Github Address:</strong>{" "}
                  m.a.rajaee115369@github.co
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Tasks:</strong> task 1 , task 2
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-3xl py-2">
              <div className="px-5 flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-full"
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Mohammad Ali Rajaee
                  </div>
                  <p className="text-gray-700 text-base">
                    <strong>Age : </strong> 21
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="flex">
                <strong className="mr-4"> Skills: </strong>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      react.js
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      css3
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      nodejs
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      express.js
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Languages:</strong> Arabic , germany
                  , japanese, English ...
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">LinkedIn Address:</strong>{" "}
                  muali.rajaee@linkedin.com
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Github Address:</strong>{" "}
                  m.a.rajaee115369@github.co
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Tasks:</strong> task 1 , task 2
                </p>
              </div>
            </div>
            <div className="max-w-md mx-auto rounded-md overflow-hidden shadow-3xl py-2">
              <div className="px-5 flex items-center">
                <img
                  className="w-20 h-20 object-cover rounded-full"
                  alt="profile"
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSzHQv_th9wq3ivQ1CVk7UZRxhbPq64oQrg5Q&usqp=CAU"
                />
                <div className="px-6 py-4">
                  <div className="font-bold text-xl mb-2">
                    Mohammad Ali Rajaee
                  </div>
                  <p className="text-gray-700 text-base">
                    <strong>Age : </strong> 21
                  </p>
                </div>
              </div>
              <div className="px-6 py-4 flex flex-col gap-2">
                <div className="flex">
                <strong className="mr-4"> Skills: </strong>
                  <div className="flex flex-wrap gap-2">
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      react.js
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>{" "}
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      html5
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      css3
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      nodejs
                    </span>
                    <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">
                      express.js
                    </span>
                  </div>
                </div>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Languages:</strong> Arabic , germany
                  , japanese, English ...
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">LinkedIn Address:</strong>{" "}
                  muali.rajaee@linkedin.com
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Github Address:</strong>{" "}
                  m.a.rajaee115369@github.co
                </p>
                <p className="text-gray-700 text-base">
                  <strong className="mr-4">Tasks:</strong> task 1 , task 2
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        className={`${
          isShown && "active"
        } add-member flex flex-col py-5 px-5 h-max justify-evenly absolute left-1/2 top-1/2 shadow-3xl rounded-3xl bg-white w-1/2`}
      >
        <h3 className="font-semibold text-xl text-center">Add Member</h3>
        <form className="flex flex-col py-2">
          <div className="flex items-center justify-between mt-1.5">
            <label htmlFor="name">Full Name: </label>
            <input
              type="text"
              id="name"
              className="focus-within:outline-none border border-gray-400 rounded-md w-1/2 px-2 py-1"
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <label htmlFor="age">Age: </label>
            <input
              type="number"
              id="age"
              className="focus-within:outline-none border border-gray-400 rounded-md w-1/2 px-2 py-1"
            />
          </div>
          <div className="flex items-center justify-between mt-1.5">
            <label htmlFor="github">GitHub Address: </label>
            <input
              type="text"
              id="github"
              className="focus-within:outline-none border border-gray-400 rounded-md w-1/2 px-2 py-1"
            />
          </div>{" "}
          <div className="flex items-center justify-between mt-1.5">
            <label htmlFor="linkedin">LinkedIn Address: </label>
            <input
              type="text"
              id="linkedin"
              className="focus-within:outline-none border border-gray-400 rounded-md w-1/2 px-2 py-1"
            />
          </div>
          <div className="skills flex items-center justify-between mt-1.5">
            <label htmlFor="skills">Your Skills: </label>
            <div className="skill-input border border-gray-400 rounded-md w-1/2 flex">
              <input
                type="text"
                id="skills"
                className="focus-within:outline-none rounded-md px-2 py-1 w-4/5"
              />
              <button
                onClick={(e) => e.preventDefault}
                className="bg-gray-200 rounded-md px-2 py-1 font-semibold"
              >
                Add
              </button>
            </div>
          </div>
          <div className="skill-container flex flex-wrap items-center gap-2 pt-1.5">
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              react
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              express
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              mongodb
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              nodejs
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              nodejs
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              nodejs
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              nodejs
            </span>
            <span className="bg-gray-200 border border-gray-400 rounded-md px-1 py-1">
              nodejs
            </span>
          </div>
          <div className="languages flex items-center justify-between mt-1.5">
            <p>Your Languages: </p>
            <div className="flex gap-4">
              <div className="flex items-center gap-0.5">
                <label htmlFor="arabic">Arabic</label>
                <input type="checkbox" name="arabic" id="arabic" />
              </div>
              <div className="flex items-center gap-0.5">
                <label htmlFor="english">English</label>
                <input type="checkbox" name="english" id="english" />
              </div>
              <div className="flex items-center gap-0.5">
                <label htmlFor="persian">Persian</label>
                <input type="checkbox" name="persian" id="persian" />
              </div>
            </div>
          </div>
          <button
            type="submit"
            className="bg-blue-500 hover:bg-slate-700 mt-7 text-white font-semibold hover:text-white py-2 px-3 border border-slate-500 hover:border-transparent rounded-md"
          >
            Submit
          </button>
        </form>
      </div>
    </main>
  );
};

export default Members;
