import React from "react";
import { Input } from "antd";
import { CloseCircleOutlined } from "@ant-design/icons";
import Card from "components/card/card";
import "./todo.scss";

class TODO extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dateNow: new Date(),
      value: "",
      listArr: [],
    };
    this.clearAll = this.clearAll.bind(this);
    // this.delete = this.delete.bind(this);
    this.enter = this.enter.bind(this);
  }

  clearAll() {
    this.setState({
      listArr: [],
    });
  }

  delete(index) {
    console.log("删除", index);
    this.setState((state) => {
      state.listArr.splice(index, 1);
      return {
        listArr: state.listArr,
      };
    });
  }
  clloaspe() {
    console.log("折叠");
  }
  enter() {
    this.setState((state) => {
      console.log(state);
      state.listArr.push({
        plan: state.value,
      });
      return {
        listArr: state.listArr,
      };
    });
    console.log(this.state.listArr);
  }
  change(e) {
    let value = e.target.value;
    this.setState(() => ({ value: value }));
  }

  render() {
    return (
      <div>
        <div className="todo">
          <Input
            allowClear
            style={{ width: "80%" }}
            placeholder="请输入今日计划"
            onPressEnter={this.enter}
            onChange={(event) => this.change(event)}
          />

          <div className="todo-list">
            <ul>
              {this.state.listArr.map((item, index) => (
                <li key={index}>
                  <span>{index + 1}.</span>
                  <span>{item.plan}</span>
                  <CloseCircleOutlined
                    onClick={this.delete.bind(this, index)}
                  />
                </li>
              ))}
            </ul>
          </div>

          <div className="bottom-area">
            <span className="buttom-num">{this.state.listArr.length}</span>
            <span className="buttom-clear" onClick={this.clearAll}>
              clearAll
            </span>
            <span className="buttom-clloaspe" onClick={this.clloaspe}>
              折叠
            </span>
          </div>
        </div>

        <div className="card-area">
          {this.state.listArr.map((item, index) => (
            <Card title={item.plan} key={index} />
          ))}
        </div>
      </div>
    );
  }
}

export default TODO;
