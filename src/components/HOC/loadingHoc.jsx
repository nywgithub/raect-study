import * as React from "react";

import {Spin} from 'antd';

export default function loadingCheck(WrappedComponent,loadingprops) {
    return class extends WrappedComponent{
        componentWillUpdate(nextProds, nextState){
            console.log('withLoading将会更新');   
        }
        render() {
            if(loadingprops){
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