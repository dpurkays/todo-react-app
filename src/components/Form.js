import React from 'react';

const Form = ({setInputText}) => {
    const inputTextHandler = (e) => {
        console.log(e.target.value);
        setInputText(e.target.value);
    };

    return(

    //code copied from https://github.com/developedbyed/vanilla-todo/blob/master/index.html
     <form>
          <input onChange={inputTextHandler} type="text" className="todo-input" />
          <button className="todo-button" type="submit">
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