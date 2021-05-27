import React from "react";
import { Spin } from 'antd';
//弹窗高阶组件

//获取被包裹组件的组件名
function getDisplayName(component) {
  return component.displayName || component.name || "Component";
}
const showDialog = (isShow,loading) => (WrappedComponent) => {
  return class HOC extends React.Component {
    //定义组件名
    static displayName = `HOC(${getDisplayName(WrappedComponent)})`;
    render() {
      const newProps = {
        test: false,
      };
      return (
        <React.Fragment>
            <Spin spinning={loading}>
                <div className="hoc-title">
                    {isShow ? isShow : "暂无标题"}
                    <WrappedComponent {...this.props} {...newProps} />
                </div>
            </Spin>
        </React.Fragment>
      );
    }
  };
};

export default showDialog;
