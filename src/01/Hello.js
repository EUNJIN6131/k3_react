import logo from '../logo.svg';
import './Hello.css';
const Hello = () => {
    let name = 'mary';
    let git = 'https://github.com/EUNJIN6131';
    return (
        <main className='container'>
            <article data-theme="dark">
                <div>
                <img src = {logo} className = 'App-logo' alt='logo' />
                </div>
                <footer>
                    <hgroup>
                    <h1>{name}</h1>
                    <h2>< a href = {git}>{git}</a></h2>
                    </hgroup>
                </footer>
            </article>

        </main>
    );
}

//리턴 반드시 있어야하고 그 안에 태그1개 (한개 태그안에 자식 노드들은 상관x)  그리고 마지막엔 export가 필요하다.
export default Hello;