//我们还需要对reducers中的函数参数进行类型校验，而且这个类型校验很多地方需要复用，那么我们需要把这个类型校验单独抽离出一个文件
// 定义 State 结构类型
export interface StoreState {
  // 我们需要约束的属性和类型
  number: number;
}
