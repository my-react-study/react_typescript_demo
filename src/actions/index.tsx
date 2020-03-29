import { INCREMENT, DECREMENT } from "../constants";

// Actions
export interface IINCREMENTAction {
  type: INCREMENT;
}

export interface IDECREMENTAction {
  type: DECREMENT;
}

// 定义 modifyAction 联合类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;

// Action Creators
// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
});

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
});
