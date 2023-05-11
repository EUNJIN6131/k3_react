import { useState } from "react";




const Gallerycomp = ({ list }) => {



    const [compTag, setCompTag] = useState('');




    const showPc = (row) => {
        console.log(row)
        setCompTag("[" + row.galContentId + "]" + " " + row.galContentTypeId + " " + ":" + " " + row.galCreatedtime);

    }

    // 빈 배열  let ~ = [];
    let trTags = [];
    // 배열에 10개 돌기
    for (let row of list) {
        console.log(row.galContentId, row.galContentTypeId, row.galCreatedtime);

        trTags.push(
            <tr className="mytr" key={row.galContentId} onClick={() => showPc(row)}>
                <td>{row.galContentTypeId}</td>
                <td>{row.galCreatedtime}</td>
            </tr>
        );
    }



    return (


        <>
            <tbody>
                {trTags}
            </tbody>

            <tfoot>
                <tr>
                    <td>{compTag}</td>

                </tr>
            </tfoot></>


    );
}

export default Gallerycomp;