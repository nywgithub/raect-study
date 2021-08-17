import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Select } from 'antd';
const { Option } = Select;
function Selects(props){
    const [defaultValue ,setDefaultValue] = useState("1")
    var getValue = ()=>{
        axios({
            url:"/postdata1",
            method:"get"
        }).then((res)=>{
            setDefaultValue(res.data.test)
        })
    }
    useEffect(() => {
        getValue();
    }, [defaultValue])
    return(
        <>
            <Select defaultValue={defaultValue} style={{ width: 120 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
        </>
    )
}

export default Select