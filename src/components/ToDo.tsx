import { useRecoilState, useRecoilValue, useSetRecoilState } from 'recoil'
import { categoryState, IToDo, selecCateState, toDoState } from '../atoms'

function ToDo({ text, id, category }: IToDo) {
  const [ToDos, setToDos] = useRecoilState(toDoState)
  const cate = useRecoilValue(categoryState)
  // toDos의 카테고리를 바꾸는 함수
  // const setToDos = useSetRecoilState(toDoState)
  // newCategory 타입 설명
  const onClick = (newCategory: IToDo['category']) => {
    setToDos((oldToDos) => {
      // toDo의 id가 props에서 온 id와 같은지 비교
      // -> toDos에서 category바꿀 to do 위치 찾기
      const targetIndex = oldToDos.findIndex((toDo) => toDo.id === id)
      // category를 클릭한 버튼으로 바꿔줌
      const newToDo = { text, id, category: newCategory }
      return [
        ...oldToDos.slice(0, targetIndex),
        newToDo,
        ...oldToDos.slice(targetIndex + 1),
      ]
    })
  }
  localStorage.setItem('todo', JSON.stringify(ToDos))
  return (
    <li>
      <span>{text}</span>
      {/* 선택된 카테고리 빼고 버튼 보여주기  */}
      {cate.map((cate) => {
        if(cate !== category){
          return <button onClick={() => onClick(cate)}>{cate}</button>
        }
      })}
    </li>
  )
}

export default ToDo
