import { BrowserRouter, Routes, Route } from "react-router-dom";
import { RecoilRoot } from "recoil";
import CntDisp from './CntDisp';
import CntInput from './CntInput'


const Cnt3 = () => {
    //useState 배열

    return (
        <BrowserRouter>
            <main className="container">
                <RecoilRoot>
                <Routes>
                    <Route path='/' element={<CntInput />} />
                    <Route path='/disp' element={<CntDisp />} />
                </Routes>
                </RecoilRoot>
            </main>
        </BrowserRouter>
    )
}

export default Cnt3;