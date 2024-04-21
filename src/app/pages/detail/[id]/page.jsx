"use client";
import { fetcher } from "@/app/swr";
import { Button } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import useSWR from "swr";

const page = ({ params }) => {
  const {
    data: todoList,
    mutate,
    error,
  } = useSWR(process.env.NEXT_PUBLIC_URL, fetcher);
  const { id } = params;
  const [toggle, setToggle] = useState(false);
  const [newText,setNewText] = useState("")

  const todo = todoList?.find((todo) => {
    return todo.id == id;
  });
  const todoUpdateHandler = async() => {
    const newTodo ={
      id,
      todo : newText
    }
    await axios.put(`${process.env.NEXT_PUBLIC_URL}/${id}`,newTodo)
    mutate()
    setToggle(false)
  }

  return (
    <div className=" bg-red-200 p-2 rounded-md">
      {toggle ? (
        <div className="flex justify-between">
          <input value={newText} onChange={(e)=>setNewText(e.target.value)}></input>
          <div className="flex gap-1">
            <Button onClick={todoUpdateHandler} variant="contained" size="small">
              수정
            </Button>
            <Button
              onClick={() => setToggle(false)}
              variant="contained"
              size="small"
            >
              취소
            </Button>
          </div>
        </div>
      ) : (
        <div className="flex justify-between">
          <h1>{todo?.todo}</h1>
          <Button
            onClick={() => setToggle(true)}
            variant="contained"
            size="small"
          >
            Edit
          </Button>
        </div>
      )}
    </div>
  );
};

export default page;
