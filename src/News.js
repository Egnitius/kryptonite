import React, { useEffect, useState } from "react";
import axios from "axios";
import "./App.css";


function NewsSection() {
    const [news, setNews] = useState([]);
  
    useEffect(() => {
      const fetchNews = async () => {
        try {
          const response = await axios.get("https://min-api.cryptocompare.com/data/v2/news/?api_key=4adeed9b3de5eb507d65f26a9d150cc909328b183d74957dc8a250952ccb8f4a");
          setNews(response.data.Data);
        } catch (error) {
          console.log(error);
        }
      };
  
      fetchNews();
    }, []);
  
    return (
        <div className="news-section">
          <h2>News Section</h2>
          {news && news.length > 0 ? (
            news.slice(0, 6).map((article) => (
              <div className="news-card" key={article.id}>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
              </div>
            ))
          ) : (
            <p>Loading news...</p>
          )}
        </div>
      );                
  }

  export default NewsSection;