import React, { useState, useEffect } from 'react';
import axios from 'axios';

const News = () => {
  const [news, setNews] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const apiKey = '76ff0803face49d784f31401d1e7689b';
    const apiUrl = `https://newsapi.org/v2/top-headlines?country=br&apiKey=${apiKey}`;

    axios.get(apiUrl)
      .then((response) => {
        setNews(response.data.articles);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching news:', error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Notícias Atuais</h1>
      <ul>
        {news.map((article) => (
          <li key={article.title}>
            <h2>{article.title}</h2>
            <p>{article.description}</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Leia mais
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default News;