/*
한국관광공사_관광사진갤러리 키워드 검색 목록 조회
https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?serviceKey=RMZOE5nxYetqyMQfyEMjbhv0YOxMX7mj%2B8ucPjopU%2FTHy%2BF2x3UjmB9kqdqtEqvO8mYBMx04W3%2BTmxwNF0sJmw%3D%3D&numOfRows=10&pageNo=1&MobileOS=ETC&MobileApp=AppTest&arrange=A&keyword=%ec%9e%90%ea%b0%88%ec%b9%98&_type=json
*/
import { useState, useEffect, useRef } from 'react';
import styles from './Gallery.module.css';
import GalleryView from './GalleryView';


const Gallery = () => {


    //state 변수
    const [items, setItems] = useState();

    const txt1 = useRef();

    //컴포너트가 처음 랜더링되었을 때 한번 실행

    useEffect(() => {
        // input 포커스 맞추기
        txt1.current.focus();
    }, []);

    //컴포너트 해당하는 state변수가 변경이 될때마다 실행

    useEffect(() => {
        // input 포커스 맞추기
        txt1.current.focus();
        console.log();

    }, [items]);


    //사용자정의 함수
    const getData = (kw,num,no) => {
        let apikey = 'YbCtbs4SETsco3SXnbTi7otpks1RagK%2FQMCp5pQNZCbTxKz6Kewoc%2FQRvLrGDPjMoZPCe9ml2sJWVQsi01LmcA%3D%3D'
        let url = 'https://apis.data.go.kr/B551011/PhotoGalleryService1/gallerySearchList1?'
        url = url + `serviceKey=${apikey}`
        url = url + `&numOfRows=${num}`;
        url = url + `&pageNo=${no}`;
        url = url + `&MobileOS=ETC`;
        url = url + `&MobileApp=AppTest`;
        url = url + `&keyword=${kw}`;
        url = url + '&_type=json';

        console.log(url)

        fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items.item))
            .catch((err) => console.log(err))
    }


    const show = (e) => {
        e.preventDefault(e);
        //공백체크
        if (txt1.current.value === '') {
            alert('키워드를 입력해주세요')
            txt1.current.focus();

            return;
        }

        //인코딩한 정보 키워드
        const kw = encodeURI(txt1.current.value);

        getData(kw, 10, 1);

        console.log(kw)
    }




    const showClear = (e) => {
        e.preventDefault();
    }

    return (
        <main className="container">
            <form>
                <article>
                    <header>
                        <h1>한국관광공사_관광사진 정보</h1>
                    </header>
                    <div className="grid">
                        <div>
                            <input ref={txt1} id="txt1" name="txt1" placeholder="키워드를 입력하세요." required />
                        </div>
                        <div className={styles.btDiv}>
                            <button onClick={(e) => show(e)}>확인</button>
                            <button onClick={(e) => showClear(e)}>취소</button>
                        </div>
                    </div>

                </article>
            </form>
            {items && <GalleryView content={items} />}
        </main>
    );
}

export default Gallery;