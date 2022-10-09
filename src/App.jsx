import React from "react";
import ReactDOM from "react-dom/client";
import Table from "./Table";

function App() {
  return (
    <>
      <h1>Тестовое задание для WelbeX</h1>
      <p>
        {" "}
        Здесь я хочу перечислить требования ТЗ и мой ход мысли по тестовому,
        подробно описать, как что делал, если будет время
      </p>
      <Table />
    </>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
