### Hook

#### useEffect

- 清除机制
  1.useEffect 可以返回一个清除函数，来解除订阅
  2.useEffect 会在组件每次重新渲染时执行清除操作

- class 机制下生命周期函数中分割逻辑的问题（一段代码逻辑被拆分到不同生命周期函数中）
  同 useState 可以多次执行 useEffect

- 性能优化（由于每次重新渲染时执行清除操作）

1. class 机制中通过在 componentDidUpdate 中添加对 prevProps 或 prevState 的比较逻辑解决
2. 如果某些特定值在两次重渲染之间没有发生变化，你可以通知 React 跳过对 effect 的调用，只要传递数组作为 useEffect 的第二个可选参数即可：
   useEffect(() => {
   document.title = `You clicked ${count} times`;
   }, [count]); // 仅在 count 更改时更新

#### 自定义 hook (实现逻辑复用)
1.自定义函数名use开头
2.可以使用其他hook
3.每次调用hook都会获取独立的state

