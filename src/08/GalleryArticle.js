import './Gallery.module.css';


const GalleryArticle = ({ item }) => {
    let tags = item.galSearchKeyword.split(',');
    tags = tags.map((i) => <div>{i}</div>);

 
    return (


        <article>
            <header className='spneBox'>
                <spne className='box1'>{item.galTitle}</spne>
                <span className='box2'>{item.galPhotographyLocation}</span>
            </header>
            <div>
                <img src={item.galWebImageUrl.replace('http', 'https')} />
            </div>
            <footer className='grid'>
                {tags}
            </footer>

        </article>
    );

}

export default GalleryArticle;