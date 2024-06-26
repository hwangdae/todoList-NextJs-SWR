"use client";
import React from "react";
import { fetcher } from "@/app/swr";
import { Button } from "@mui/material";
import axios from "axios";
import Link from "next/link";
import useSWR from "swr";

const TodoList = () => {
  const { data: todoList, mutate, error } = useSWR(process.env.NEXT_PUBLIC_URL,fetcher);
  console.log(todoList)

  const todoDelHandler = async (id) => {
    await axios.delete(`${process.env.NEXT_PUBLIC_URL}/${id}`);
    mutate();
  };

  return (
    <main className="">
      {todoList?.map((todo) => {
        return (
          <Link
            key={todo.id}
            className="flex justify-between bg-red-200 p-2 rounded-md mb-2"
            href={`/pages/detail/${todo.id}`}
          >
            <h1 className="text-lg">{todo.todo}</h1>

            <div className="flex gap-2">
              {/* <Button variant="contained" size="small">
                <Link>Edit</Link>
              </Button> */}
              <Button
                variant="contained"
                size="small"
                onClick={() => todoDelHandler(todo.id)}
              >
                Delete
              </Button>
            </div>
          </Link>
        );
      })}
    </main>
  );
};

export default TodoList;
