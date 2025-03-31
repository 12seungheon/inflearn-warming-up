import { useState } from "react";
import "./App.css";

function App() {
  const btnStyle = {
    color: "#fff",
    border: "none",
    padding: "5px 9px",
    borderRadius: "50%", // 오타 수정
    cursor: "pointer",
    float: "right",
  };

  // 함수형 컴포넌트에서 함수 선언
  const getStyle = (completed) => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: completed ? "line-through" : "none",
    };
  };

  const [todoData, setTodoData] = useState([
    {
      id: 1,
      title: "공부하기",
      completed: false,
    },
    {
      id: 2,
      title: "운동하기",
      completed: false,
    },
    {
      id: 3,
      title: "게임하기",
      completed: false,
    },
  ]);
  const [value, setValue] = useState("");

  const handleClick = (id) => {
    let newTodoData = todoData.filter((data) => data.id !== id);
    console.log("newTodoData", newTodoData);
    setTodoData(newTodoData);
  };

  const handleChange = (e) => {
    console.log("e.target.value", e.target.value);
    setValue(e.target.value);
  };

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

  const hadleCompleteChane = (id) => {
    let newTodoData = todoData.map((data) => {
      if (data.id === id) {
        data.completed = !data.completed;
      }
      return data;
    });
    setTodoData(newTodoData);
  };
  return (
    <>
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>

            {todoData.map((data) => (
              <div style={getStyle(data.completed)} key={data.id}>
                <button style={btnStyle} onClick={() => handleClick(data.id)}>
                  x
                </button>
                <input
                  type="checkbox"
                  defaultChecked={false}
                  onChange={() => hadleCompleteChane(data.id)}
                />
                {data.title}
              </div>
            ))}
            <form style={{ display: "flex" }} onSubmit={handleSubmit}>
              <input
                type="text"
                name="value"
                style={{ flex: "10", padding: "5px" }}
                placeholder="할 일을 입력하세요"
                value={value}
                onChange={handleChange}
              />
              <input
                type="submit"
                value="제출"
                className="btn"
                style={{ flex: "1" }}
              />
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
