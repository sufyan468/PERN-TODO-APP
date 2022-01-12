import React, { Fragment, useState } from "react";

const InputTodo = () => {
  const [description, setDescription] = useState("");

  const onSubmitForm = async (e) => {
    e.preventDefault();
    try {
      const body = { description };
      const response = await fetch("http://localhost:3001/todos", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      window.location = "/";
    } catch (err) {
      console.error(err.message);
    }
  };

  return (
    <Fragment>
      <div className="bg-secondary p-5 my-3 text-white">
        <h1 className="text-center mb-3">Pern Todo List</h1>
        <form className="d-flex mt-5" onSubmit={onSubmitForm}>
          <input
            type="text"
            className="form-control py-2"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
          <button className="btn btn-primary">Add</button>
        </form>
      </div>
    </Fragment>
  );
};

export default InputTodo;
