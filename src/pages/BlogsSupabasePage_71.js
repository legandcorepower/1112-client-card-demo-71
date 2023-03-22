//import axios from 'axios';
import { useState,useEffect } from 'react';
//import blogsdata from '../data/blogData2_71';
//let api_url = `http://localhost:5000/api/card2_71`;
//let api_url = `https://one112-server-card-demo-71.onrender.com/api/card2_71`;

import {supabase} from '../db/clientSupabase';

const BlogsSupabase_71 = () => {
    const [name,setName] = useState('207410571');
    const [id,setid] = useState('207410571');

    const [data,setData] = useState([]);
    //console.log('blog data',data);


      const fetchBlogDataFromSupabase = async() =>{
        try{
          let { data ,error } = await supabase
          .from('card_71')
          .select('*')
          
         console.log('data',data);
         setData(data);
      }catch(error){
        console.log(error);
       }
      }
     
      useEffect(()=>{
      fetchBlogDataFromSupabase();
      },[]);




    return(
        <>
         <section className="blogs">
      <div className="section-title">
        <h2>Fetch Blogs From Supabase --{name} {id}</h2>
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

export default BlogsSupabase_71;
