import { useState, useEffect, useRef } from "react";
import code from './getcode.json';

const FcstTable = ({items, gubun}) => {

    //useState변수 : 변수 값이 변경이 되면 재 렌더링이 일어난다.
  
    const [trTags, setTrtags] = useState();
    const [opTags, setOpTags] = useState();
    const sel = useRef();



    //렌더링이 될 때 한번 실행 useEffect, [dependency array] 가 없으면 계속 실행됨.
    //fetch는 비동기방식.
    useEffect(() => {


        // code 만들기
        // map 은 전부 다 가져와서 배열을 돌고, filter은 가져오고 싶은 배열만 조건을 걸어서 가져온다
        let tempcd = code.filter((i) => i["예보구분"] === gubun)
        tempcd = tempcd.map((i, idx) =>
            <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
        );
        setOpTags(tempcd);
        console.log('tempcd', tempcd);
    }, [gubun]);


    useEffect(() => {
    }, [items])

    //사용자 정의 함수 : select onChange
    const showItem = (e) => {
        e.preventDefault();
        console.log(e.target.value);
        if (items === undefined) return;
        //map 배열을 돈다. i는 배열 인덱스
        let temp = items.filter((i) => i.category === sel.current.value);
        let tempcd = code.filter((i) => i["예보구분"] === gubun &&
            i["항목값"] === sel.current.value
        );
        tempcd = tempcd[0];

        console.log('tempcd', tempcd);
        let skyobj = { '1': '🌞', '3': '⛅', '4': '☁' };
        let ptyobj = { '0': ' ', '1': '🌦', '2': '🌦/❄', '3': '❄', '5': '⛈' ,'6': '🌨','7': '❄🌨'};

        temp = temp.map((i, idx) =>
            <tr key={i.category + idx}>
                <td>{tempcd["항목명"]}</td>
                <td>{i.fcstDate}</td>
                <td>{i.fcstTime}</td>
                <td>
                    {(i.category === 'SKY') ? skyobj[i.fcstValue] 
                    : (i.category === 'PTY') ? ptyobj[i.fcstValue] 
                    : i.fcstValue + tempcd['단위']}
                </td>
            </tr>
        );

        //console.log('items', items)
        console.log('temp', temp)
        setTrtags(temp);

    }
    return (

        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div><h1>기상청 {gubun}</h1></div>
                            <div>
                                <select ref={sel} id='sel' name='sel' onChange={showItem}>
                                    <option val=''>선택</option>
                                    {opTags}
                                </select>
                            </div>
                        </div>
                    </form>
                </header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">자료구분코드</th>
                            <th scope="col">예측일자</th>
                            <th scope="col">예측시간</th>
                            <th scope="col">예보 값</th>
                        </tr>
                        {items && trTags}
                    </thead>
                </table>

            </article>
        </main>

    );
}

export default FcstTable;