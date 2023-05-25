import { useState, useEffect } from "react";
import FcstTable from './FcstTable';

const VilageFcst = () => {

    //useState변수 : 변수 값이 변경이 되면 재 렌더링이 일어난다.
    const [items, setItems] = useState();
    
    //렌더링이 될 때 한번 실행 useEffect, [dependency array] 가 없으면 계속 실행됨.
    //fetch는 비동기방식.
    useEffect(() => {

        let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getVilageFcst?';
        url = url + 'serviceKey=YbCtbs4SETsco3SXnbTi7otpks1RagK%2FQMCp5pQNZCbTxKz6Kewoc%2FQRvLrGDPjMoZPCe9ml2sJWVQsi01LmcA%3D%3D';
        url = url + '&numOfRows=60';
        url = url + '&pageNo=1';
        url = url + '&base_date=20230525';
        url = url + '&base_time=0500';
        url = url + '&nx=55';
        url = url + '&ny=127';
        url = url + `&dataType=json`;

        
        fetch(url)
        .then((resp) => resp.json())
        .then((data) => setItems(data.response.body.items.item))
        .catch((err) => console.log(err))
        
        console.log(url)
        }, []);

    useEffect(() => {
        console.log('items', items)
    }, [items])

    //사용자 정의 함수 : select onChange
    
    return (
    <>
       {items && <FcstTable items={items} gubun = '단기예보' />} 
      
       </>
    );
}

export default VilageFcst;