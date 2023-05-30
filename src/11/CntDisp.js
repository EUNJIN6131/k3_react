//const CntDisp = (probs) => {
// const n = probs.n
//probs 로 받고 const n = probs.n; 방법으로 해도 됨
const CntDisp = ({n}) => {


    return (

        <>
         <article>
                <h2>입력값: {n}, 입력값 2배: {n * 2}</h2>
            </article>
        </>
    )
}

export default CntDisp;