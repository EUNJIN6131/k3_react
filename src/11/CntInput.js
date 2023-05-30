const CntInput = ({n, setN}) => {


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
                        <div><button onClick={(e) => upN(e)}>+</button></div>
                        <div></div>
                    </div>
                </form>
            </article>
    )
}

export default CntInput;