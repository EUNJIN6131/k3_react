import style from './Gallery.module.css';
import Gallerycomp from './Gallerycomp';
import { useState, useEffect, useRef } from 'react';

const Gallery = () => {

    //키워드 input
    const txt1 = useRef();
    const [pic, setPic] = useState();

    useEffect(() => {
        txt1.current.focus();
        const url = `https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=YbCtbs4SETsco3SXnbTi7otpks1RagK%2FQMCp5pQNZCbTxKz6Kewoc%2FQRvLrGDPjMoZPCe9ml2sJWVQsi01LmcA%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=${pic}&_type=json`;
        console.log(url)

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => console.log(data))
            .catch((err) => console.log(err))

    }, [pic]);


    //확인버튼
    const show = (e) => {
        e.preventDefault();
        if (txt1.current.value === '') return;
        let kw = encodeURI(txt1.current.value)
        // console.log(kw)
        setPic(kw);
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
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>
                </form>
                <table>
            {pic && <Gallerycomp list={pic} />}
            </table>
            </article>
           
        </main>
    );
}


export default Gallery;