import React from 'react';
import Image from './Image'
import './App.css';

class App extends React.Component {
  render(){
    return (
      <div>
        <Image url={"https://imgs.xkcd.com/comics/map_age_guide.png"}/>
      </div>
    )
  }
}

export default App;
