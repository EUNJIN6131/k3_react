import {useState} from "react";

// const BoxRows = (probs) => {
const BoxRows = ({ mv }) => {

    // const mvlist = [...probs.mv];
    // console.log("BoxRows", mv)

    const[footTag, setFootTag] = useState('');

    const showMv = (row) => {
        console.log(row)
        setFootTag(row.movieCd);
    }

    let trTags = [];
    for (let row of mv) {
        console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);

        let icon;

        let intent = parseInt(row.rankInten);
        if (intent === 0) icon = '⏺';
        else if (intent < 0) icon = '🔽';
        else icon = '🔼';


        trTags.push(
            <tr className="mytr" key={row.movieCd} onClick={() => showMv(row)}>
                <td>{row.rank}</td>
                <td>{row.movieNm}</td>
                <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                <td>{icon}{Math.abs(intent)}</td>
            </tr>
        );
    }


    return (
        // colSpan은 td들을 받아 한개로 쓰겟다 
        // 리턴안에는 최상위 태그가 1개만 있어야한다 하지만 tbody tfoot 같은위치에 있는게 두개 있으니 임의로 <> </> 상위 태그를 만들어준다.
        <>
            <tbody>
                {trTags}
            </tbody>
            <tfoot>
                <tr>
                <td colSpan={4}>{footTag}</td>
                </tr>
            </tfoot>
        </>

    )
}

export default BoxRows;