import { Link } from 'react-router-dom';
import xy from './getxy.json';

const FcstMain = () => {

    const ops = xy.map((item) =>
        <option value={item["행정구역코드"]} key={item["행정구역코드"]} >
            {item["1단계"]}
        </option>
    );
 
    console.log(xy);

    return (


        <article>
            <header><h2>단기예보 선택</h2></header>
            <div className='grid'>
                <div>

                    <input type="date" id="dt" name="dt" /></div>
                <div>
                    <select id="sel" name="sel">
                        <option value>선택</option>{ops}</select>

                </div>
            </div>
            <footer>
                <div className="grid">
                    <Link to='/ultra' role='button'>초단기예보</Link>
                    <Link to='/vilage' role='button'>단기예보</Link>
                </div>
            </footer>
        </article>



    );
}

export default FcstMain;