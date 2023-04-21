import MyClockImg from "./MyClockImg";
import MyClockTime from "./MyClockTime";
import '../01/Hello.css'
import '../App.css';

const MyClock = () => {
    return(

        <main className="container">
            <article data-theme="dark">
                <MyClockImg />
                <MyClockTime />
            </article>
        </main>
    )
}

export default MyClock;