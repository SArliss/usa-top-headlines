import React from 'react';
import './App.css';
import axios from 'axios';

// https://newsapi.org/v2/top-headlines?country=us&apiKey=492d060bf37d4e54bf1ec609e650f152

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: {},
      selectedNew: [],
      isLoading: false,
      error: "",
      curTime: new Date().toLocaleString()
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const news = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=492d060bf37d4e54bf1ec609e650f152');
      this.setState({
        news: news.data,
        isLoading: false
      });
    } catch (error) {
      console.log(error.message)
      this.setState({
        error: error.message,
        isLoading: false
      });
    }
  }


  render() {
    const news = this.state.news.articles;
    console.log(news);

    return (
      <div className="App">

        <header>
          <h1>America Top News</h1>
          <p>{this.state.curTime}</p>
          <p>COVID-19 news: <a href="https://www.worldometers.info/coronavirus/country/us/">See the latest coverage of the new coronavirus</a></p>
        </header>

        <div className="news-container">

          {this.state.isLoading && <p>Loading news...</p>}
          {this.state.error && <p>{this.state.error}</p>}

          {news && news.map((noticia, index) =>
            <div key={index} className="single-new">
              <h4>{noticia.source.name.toUpperCase()}</h4>
              <img src={noticia.urlToImage} alt={noticia.source.name} />
              <p>{noticia.title}.</p>
            </div>
          )}
        </div>

        <footer>Copyright © Sinara Arliss 2020</footer>

      </div>
    );
  }
}

export default App;
