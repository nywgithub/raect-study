import React from "react";
import { Button, Modal } from "antd";

class Card extends React.Component {
  //1.   初始化state
  constructor(props) {
    //   初始化props;
    super(props);
    //   定义state中属性值;
    this.state = {
      isFinish: false,
      dateNow: '',
      dateTodo: "计划时间",
      title: "计划名称",
      isModalVisible: false,
    };
    //   bind this
    this.clickFinish = this.clickFinish.bind(this);
    this.handleOk = this.handleOk.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
    this.clickDetail = this.clickDetail.bind(this);
  }

  clickFinish() {
    this.setState({
      isFinish: true,
    });
  }

  //点击取消
  handleCancel() {
    this.setState({
      isModalVisible: false,
    });
  }

  //点击确定
  handleOk() {
    this.setState({
      isModalVisible: false,
    });
  }

  //点击详情
  clickDetail() {
    this.setState({
      isModalVisible: true,
    });
  }
  //2.   手动判断是否需要组件更新
  //   shouldComponentUpdate();

  //3.   创建虚拟DOM
  render() {
    return (
      <div className="card">
        <Button onClick={this.clickDetail}>查看详情</Button>
        <div className="item-isFinish">
          {this.state.isFinish ? "已完成" : "待完成"}
        </div>
        <div className="item-today">
          {this.state.dateNow}
        </div>
        <div className="item-title">{this.props.title}</div>
        <div className="item-todoDate">{this.state.dateTodo}</div>
        <Button onClick={this.clickFinish}>点击完成</Button>

        {/* 模态框 */}
        <Modal
          title="Basic Modal"
          visible={this.state.isModalVisible}
          onOk={this.handleOk}
          onCancel={this.handleCancel}
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      </div>
    );
  }
}

export default Card;
