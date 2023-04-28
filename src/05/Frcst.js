import { useState } from 'react';
import data from './dataFrcst.json';
import style from './Frcst.module.css';
//state변수 1단계

const Frcst = () => {
    // console.log(data)map
    const dtKey = ["frcstOneDt", "frcstTwoDt", "frcstThreeDt", "frcstFourDt"]
    const cnKey = ["frcstOneCn", "frcstTwoCn", "frcstThreeCn", "frcstFourCn"]
    // map 배열
    // dtKey.map((item) => console.log('dt',data[item]))
    // cnKey.map((item) => console.log('cn',data[item]))


    // object 만들기 오브젝트는 중괄호로 시작 {키:값} 순서상관x
    let dtcn = {};
    //dtkey      .map .filter배열만들기 배열은 대괄호로 시작 순서 o
    dtKey.map((item, idx) => dtcn[data[item]] = data[cnKey[idx]]);
    // console.log(dtcn)

    // let tempTag;
    // state 변수 2단계 : 변수선언 set함수
    const [bodyTag, setBodyTag] = useState();
    const [selDt, setselDt] = useState();

    const detail = (k) => {
        let dtcnItem = dtcn[k].split(',')
        setselDt(k);
        dtcnItem = dtcnItem.map((item) => item.split(':'));
        dtcnItem = dtcnItem.map((item) =>
            <div key={item[0]}>

                <span className={style.sp1}>{item[0]}</span>
                {item[1].trim() === '낮음' ? <span className={style.sp21}>{item[1]}</span>
                    : item[1].trim() === '보통' ? <span className={style.sp22}>{item[1]}</span>
                        : <span className={style.sp23}>{item[1]}</span>}
            </div>
        )
        console.log(dtcnItem);
        // console.log(k, dtcn[k]);
        //state 변수 3단계 : 값 변경
        setBodyTag(dtcnItem);
    }

    let dtTag = [];
    dtTag = Object.keys(dtcn).map((item, idx) =>
        <div className={selDt === item ? style.dt1 : style.dt}
            key={idx}
            onClick={() => detail(item)}>
            {item}
        </div>);

    return (
        <>
            <main className='container'>
                <article>
                    <header>
                        <h1>초미세먼지 주간 예보</h1>
                        <div className='grid'>
                            {dtTag}
                        </div>
                    </header>
                    <div className='grid'>{bodyTag}</div>

                </article>
            </main>



        </>
    );
}

export default Frcst;