import { useEffect, useState } from 'react';
import CntDisp from './CntDisp';
import CntInput from './CntInput'

const Cnt3 = () => {
    //useState 배열
    const [n, setN] = useState(0);

  
    useEffect (() => {

    }, [n]);

    return (
        <main className="container">
            <CntInput n={n} setN={setN}/>
           <CntDisp n={n}/>
        </main>
    )
}

export default Cnt3;