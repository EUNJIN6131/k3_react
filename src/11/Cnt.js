import { useState } from 'react';

const Cnt = () => {
    //useState 배열
    const [cnt1, setCnt1] = useState(0);


    const showCnt1 = () => {

        if (cnt1 < 1)
            setCnt1(0)
        else setCnt1(cnt1 - 1);

        console.log(cnt1)
    }

    const showCnt2 = () => {

        setCnt1(cnt1 + 1);

        console.log(cnt1)
    }



    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div></div>
                        <div><button onClick={() => showCnt1()}>-</button></div>
                        <div><input type="text" id="txt1" name="txt1" value={cnt1} readOnly></input> </div>
                        <div><button onClick={() => showCnt2()}>+</button></div>
                        <div></div>
                    </div>
                </form>
            </article>
            <article>
                <h2>입력값: {cnt1}, 입력값 2배: {cnt1 * 2}</h2>
            </article>
        </main>
    )
}

export default Cnt;