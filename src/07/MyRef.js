import { useState, useRef, useEffect } from "react";
import style from './MyRef.module.css';

// useEffect는 조건부함수 
const MyRef = () => {

    const txtref = useRef();

    const itemArr = useRef([]);
    const [itemTag, setItemTag] = useState();

    useEffect(() => {
        txtref.current.focus();
    }, []);


    const addItem = (e) => {
        e.preventDefault();
        itemArr.current = [...itemArr.current, txtref.current.value]; //배열만들어주기   ...배열정렬
        itemArr.current = [...new Set(itemArr.current)];  //중복제거
        // itemArr.current = [...itemArr.current];
        // setItemTag(itemArr.current.map((item,idx)=><div key={'pr'+idx}>{item}</div>));  //

        let tempTag = itemArr.current.map(
            (item, idx) => <span key = {'sp' +idx} className={style.sp1}>{item}</span>
        );

        setItemTag(tempTag)
        console.log("addItem =", itemArr.current);
        resetItem();
    }


    
    const resetItem = () => {
        txtref.current.value = '';
        txtref.current.focus();
       
        console.log("resetItem");
    }



    return (
        <main className="container">
            <article>
                <header>
                    <form>
                        <div className="grid">
                            <div>
                                <label htmlFor="txt1">과일/채소 입력</label>
                                <input ref={txtref} type="text" id="txt1" name="txt1" required />
                            </div>

                            <div ><button onClick={(e) => addItem(e)}>등록</button>
                                <button onClick={(e) => resetItem(e)}>취소</button></div>
                        </div>
                    </form>
                </header>
                    <div>
                        {itemTag}
                    </div>
            </article>
        </main>

    );
}

export default MyRef;