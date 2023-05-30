//const CodeList = (probs) => {
import code from './getcode.json';
import {useRecoilValue} from "recoil";
import { CodeAtom } from './CodeAtom';


//map은 모든 배열을 다돈다 filter는 배열을 다 돌지만 조건에 맞는 것만 돈다
const CodeList = () => {
    //console.log(sell)
    //console.log(code)
    
    const sell = useRecoilValue(CodeAtom); 
    let temp = code.filter((i) => i["예보구분"] === sell );
    //console.log(temp); 
    
    let opTags = temp.map((i) => 
        <option key={i["항목값"]} value={i["항목값"]}>{i["항목명"]}({i["항목값"]})</option>
    );
    
    return (
        <>
            <select id='sel2' name='sel2' defaultValue=''>
                <option value=''>선택</option>
               {opTags}
            </select>
        </>
    );
}

export default CodeList;