import { Link } from "react-router-dom";
import { useRecoilValue } from 'recoil';
import { CntAtoms, CntAtomsTwice } from './CntAtoms';
//useRecoilValue는 set함수를 쓰지 않을 때.
//useRecoilState는 set함수를 쓸 때.
//구독함.  = state가 바뀐다.
const CntDisp = () => {
    const n = useRecoilValue(CntAtoms);
    const n2 = useRecoilValue(CntAtomsTwice);

    return (
        <>
            <article>
                <h2>입력값: {n}, 입력값 2배: {n2} </h2>
                <footer>
                    <Link to='/'>입력화면이동</Link>
                </footer>
            </article>
        </>
    )
}

export default CntDisp;