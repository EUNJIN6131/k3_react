import { useState, useRef } from "react";
const Cnt2 = () => {
    const [add, setAdd] = useState(0);
   // const [minus, setMinus] = useState(0);
    const ref1 = useRef();

    const showAdd = () => {
        let cnt1 = parseInt(ref1.current.value);
        if (cnt1 >= 0)
            cnt1++;
        setAdd(cnt1);
    }
    const showMinus = () => {
        let cnt1 = parseInt(ref1.current.value);
        if (cnt1 >= 0) cnt1--;
        setAdd(cnt1);
        
    }

    return (<main className="container">
        <article>
            <div className="grid">
                <div><button onClick={() => showMinus()}>-</button></div>
                <div><input type="text" ref={ref1} name="txt1" id="txt1" readOnly value={add} /></div>
                <div><button onClick={() => showAdd()}>+</button></div>
            </div>
        </article>
        <article>
            <header className="grid">
                <h2>입력값 : {add}, 입력값 2배 : {2*add}</h2>
            </header>
        </article>
    </main>);
}
export default Cnt2;