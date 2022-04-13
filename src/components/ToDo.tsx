import { useSetRecoilState } from 'recoil'
import { categories, IToDo, toDoState } from '../atoms'

function ToDo({ text, id, category }: IToDo) {
  // toDos의 카테고리를 바꾸는 함수
  const setToDos = useSetRecoilState(toDoState)
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
  return (
    <li>
      <span>{text}</span>
      {/* 카테고리가 DOING이 아닐 때만 Doing버튼 보여주기 */}
      {category !== categories.DOING && (
        // 인자가 있는 onClick 처리하기
        // 무슨 버튼이 눌렸는지 onClick함수에 인자로 넘겨줌
        <button onClick={() => onClick(categories.DOING)}>Doing</button>
      )}
      {category !== categories.TO_DO && (
        <button onClick={() => onClick(categories.TO_DO)}>To Do</button>
      )}
      {category !== categories.DONE && (
        <button onClick={() => onClick(categories.DONE)}>Done</button>
      )}
    </li>
  )
}

export default ToDo
