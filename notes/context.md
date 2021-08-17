在最顶层组件定义context：
const ThemeContext = React.createContext('light');

 <ThemeContext.Provider value="dark">
 </ThemeContext>

在最底层读取context：
// 指定 contextType 读取当前的 theme context。
// React 会往上找到最近的 theme Provider，然后使用它的值。
// 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
    return <Button theme={this.context} />;
  }