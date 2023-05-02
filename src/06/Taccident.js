import dataTaccident from './dataTaccident.json';
import Taccident01 from './Taccident01';
import Taccident02 from './Taccident02';
import { useState, useEffect } from 'react';

// import 뒤에 data 단어 임의지정 가능
const Taccident = () => {
    // console.log(data) 앞에 있는 것이 key임.
    // console.log(data['data'])   //data key만 가져옴 [] 대괄호 쓰거나 . 쓴다 
    // console.log(dataTaccident.data)

    const data = dataTaccident.data; //사고 건수 obj 배열 (15)
    let c1 = data.map((item) => item.사고유형_대분류);     //data key에서
    // let c2 = data.map((item) => item.사고유형_중분류); 

    // 대괄호는 배열  // 중괄호는 오브젝트
    c1 = new Set(c1)
    //중복 제거는 set ({}집합, 중복을 없앰) , filter
    c1 = [...c1]
    //스프레드 연산자  오브젝트를 배열로 만들기    [...  ] [...c1, ...c2]  c1{1,2,3} c2{4,5,6}


    // console.log('c1', c1);
    // const c2 = [];
    // for(let item of data) {
    //     let temp = [item.사고유형_대분류, item.사고유형_중분류];
    //     // temp.push(item.사고유형_대분류);
    //     // temp.push(item.사고유형_중분류);
    //     c2.push(temp);
    // }

    const c2 = data.map((item) => [item.사고유형_대분류, item.사고유형_중분류]);
    // console.log('c2', c2);
    

    const [sel1, setSel1] = useState(0); //대분류 선택
    const [sel2, setSel2] = useState([]); //중분류 선택
    const [selData, setSelData] = useState({});

    useEffect(() => {
        console.log(sel1);
       
    }, [sel1]);

    
    useEffect(() => {
        console.log(sel2);
        let temp = data.map((item) => item.사고유형_대분류 === sel2[0] && item.사고유형_중분류 === sel2[1]);
        setSelData(temp[0]);
    }, [sel2])
   
    useEffect(() => {
        console.log(selData);
       
    }, [selData]);


    return (

        <main className='container'>
            <article>
                <header>

                    <Taccident01 c1={c1} sel1={sel1} setSel1={setSel1} />
                    <Taccident02 c2={c2} sel1={sel1} sel2={sel2} setSel2={setSel2} />
                    
                </header>

            </article>
        </main>




    );
}

export default Taccident;