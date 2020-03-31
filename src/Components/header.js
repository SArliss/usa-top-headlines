import React from 'react';

function Header(props) {
  return (
    <header>
      <h1>America's Top News</h1>
      <p>{props.curTime}</p>
      <p>COVID-19 news: <a href="https://www.worldometers.info/coronavirus/country/us/" target="_blank" rel="noopener noreferrer">See the latest coverage of the new coronavirus</a></p>
    </header>
  )
}

export default Header;