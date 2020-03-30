import React from 'react';
import './App.css';
import axios from 'axios';
import Footer from './Components/footer';
import Header from './Components/header';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: {},
      selectedNew: [],
      isLoading: false,
      error: "",
      show: false,
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

  showModal = (noticia) => {
    this.setState({
      selectedNew: noticia,
      show: true
    })
  }

  hideModal = () => {
    this.setState({
      show: false
    })
  }

  render() {
    const news = this.state.news.articles;
    console.log(news);

    return (
      <div className="App">

        < Header curTime={this.state.curTime}/>

        <div className="news-container">

          {this.state.isLoading && <p>Loading news...</p>}
          {this.state.error && <p>{this.state.error}</p>}

          {news && news.map((noticia, index) =>
            <div
              key={index}
              className="single-new"
              onClick={e => this.showModal(noticia)}
            >
              <h4>{noticia.source.name.toUpperCase()}</h4>
              <img src={noticia.urlToImage} alt={noticia.source.name} />
              <p>{noticia.title}.</p>
            </div>
          )}
        </div>

        {this.state.show &&
          <div className="modal">
            <h4>{this.state.selectedNew.source.name.toUpperCase()}</h4>
            <img src={this.state.selectedNew.urlToImage} alt={this.state.selectedNew.source.name} />
            <p>{this.state.selectedNew.title}.</p>
          </div>
        }

        < Footer />

      </div>
    );
  }
}

export default App;
