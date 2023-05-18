import {Link} from 'react-router-dom';

const FcstNav = () => {



    return (
        <nav>

        <ul>
        <li><Link to='/' >기상청 단기예보</Link></li>
        </ul>

        <ul>
        <li><Link to='/' role='button'>단기예보 홈</Link></li>
        </ul>
        </nav>

    );
}

export default FcstNav;