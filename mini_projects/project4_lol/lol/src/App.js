import React from 'react';
import Comment from './component/Comment';


class App extends React.Component { 

  getTime() {
    return new Date().toLocaleDateString();
  }

  state = { time: null };

  render() {
    return (
    <div htmlFor="search">
      <label className="search" htmlFor="username">이름을 입력하세요: </label>
      <input id="username" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}> 제출 </button>
      <p>오늘은 {this.getTime()}</p>
      <Comment />
    </div>
  )
}
}

export default App;
