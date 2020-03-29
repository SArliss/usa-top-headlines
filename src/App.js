import React from 'react';
import './App.css';
import axios from 'axios';

// https://newsapi.org/v2/top-headlines?country=us&apiKey=492d060bf37d4e54bf1ec609e650f152

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      news: [],
      selectedNew: [],
      isLoading: false,
      error: ""
    }
  }

  async componentDidMount() {
    this.setState({ isLoading: true });

    try {
      const news = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=492d060bf37d4e54bf1ec609e650f152');
      console.log(news.data)
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
    return (
      <div className="App">

        <header>USA Top Headlines</header>

        <div className="news-container">
          
        </div>

      </div>
    );
  }
}

export default App;
