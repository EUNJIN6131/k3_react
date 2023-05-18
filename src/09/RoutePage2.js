import { useLocation } from "react-router-dom";
import qs from 'query-string';

const RoutePage2 = () => {

    const loc = useLocation().search;
    console.log('loc', loc)
    //?item=%F0%9F%92%99&item2=%F0%9F%8D%AA
    const item =  qs.parse(loc).item;
    const item2 = qs.parse(loc).item2;
    //console.log('item', item);

    let loc2 = loc.replace('?', '');
    loc2 = loc2.split('&')
    loc2.map((i) => i.split('='))
    console.log(loc2)
    
    return (

        <article>
            <header><h1>RoutePage2</h1></header>
            <h2>{item}</h2>
            <h2>{item2}</h2>
        </article>




    );
}

export default RoutePage2;