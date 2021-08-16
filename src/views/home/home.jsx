import React, {useEffect, useState} from 'react'
import axios from 'axios';
import '../../mock/index.js'
function Welcome (props){
    const [mockData, setmockData] = useState(); 
    useEffect(() => {
       fetchTest()
    }, []);

    var fetchTest = ()=>{
        console.log(1)
        axios({
            url:"/postdata1",
            method:"get"
        }).then((res)=>{
            console.log(res.data.test)
            setmockData(res.data.test)
        })
    }
    
    
    return (
        <div>
            <span>欢迎</span>
            <span>{mockData}</span>
        </div>
    )
}

export default Welcome