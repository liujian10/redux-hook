export interface IAction {
  type: String
  payload?: Object
}

export interface IReducer {
  [key: string]: Function
}

export interface IState {
  [key: string]: any
}
