import { useState } from "react";

const MyClockTime = () => {
    //let myTime = new Date().toLocaleTimeString();
    //state 변수 사용 2단계 : 변수 선언
    let t = new Date().toLocaleTimeString()
    const [myTime, setMyTime] = useState(t);

    let cnt = 0;
     //     const like = () => {
    setTimeout(setMyTime(new Date().toLocaleTimeString()), 1000);

    //     console.log(cnt)
    // }
    // console.log(n);


    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;