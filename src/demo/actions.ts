export const increment = (count: number) => ({
  type: 'CHANGE_COUNT',
  payload: count + 1,
})

export const decrement = (count: number) => ({
  type: 'CHANGE_COUNT',
  payload: count - 1,
})

export const changeText = (text: string) => ({
  type: 'CHANGE_TEXT',
  payload: text,
})
