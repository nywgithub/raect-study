import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Select,Input } from 'antd';
const { Option } = Select;
function Selects(props){
    const [defaultValue ,setDefaultValue] = useState("1")
    const [inputValue ,setInputValue] = useState("2")
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
            <Select defaultValue={defaultValue} style={{ width: 180 }}>
                <Option value="jack">Jack</Option>
                <Option value="lucy">Lucy</Option>
                <Option value="disabled" disabled>
                    Disabled
                </Option>
                <Option value="Yiminghe">yiminghe</Option>
            </Select>
            <Input placeholder="Basic usage" value={inputValue} style={{ width: 180}}/>
        </>
    )
}

export default Selects