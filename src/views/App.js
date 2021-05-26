//引入导航栏组件leftNav和对应内容组件Main
import LeftNav from "components/leftNav";
import Main from "components/Main";

function App() {
  return (
    <div className="mainContent">
      <LeftNav />
      <Main />
    </div>
  );
}
export default App;
