import { useParams} from "react-router-dom";

const RoutePage1 =()=> {

    const item = useParams().item ;
    const item2 = useParams().item2 ;


    return (    

    <article>
        <header><h1>RoutePage1</h1></header>
       <h2>{item}</h2> 
       <h2>{item2}</h2>
    </article>



    );
}

export default RoutePage1;