import { BrowserRouter, Routes, Route } from "react-router-dom";
import UltraSrtFcst from "./UltraSrtFcst";
import VilageFcst from "./VilageFcst";
import FcstMain from "./FcstMain";
import FcstNav from "./FcstNav";


const Fcst = () => {

    //const getData = () => {
    //    let url = 'http://apis.data.go.kr/1360000/VilageFcstInfoService_2.0/getUltraSrtFcst?serviceKey=YbCtbs4SETsco3SXnbTi7otpks1RagK%2FQMCp5pQNZCbTxKz6Kewoc%2FQRvLrGDPjMoZPCe9ml2sJWVQsi01LmcA%3D%3D&numOfRows=60&pageNo=1&base_date=20230518&base_time=0630&nx=55&ny=127&dataType=json'
    //}

    return (

        <BrowserRouter>
            <main className="container">
                <FcstNav />
                <Routes>
                    <Route path='/' element={<FcstMain />} />
                    <Route path='/ultra/:dt/:area/:x/:y' element={<UltraSrtFcst />} />
                    <Route path='/vilage/:dt/:area/:x/:y' element={<VilageFcst />} />

                </Routes>
            </main>
        </BrowserRouter>


    );
}

export default Fcst;