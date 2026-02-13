import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

const NewsBoard = ({category, searchQuery}) => {

  const [articles,setArticles] = useState([]);

  useEffect(()=>{
    let query = searchQuery || (category === "general" ? "india" : category);
    let url =  `https://newsapi.org/v2/everything?q=${query}&sortBy=publishedAt&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
    fetch(url).then(res=> res.json()).then(data=>{
      console.log(data)
      setArticles(data.articles || [])
    })
  },[category, searchQuery])

  return (
    <>
    <h2 className="text-center m-4" style={{fontSize: '2.5rem', fontWeight: 'bold', color: '#2c3e50'}}>Latest <span className="badge bg-danger" style={{fontSize: '1.5rem', padding: '0.5rem 1rem'}}>📰 News</span></h2>
    <div className="d-flex flex-wrap justify-content-center gap-4" style={{padding: '20px'}}>
    {articles && articles.length > 0 && articles.filter(news => news.title && news.title !== "[Removed]" && news.description).map((news, index) =>{
      return <NewsItem key={index} title={news.title} description={news.description} src={news.urlToImage} url={news.url}/>
    })}
    </div>
    </>
  )
}

export default NewsBoard;  