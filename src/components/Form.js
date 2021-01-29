import React from 'react';

const Form = ({setInputText, todos, setTodos, inputText}) => {

   const inputTextHandler = (e) => {
       console.log(e.target.value);
       setInputText(e.target.value);
   };

  const submitTodoHandler = (e) => {
    e.preventDefault();
    setTodos([
        ...todos,
        {text: inputText, completed: false, id: Math.random() * 1000}
    ])
    setInputText("");
  };

  //set the state back to blank
//  setInputText("");

    return(

    //code copied from https://github.com/developedbyed/vanilla-todo/blob/master/index.html
     <form>
          <input value={inputText} onChange={inputTextHandler} type="text" className="todo-input" />
          <button onClick={submitTodoHandler} className="todo-button" type="submit">
            <i className="fas fa-plus-square"></i>
          </button>
          <div className="select">
            <select name="todos" class="filter-todo">
              <option value="all">All</option>
              <option value="completed">Completed</option>
              <option value="uncompleted">Uncompleted</option>
            </select>
          </div>
        </form>
    );
}

export default Form;