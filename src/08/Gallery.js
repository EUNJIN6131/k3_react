import style from './Gallery.module.css';
import {useState, useEffect, useRef} from 'react';



const Gallery = () => {

    //키워드 input
    const txt1 = useRef();

    //컴포넌트가 맨처음 렌더링되면 
    useEffect(() => {
        txt1.current.focus();
    }, []);

    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value)
        console.log(kw)
    }

    //취소버튼

    const showClear = (e) => {
        e.preventDefault();
    }


    return (

        <main className="container">
            <article>
                <header>
                    <h1>한국관광공사 관광사진 정보</h1>
                </header>
                
                <form>
                    <div className="grid">
                        <div>
                            <input ref={txt1} type="text" id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={StyleSheet.btDiv}>
                            <button onClick={(e)=>show(e)}>확인</button>
                            <button onClick={(e)=>showClear(e)}>취소</button>
                        </div>
                    </div>
                </form>

            </article>
        </main>
    );
}


export default Gallery;