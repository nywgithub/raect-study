import React from "react";
import { Modal } from "antd";

class Modals extends React.Component {
  //点击取消
 

  render() {
    return (
      
        <Modal
          title="Basic Modal"
          visible={this.props.isModalVisible}
          
        >
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Modal>
      
    );
  }
}
export default Modals;
