//useStste import  state변수 사용
import { useState } from "react";

const MyClockTime = () => {
    //let myTime = new Date().toLocaleTimeString();
    //state 변수 사용 2단계 : 변수 선언
    let t = new Date().toLocaleTimeString()
    
    //2. state 변수 선언 useState(함수이름)       const[myTime, setMyTime(함수이름)]  <- 리턴 값 2개
    const [myTime, setMyTime] = useState(t);

    // let cnt = 0;
     //     const like = () => {

     //3번 1초에 한번씩 state변수 변경
    setInterval(()=>setMyTime(new Date().toLocaleTimeString()), 1000);

        console.log(t);
    // }
    // console.log(n);


    return (
        <footer>
            <h1>{myTime}</h1>
        </footer>
    );
}

export default MyClockTime;