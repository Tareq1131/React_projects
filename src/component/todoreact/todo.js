import React, { useEffect, useState } from "react";
import "./style.css";
import { isEditable } from "@testing-library/user-event/dist/utils";

//get the local storage data
const getLocalData=()=>{
  const lists = localStorage.getItem("mytodolist");
  if(lists){
    return JSON.parse(lists);
  }else{
    return [];
  }
}

const Todo = () => {
  const [inputData, setInputDta] = useState("");
  // const [items, setItems] = useState([]);
  const [items, setItems] = useState(getLocalData());
  //for edit items
  const[iseditItem, setEditItem]=useState("");
  const[toggleButton, setToggleButton]=useState(false);
  //console.log(inputData);
  //console.log(items);


//add the items function
  const addItem = () => {
    if (!inputData) {
      alert("please fill the data...");
    } 
    //for edit work
    else if(inputData &&toggleButton ){
        setItems(
          items.map( (curElem)=>{
              if(curElem.id === iseditItem){
                return{...curElem, name:inputData}
              }
             return curElem;
          })
        )
        //for edit set
        setInputDta("");
    setEditItem(null);
    setToggleButton(false);
    }
    
    else {
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

  //edit 
  const editItem =(index)=>{
    const itemEdit = items.find( (curElem)=>{
     return curElem.id ===index;
    })
    setInputDta(itemEdit.name);
    setEditItem(index);
    setToggleButton(true);
  }

  //remove all 
  const removeAll=()=>{
    setItems([]);
  }
  //useeffect hook adding local storage
  useEffect(()=>{
    localStorage.setItem("mytodolist", JSON.stringify(items));
  },[items])
  
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
              {toggleButton ? (<i className="far fa-edit add-btn" onClick ={addItem }></i>):(
              <i className="fa fa-plus add-btn" onClick ={addItem }></i>)
              
              }
            {/* <i className="far fa-edit add-btn"></i> */}
            {/* <i className="fa fa-plus add-btn" onClick ={addItem }></i> */}
          </div>


          {/* show items */}
          <div className="showItems">
            {
                items.map( (curElem)=>{
                  return(
                    <div className="eachItem" key={curElem.id}>
                    <h>{curElem.name}</h>
                    <div className="todo-btn">
                      <i className="far fa-edit add-btn"
                      onClick={()=> editItem(curElem.id)}></i>
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
