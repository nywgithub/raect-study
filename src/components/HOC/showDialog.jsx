import React from "react";

//弹窗高阶组件

//获取被包裹组件的组件名
function getDisplayName(component) {
  return component.displayName || component.name || "Component";
}

function showDialog(WrappedComponent, isShow) {
  return class HOC extends React.Component {
    //定义组件名
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    render() {
      return (
        <React.Fragment>
          <div className="hoc-title">
            {isShow ? isShow : "暂无标题"}
            <WrappedComponent {...this.props} />
          </div>
        </React.Fragment>
      );
    }
  };
}

export default showDialog;
