import React from 'react'


const getTime = (age, hour) => {
    if (age < 18 && hour > 22) {
        alert("미성년자는 나가세요");
    } else {
        return
    }
    
}







const UnderageKick = (props) => {

    const time = getTime(props.age, new Date().getHours().toString());
    const text = props.age < 18 ? '나가세요' : '어서오세요';


    return (
        <div>
            <p>당신의 나이는 {props.age}</p>
            <h2>{text}</h2>
        </div>
    )
}


export default UnderageKick;