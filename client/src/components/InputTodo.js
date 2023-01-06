import React, { Fragment, useState } from "react";

const InputTodo = () => {


    const [description, setDescription] = useState("");

    const onSubmitform = async e => {
        e.preventDefault();

        try {
            const body = { description };
            const response = await fetch("http://localhost:4000/todos", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(body)
            });
            console.log(response);
            window.location = "/";
        } catch (err) {
            console.error(err.message);
        }
    }



    return (
        <Fragment>

            <h2 className="text-center mt-5"> <hr />PERN Todo List <hr /></h2>

            <form className="d-flex flex-column mt-4" onSubmit={onSubmitform}>
                <div className="form-group">
                    <label className="form-label" for="email">Enter your todo here : </label>
                    <input
                        type="text"
                        className="form-control"
                        value={description}
                        onChange={e => setDescription(e.target.value.trimStart())}
                        required
                    />
                </div>
                <button type="submit" className="btn btn-success btn-md form-btn"> Add </button>
            </form>
        </Fragment>
    );
};

export default InputTodo;