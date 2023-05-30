import { Link } from 'react-router-dom';
import { useRecoilState } from 'recoil';
import { CntAtoms } from './CntAtoms';

const CntInput = () => {

    const [n, setN] = useRecoilState(CntAtoms);
    


    const downN = (e) => {
        e.preventDefault();
        if( n -1 < 0) setN(0);
        else setN(n-1);

    }

    const upN = (e) => {
        e.preventDefault();
        if (n + 1 > 100) setN(100);
        setN(n + 1);

    }

    return (

        <article>
            <form>
                <div className="grid">
                    <div></div>
                    <div><button onClick={downN}>-</button></div>
                    <div><input type="text" id="txt1" name="txt1" value={n} readOnly></input> </div>
                    <div><button onClick={upN}>+</button></div>
                    <div></div>
                </div>
            </form>
            <footer>
                <Link to='./disp'>출력화면이동</Link>
            </footer>
        </article>
       
        
    )
}

export default CntInput;