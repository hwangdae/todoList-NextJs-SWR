import Image from "next/image";
import Form from "./components/todoList/Form";
import Header from "./components/todoList/Header";
import TodoList from "./components/todoList/TodoList";

export default function Home() {
  return (
    <>
      <Form />
      <TodoList/>
    </>
  );
}
