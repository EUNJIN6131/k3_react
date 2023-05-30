import { useEffect } from "react";
import {CodeAtom} from './CodeAtom' ;
import { useRecoilState } from "recoil";

const CodeGubun = () => {
    const [sel, setSel] = useRecoilState(CodeAtom);

    const selItem = (e) => {
        console.log(e.target.value)
        setSel(e.target.value);
    }

    useEffect(() => {
        console.log(sel);
    }, [sel]);

    return (
        <main className="container">
            <article>
                <form>
                    <div className="grid">
                        <div>
                            <select id="sel" name="sel" onChange={selItem}>
                                <option value="">선택</option>
                                <option value="단기예보">단기예보</option>
                                <option value="초단기예보">초단기예보</option>
                            </select>
                        </div>
                    </div>
                </form>
            </article>
        </main>
    );
}

export default CodeGubun;

// import { useEffect } from "react";
// import {CodeAtom} from './CodeAtom';
// import {useRecoilState} from "recoil";

// const CodeGubun = () => {
//     // useState는 변수 useEffect는 함수 
//     const [sel, setSel] = useRecoilState(CodeAtom);

//     const selItem = (e) => {
//         console.log(e.target.value)
//         setSel(e.target.value);
//         console.log(sel);
//     }

//     useEffect(() => {
//         console.log(sel);
//     }, [sel]);

//     return (
//         <main className="container">
//             <article>
//                 {/* onclick은 박스를 눌릴 때마다 호출  // onChange는 값이 바뀔 때마다 호출 값이 바뀌지 않으면 호출 x */}

//                 {/* <form>
//                 <select id = "sel" name ="sel" onClick={selItem}>
//                     <option value="">선택</option>
//                     <option value="1">단기예보</option>
//                     <option value="2">초단기예보</option>
//                 </select>
//             </form> */}
//                 {/* 렌더링이 일어난다 = 컴포넌트를 낑긴다 // 리턴되면 렌더링 x  값이 바뀌어야하니 state변수 */}
//                 <form>
//                     <div className="grid">
//                         <div>
//                             <select id="sel" name="sel" onChange={selItem}>
//                                 <option value="">선택</option>
//                                 <option value="단기예보">단기예보</option>
//                                 <option value="초단기예보">초단기예보</option>
//                             </select>
//                         </div>
//                     </div>
//                     <footer>
//                         <ul>
//                             <li></li>
//                         </ul>
//                     </footer>
//                 </form>
//             </article>
//         </main>
//     );
// }

// export default CodeGubun;