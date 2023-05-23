import {useState, useRef, useEffect} from 'react';

const FcstTable = ({items, gubun}) => {

    const [data, setData] =useState('');
    
    useEffect(()=> {},

    [data])

    let trTags = [];
   // for (let row of mv) {
       // console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
    



    return (
        <table>
            <thead>
                <tr>
                    <th scope="col">항목명</th>
                    <th scope="col">예측일자</th>
                    <th scope="col">예측시간</th>
                    <th scope="col">예보 값</th>
                </tr>
            </thead>
            <tbody>
            {data}
            </tbody>
        </table>

    );
}

export default FcstTable;