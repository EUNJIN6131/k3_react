import { CodeAtom } from "./CodeAtom"
import { useRecoilValue } from "recoil";
import {useState, useEffect} from "react";
import code from "./getcode.json"
const CodeShow = () => {

    const sell = useRecoilValue(CodeAtom);
    const sell2 = useRecoilValue(CodeAtom2);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        let temp = code.filter((i) => i["예보구분"] === sell &&  i["항목값"] === sell2 );
        setItemTag(
            <ul key = {temp[0]["항목값"]}>
                <li> {temp[0]["단위"]}</li>
                <li> {temp[0]["압축bit수"]}</li>
            </ul>

        );
}, [sell, sell2])

    return (
        <footer>
      {itemTag}
        </footer>

    );

}

export default CodeShow;