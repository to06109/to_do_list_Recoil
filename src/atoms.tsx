import { atom, selector } from 'recoil'

export enum categories {
  'TO_DO',
  'DOING',
  'DONE',
}

// toDo배열 설명
export interface IToDo {
  text: string
  id: number
  // 카테고리: 할 일(TO_DO), 하고있는 일(DOING), 한 일(DONE)
  category: categories
}

// categoryState의 값이 'TO_DO' | 'DOING' | 'DONE' 일 거라고 알려줌
export const categoryState = atom<categories>({
  key: 'catagory',
  default: categories.TO_DO,
})

// atom 만들기
// atom의 type은 ToDo 배열
export const toDoState = atom<IToDo[]>({
  key: 'toDos',
  default: [],
})

export const toDoSelector = selector({
  key: 'toDoSelector',
  get: ({ get }) => {
    const toDos = get(toDoState)
    const category = get(categoryState)
    // 카테고리에 따라 하나의 배열만 filter
    return toDos.filter((toDo) => toDo.category === category)
  },
})
