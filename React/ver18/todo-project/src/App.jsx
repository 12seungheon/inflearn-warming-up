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
  const getStyle = () => {
    return {
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: "none",
    };
  };

  const todoData = [
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
  ];

  return (
    <>
      <div className="container">
        <div className="todoBlock">
          <div className="title">
            <h1>할 일 목록</h1>

            {todoData.map((data) => (
              <div style={getStyle()}>
                <button style={btnStyle}>x</button>
                <input type="checkbox" defaultChecked={false} />
                {data.title}
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
