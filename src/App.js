import React, { useState } from "react";
import "./App.css";
const App = () => {
  const [inputAdd, setInputAdd] = useState("");
  const [initialItem, setInitialItem] = useState([]);
  const [isEdit, setIsEdit] = useState("");
  const [inputEdit, setInputEdit] = useState(inputAdd);
  const [$date, $setDate] = useState(new window.Date());
  let day = $date.getDate();
  let month = $date.getMonth();
  let year = $date.getFullYear();
  let min = $date.getMinutes();
  let sec = $date.getSeconds();
  let hour = $date.getHours();
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  let week = days[$date.getDay()];

  function addHandler() {
    inputAdd &&
      setInitialItem([
        ...initialItem,
        {
          text: inputAdd,
          id: initialItem.length + 1,
          done: false,
          date: `${week} ${month} ${day} ${year} ${hour}:${min}:${sec}`,
        },
      ]);
    console.log($date);
    $setDate(new window.Date());
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
        <button onClick={addHandler} type="button" className="btn button-style">
          <i className="bi bi-plus-square-dotted"></i>
        </button>
      </div>
      <div>
        {initialItem.map((node, index) => {
          return (
            <div key={index} className="item-box m-3">
              {isEdit !== node.id ? (
                <div className="show-item">
                  {node.done ? (
                    <div>
                      <span className="text-muted">text : </span>
                      <s className="node-text">{node.text}</s>
                    </div>
                  ) : (
                    <div>
                      <span className="text-muted">text : </span>
                      <span className="node-text">{node.text}</span>
                    </div>
                  )}
                  <div>
                    <button
                      onClick={() => deletHnandler(node.id)}
                      className="button-style-show"
                    >
                      <i className="bi bi-trash3"></i>
                    </button>
                    <button
                      onClick={() => editHandler(node.id)}
                      className="button-style-show"
                    >
                      <i className="bi bi-pen"></i>
                    </button>
                    <button
                      onClick={() => doneHandler(node.id)}
                      className="button-style-show"
                    >
                      <i className="bi bi-check2"></i>
                    </button>
                  </div>
                </div>
              ) : (
                <div className="input-group w-75 edit">
                  <input
                    value={inputEdit}
                    onChange={(e) => setInputEdit(e.target.value)}
                    className="form-control"
                  />
                  <button onClick={() => saveHandler(node.id)} className="btn button-edit" type="button"><i className="bi bi-save"></i></button>
                  <button onClick={cancelHandler} className="btn button-edit" type="button"><i className="bi bi-x-circle"></i></button>
                </div>
              )}
              <hr className="hr-tag" />
              <div className="information">
                <p>done: {node.done ? "True" : "False"}</p>
                <p>
                  date:{node.date}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default App;
