import FcstTable from './FcstTable';
import { useParams} from "react-router-dom";
import code from './getcode.json';
import {useState, useRef, useEffect} from 'react';

const UltraSrtFcst =() => {
    
    const area = useParams().area;
    const dt = useParams().dt;
    const x = useParams().x;
    const y = useParams().y;

    const [items, setItems] = useState();
        
        useEffect(() => {
            
            let apikey = 'YbCtbs4SETsco3SXnbTi7otpks1RagK%2FQMCp5pQNZCbTxKz6Kewoc%2FQRvLrGDPjMoZPCe9ml2sJWVQsi01LmcA%3D%3D'
            let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?'
            url = url + `serviceKey=${apikey}`;
            url = url + `&numOfRows=60`;
            url = url + `&pageNo=1`;
            url = url + `&base_date=${dt}`;
            url = url + `&base_time=0630`;
            url = url + `&nx=55&ny=127`;
            url = url + `&dataType=json`;
    
            
            fetch(url)
            .then((resp) => resp.json())
            .then((data) => setItems(data.response.body.items))
            .catch((err) => console.log(err))
            
            console.log(url)
        
    }, [items]);

    

    const ops = code.map((item) =>
    <option value={item["예보구분"]} key={item["예보구분"]} >
        {item["항목명"]}
    </option>
    ).filter((item) => item.props.value === "초단기예보" );
   


    return (
        <article>
            <div className='grid'>
            <header>{area + " "}초단기예보</header> 
                <select id='sel' name='sel' >
                <option value=''>선택</option>
                {ops}
                </select>
            </div>
            {items && <FcstTable items={items}   gubun="초단기예보"/>}
        </article>

    );
}

export default UltraSrtFcst;