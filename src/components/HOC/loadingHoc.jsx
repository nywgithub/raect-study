import * as React from "react";

import {Spin} from 'antd';

export default (loadingCheck) => (WrappedComponent) =>{
    return class extends WrappedComponent{
        componentWillUpdate(nextProds, nextState){
            console.log('withLoading将会更新');   
        }
        render() {
            if(loadingCheck(this.props)){
                return (
                    <Spin tip='加载中' size='large'>
                        {super.render()}
                    </Spin>
                )

            }else{
                return super.render();
            }
        }
    }
}