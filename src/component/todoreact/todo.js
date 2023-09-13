import React, { useState } from "react";
import "./style.css";

const Todo = () => {
  const [inputData, setInputDta] = useState("");
  const [items, setItems] = useState([]);
  //console.log(inputData);
  //console.log(items);


//add the items function
  const addItem = () => {
    if (!inputData) {
      alert("please fill the data...");
    } else {
      const myNewInputData={
        id: new Date().getTime().toString(),
        name: inputData,
      }
      // setItems([...items, inputData]);
      setItems([...items, myNewInputData]);
      setInputDta ("");
    }
  };
//delete items using this function
  const deleteItem =(index)=>{
    const updateItem = items.filter( (curElem)=>{
        return curElem.id !== index;

    })
    setItems(updateItem);
  }

  //remove all 
  const removeAll=()=>{
    setItems([]);
  }

  return (
    <>
      <div className="main-div">
        <div className="child-div">
          <figure>
            <img src="./images/todo.svg" alt="image" />
            <figcaption>Add Your List Here</figcaption>
          </figure>
          <div className="addItems">
            <input
              type="text"
              placeholder="✍ Add Item"
              className="form-control"
              value={inputData}
              onChange={(even) => setInputDta(even.target.value)}
            />

            {/* <i className="far fa-edit add-btn"></i> */}
            <i className="fa fa-plus add-btn" onClick ={addItem }></i>
          </div>
          {/* show items */}
          <div className="showItems">
            {
                items.map( (curElem)=>{
                  return(
                    <div className="eachItem" key={curElem.id}>
                    <h>{curElem.name}</h>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn"></i>
                      <i className="far fa-trash-alt add-btn"
                       onClick={()=> deleteItem(curElem.id)}></i>
                    </div>
                  </div>
                
                  )
                })

            }
        
        </div>
          {/* remove all button */}
          <div className="showItems">
            <button
              className="btn effect04"
              data-sm-link-text="Remove All"
               onClick={removeAll}
            >
              <span> CHECK LIST</span>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Todo;
