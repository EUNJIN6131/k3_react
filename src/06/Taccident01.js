import { useEffect } from "react";


const Taccident01 = ({ c1, sel1, setSel1 }) => {



    const btTag = c1.map((item) =>
        <li key={item}>
         <button onClick={() => setSel1(item)}>{item}</button>
        </li>
    );

    useEffect(() => { }, [])
    return (
        <nav>
            <ul>
                <h2><strong>사고유형_대분류</strong></h2>
            </ul>
            <ul>
                {btTag}
            </ul>
        </nav>
    );
}

export default Taccident01;