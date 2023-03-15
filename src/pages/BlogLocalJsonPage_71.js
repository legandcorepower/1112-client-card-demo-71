import { useState } from 'react';
import blogsdata from '../data/blogData2_71';

const BlogsLocalPage_71 = () => {
    const [name,setName] = useState('207410571');
    const [id,setid] = useState('207410571');

    const [data,setData] = useState(blogsdata);
    console.log('blog data',data);
    return(
        <>
         <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Local Json --{name} {id}</h2>
      </div>
      <div className="blogs-center">
        {data.map((item) => {
         const {id,img,remote_img,category,title,desc} = item;
            return(
              <article key={id} className="blog">
          <img
            src={img}
            alt={title}
            className="img blog-img"
          />
          <div className="blog-content">
            <span>{category} <i className="fa-solid fa-mug-saucer"></i></span>
            <h3>{title}</h3>
            <p>{desc}</p>
            <a href="#">read more</a>
          </div>
        </article>
            )
        })}
        
      </div>
    </section>
        </>
    )
}

export default BlogsLocalPage_71;
