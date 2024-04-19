"use client";
import React,{ useState } from "react";
import axios from "axios";
import uuid from "react-uuid";
import { Button } from "@mui/material";
import useSWR from "swr";
import { fetcher } from "@/app/swr";

const Form = () => {
  const [inputText, setInputtext] = useState("");

  const { mutate, error } = useSWR(
    process.env.NEXT_PUBLIC_URL,
    fetcher
  );

  const addTodoHandler = async(e) => {
    e.preventDefault()
    const newTodo = {
      id: uuid(),
      todo: inputText,
    };
    await axios.post(process.env.NEXT_PUBLIC_URL, newTodo);
    mutate()
  };

  return (
    <form className="flex justify-center items-center gap-2 mb-8">
      <label>TODO : </label>
      <input
        className="border w-4/12"
        type="text"
        placeholder="Enter Todo"
        value={inputText}
        onChange={(e) => setInputtext(e.target.value)}
      ></input>
      <Button variant="contained" size="small" onClick={addTodoHandler}>ADD</Button>
      <Button variant="outlined" size="small" type="button" onClick={() => setInputtext("")}>CLEAR</Button>
    </form>
  );
};

export default Form;
