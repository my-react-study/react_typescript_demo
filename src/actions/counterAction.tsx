import { INCREMENT, DECREMENT } from "../constants/counter";

// Actions
export interface IINCREMENTAction {
  type: INCREMENT;
}

export interface IDECREMENTAction {
  type: DECREMENT;
}

// 定义 modifyAction 联合类型，包含 IINCREMENTAction 和 IDECREMENTAction 接口类型
export type ModifyAction = IINCREMENTAction | IDECREMENTAction;

// 下面的返回值实际上是返回一个action对象，将来使用的时候，是会传到./src/reducers/index.tsx的action中，那么我们需要定义这个action的结构，所以将上面的IINCREMENTAction与IDECREMENTAction定义成了接口
// Action Creators
// 增加 state 次数的方法
export const increment = (): IINCREMENTAction => ({
  type: INCREMENT
});

// 减少 state 次数的方法
export const decrement = (): IDECREMENTAction => ({
  type: DECREMENT
});
