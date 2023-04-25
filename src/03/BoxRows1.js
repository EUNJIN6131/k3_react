// const BoxRows = (probs) => {
    const BoxRows = ({ mv }) => {

        // const mvlist = [...probs.mv];
        // console.log("BoxRows", mv)
        
        let trTags = [];
        for (let row of mv) {
            console.log(row.rank, row.movieNm, row.salesAmt, row.rankInten);
    
            let icon;
            
            let intent = parseInt(row.rankInten);
            if (intent === 0 ) icon = '⏺';
            else if (intent < 0) icon = '🔽';
            else icon = '🔼';
    
    
            trTags.push(
                <tr className = "mytr" key={row.movieCd}>
                    <td>{row.rank}</td>
                    <td>{row.movieNm}</td>
                    <td>{parseInt(row.salesAmt).toLocaleString()}</td>
                    <td>{icon}{Math.abs(intent)}</td>
                </tr>
            );
        }
    
    
        return (
            trTags
        )
    }
    
    export default BoxRows;