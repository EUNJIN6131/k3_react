const Taccident02 = ({ c2, sel1, sel2, setSel2 }) => {
    const c2Arr = c2.filter((item) => item[0] === sel1);
    //filter 조건에 만족하는것만 넣어라

    const btTag = c2Arr.map((item) => 
      <li key={item}>
        <button onClick={()=> setSel2(item)}>{item}</button>
        </li>
    );

   

    return (
        <nav>
            <ul>
                <h2><strong>사고유형_중분류</strong></h2>
            </ul>
            <ul>
                {btTag}
            </ul>
            <header>
           
            </header>
        </nav>

    );
}

export default Taccident02;