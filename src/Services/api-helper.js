import axios from 'axios';

const getNews = async () => {
  const news = await axios.get('https://yacdn.org/proxy/https://newsapi.org/v2/top-headlines?country=us&apiKey=492d060bf37d4e54bf1ec609e650f152');
  return news;
}

export default getNews;