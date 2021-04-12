import React from 'react';

class App extends React.Component { 


  state = { time: null };

  render() {
    return (
    <div htmlFor="search">
      <label className="search" htmlFor="username">이름을 입력하세요: </label>
      <input id="username" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}> 제출 </button>
    </div>
  )
}
}
export default App;
