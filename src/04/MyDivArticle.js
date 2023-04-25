// const MyDivArticle = (probs) => {
// 매개변수를 probs 사용하지 않고 오브젝트에 매개변수명을 넣어서 사용.

//컴포넌트에 적용
import style from './MyDiv.module.css';
// css가 전역으로 적용
import './MyDiv.css';

//state 변수 사용 1단계
import { useState} from 'react';


const MyDivArticle = ({ aname }) => {
    // probs 내용 값을 받아야함 넘어오는 속성 넣어주기.
    // const aname = probs.aname;
    // slice 끝에 한자리 떼기?가져오기?
    let n = (aname === undefined) ? '0' : aname.slice(-1);
    // let cnt = 0;

    //state 변수 사용 2단계 : 변수 선언
    const [cnt, setCnt] = useState(0) ;

    //click 이벤트 처리
    const like = () => {
        // cnt = cnt +1;

        //state 변수 사용 3단계  : 변수 내용 변경
        setCnt(cnt + 1);
        
        console.log(cnt)
    }
    console.log(n);
    

    return (
        // article 전체로 큰 component 구성요소로 만든다 불필요한 중복과 코드 길어지는거 제거하기 위해
        // 아무것도 없을때는 falsy mydiv0 출력
        <article>
            <header><h1 className={style.mah1}>{aname || 'MyDiv0'}</h1></header>

            <ul className={style.aul}>
                <li className={style.ali}>{n === '0' ? 'MyDiv0' : 'MyDiv' + n}1</li>
                <li className={style.ali}>{'MyDiv' + n}2</li>
            </ul>
            {n === '1' &&
                <footer>
                    <h2><span onClick={()=> like()}>💙</span>{cnt}</h2>
                </footer>
            }
        </article>
    );
}

export default MyDivArticle;