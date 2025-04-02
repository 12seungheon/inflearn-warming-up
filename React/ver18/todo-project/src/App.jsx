import { useState } from "react";
import "./App.css";
import List from "./components/List";
import Form from "./components/Form";

function App() {
  const [todoData, setTodoData] = useState([
    // {
    //   id: 1,
    //   title: "공부하기",
    //   completed: false,
    // },
    // {
    //   id: 2,
    //   title: "운동하기",
    //   completed: false,
    // },
    // {
    //   id: 3,
    //   title: "게임하기",
    //   completed: false,
    // },
  ]);
  const [value, setValue] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      id: Date.now(),
      title: value,
      completed: false,
    };

    setTodoData([...todoData, newTodo]);
    setValue("");
  };

  return (
    <>
      <div className="flex items-center justify-center w-screen h-screen bg-blue-200">
        <div className="w-full p-6 m-4 bg-white rounded shadow lg:w-3/4 lg:max-w-lg">
          <div className="flex justify-between mb-3">
            <h1>할 일 목록</h1>
            <List todoData={todoData} setTodoData={setTodoData} />

            <Form
              value={value}
              handleSubmit={handleSubmit}
              setValue={setValue}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
