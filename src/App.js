import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [inputAdd, setInputAdd] = useState("");
  const [initialItem, setInitialItem] = useState([]);
  const [isEdit, setIsEdit] = useState("");
  const [inputEdit, setInputEdit] = useState(inputAdd);
  function addHandler() {
    inputAdd &&
      setInitialItem([
        ...initialItem,
        { text: inputAdd, id: initialItem.length + 1, done: false },
      ]);
    setInputAdd("");
  }
  function deletHnandler(index) {
    const temp = initialItem.filter((item) => item.id !== index);
    setInitialItem([...temp]);
  }
  function editHandler(index) {
    setIsEdit(index);
    setInputEdit(initialItem.find((node) => node.id === index).text);
  }
  function cancelHandler() {
    setIsEdit("");
  }
  function saveHandler(index) {
    let newArr = [...initialItem];
    newArr.find((node) => node.id === index).text = inputEdit;
    setInitialItem(newArr);
    setIsEdit(false);
  }
  function doneHandler(index) {
    let newArr = [...initialItem];
    const target = newArr.find((node) => node.id === index);
    target.done = !target.done;
    setInitialItem([...newArr]);
  }
  return (
    <div className="App">
      <div className="input-group m-3">
        <input
          value={inputAdd}
          onChange={(e) => setInputAdd(e.target.value)}
          className="form-control"
        />
        <button
          onClick={addHandler}
          type="button"
          className="btn button-style"
        >
          <i class="bi bi-plus-square-dotted"></i>
        </button>
      </div>
      <div>
        {initialItem.map((node, index) => {
          return (
            <div key={index} className="item-box m-3">
              {isEdit !== node.id ? (
                <div className="show-item m-3">
                  {node.done ? (
                    <div>
                      <span className="text">text : </span>
                      <s onClick={() => doneHandler(node.id)} className="node-text">{node.text}</s>
                    </div>
                  ) : (
                    <div>
                      <span className="text">text : </span>
                      <span onClick={() => doneHandler(node.id)}
                      className="node-text"
                      >
                        {node.text}
                      </span>
                    </div>
                  )}
                  <div>
                    <button onClick={() => {deletHnandler(node.id);}} className=""><i class="bi bi-trash3"></i></button> 
                    <button onClick={() => editHandler(node.id)} className=""><i class="bi bi-pen"></i></button>
                  </div>
                </div>
              ) : (
                <div>
                  <input
                    value={inputEdit}
                    onChange={(e) => setInputEdit(e.target.value)}
                  />
                  <button onClick={() => saveHandler(node.id)}>save</button>
                  <button onClick={cancelHandler}>cacel</button>
                </div>
              )}
              <hr className="hr-tag"/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
