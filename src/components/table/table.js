import React from "react";
import { Table, Button } from "antd";
import Modals from "components/Modal/modal";
import showDialog from "components/HOC/showDialog";

class Tables extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isModalVisible: false,
    };
    this.showDetail = this.showDetail.bind(this);
  }

  showDetail() {
    console.log(this.props.test)
    this.setState({
      isModalVisible: true,
    });
  }

  componentDidMount(){
    // this.props.loading = false
  }

  render() {
    const dataSource = [
      {
        key: "1",
        name: "胡彦斌",
        age: 32,
        address: "西湖区湖底公园1号",
      },
      {
        key: "2",
        name: "胡彦祖",
        age: 42,
        address: "西湖区湖底公园1号",
      },
    ];

    const columns = [
      {
        title: "姓名",
        dataIndex: "name",
        key: "name",
      },
      {
        title: "年龄",
        dataIndex: "age",
        key: "age",
      },
      {
        title: "住址",
        dataIndex: "address",
        key: "address",
      },
      {
        title: "Action",
        dataIndex: "",
        key: "x",
        render: () => <Button onClick={this.showDetail}>Detail</Button>,
      },
    ];
    return (
      <React.Fragment>
        <Table dataSource={dataSource} columns={columns} />
        <Modals visible={this.state.isModalVisible} />
      </React.Fragment>
    );
  }
}

export default showDialog("表格",false)(Tables);
