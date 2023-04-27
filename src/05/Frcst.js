import data from './dataFrcst.json';


const Frcst  = () => {
    console.log(data)
    const dtKey = ["frcstOneDt","frcstTwoDt", "frcstThreeDt","frcstFourDt"]
    // map 배열
    dtKey.map((item) => console.log(data[item]))

    return (
        <>
       

    

        </>
    );
}

export default Frcst;