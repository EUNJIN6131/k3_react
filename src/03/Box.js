import BoxRows from './BoxRows';
import '../03/Box.css';
import { useRef, useState, useEffect } from 'react';


const Box = () => {

    const [mvlist, setMvlist] = useState();
    let seldt;

    
    useEffect(() => {
        let yesterday = new Date();
        yesterday.setDate(yesterday.getDate() - 1);
        
        seldt = yesterday.getFullYear();
        let month = yesterday.getMonth() +1;
        month = month < 10 ? `0${month}` : month; 
        
        let day = yesterday.getDate();
        day = day < 10 ? `0${day}` : day; 


        seldt =`${seldt}${month}`;
        seldt =`${seldt}${day}`;

        console.log('yesterday =', seldt)
        dt1.current.value = `${yesterday.getFullYear()}-${month}-${day}`;
        getData(seldt);

    }, [])

    
    

    //날짜 입력창
    const dt1 = useRef();
    
    //데이터 가져오기 fetch함수 
    const getData = (sd) => {
        
        let url = 'http://kobis.or.kr/kobisopenapi/webservice/rest/boxoffice/searchDailyBoxOfficeList.json?key=f5eef3421c602c6cb7ea224104795888&targetDt=';
        url = url + sd;
        console.log("url=", url);


        //패치하는 방법
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setMvlist(data.boxOfficeResult.dailyBoxOfficeList))
        .catch((err) => console.log(err))

    }
    
    //날짜 선택
    const getDt = () => {
        
        seldt = dt1.current.value.replaceAll('-','')
        console.log("seldt=", seldt);
        getData(seldt);
        
    }

    return (
        <main className='container'>
            <article>
                <header>
                    <nav>
                        <ul><li>
                            <h1>일일 박스 오피스</h1>
                        </li></ul>
                        <ul><li>
                            <input ref={dt1} type="date" id="dt1" name="dt1" onChange={() => getDt()} />
                        </li></ul>
                    </nav></header>
                <table>
                    <thead>
                        <tr>
                            <th scope="col">순위</th>
                            <th scope="col">영화명</th>
                            <th scope="col">매출액</th>
                            <th scope="col">증감</th>
                        </tr>
                    </thead>
                   {mvlist && <BoxRows mv={mvlist} />}
                </table>
            </article>
        </main>
    );
}

export default Box;