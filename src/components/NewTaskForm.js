import React, { useState }from "react";


function NewTaskForm({ onTaskFormSubmit, categories }) {
  const [text, setText] = useState("");
  const [category, setCategory] = useState("code")

  function handleSubmit(e) {
    e.preventdefault();
    onTaskFormSubmit({ category, text});
    setCategory("code")
    setText("")
  }

  function onChangeText(event) {
      setText(event.target.value);
  }

  function onChangeCategory(event) {
    setCategory(event.target.value);
  }

    return (
      <form className="new-task-form" onSubmit={handleSubmit}>
        <label>
          Details
          <input
          type="text"
          name="text"
          onChange={onChangeText}
          />
        </label>
        <label>
          Category
          <select name="category" onChange={onChangeCategory}>
            {/* render <option> elements for each category here */}
            {categories.map((lists) => {
              <option key={lists}>{lists}</option>
            })}
          </select>
        </label>
        <input type="submit" value="Add task" />
      </form>
    );
  }

export default NewTaskForm;
