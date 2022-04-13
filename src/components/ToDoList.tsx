import React, { useState } from 'react'

import { useForm } from 'react-hook-form'
import { atom, useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { categories, categoryState, toDoSelector, toDoState } from '../atoms'
import CreateToDo from './CreateToDo'
import ToDo from './ToDo'

function ToDoList() {
  // toDos에 접근
  // const toDos = useRecoilValue(toDoState)

  // selector를 이용해 현재 카테고리에 해당하는 todo배열을 받음
  const toDos = useRecoilValue(toDoSelector)
  // select값과 atom 연결
  const [category, setCategory] = useRecoilState(categoryState)

  // select 변경 감지
  const onInput = (event: React.FormEvent<HTMLSelectElement>) => {
    // select의 value알려줌
    // setCategory의 type은 세 카테고리 중 하나여야 하는데
    // value는 그냥 string으로만 봐서 as any 붙여줘야함
    setCategory(event.currentTarget.value as any)
  }
  return (
    <div>
      <h1>To Dos</h1>
      <hr />
      <select value={category} onInput={onInput}>
        <option value={categories.TO_DO}>To Do</option>
        <option value={categories.DOING}>Doing</option>
        <option value={categories.DONE}>Done</option>
      </select>
      <CreateToDo />
      {toDos?.map((toDo) => (
        <ToDo key={toDo.id} {...toDo} />
      ))}
    </div>
  )
}

export default ToDoList
