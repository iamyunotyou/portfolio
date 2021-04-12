import React from 'react';
import Comment from './component/Comment';
import Vote from './component/Vote';

class App extends React.Component { 
  state = { time: null };

  getTime() {
    return new Date().toLocaleDateString();
  }

  // componentDidMount(
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => console.log(position),
  //     (err) => console.log(err),
  //   )
  // )



  render() {
    window.navigator.geolocation.getCurrentPosition(
      (position) => console.log(position),
      (err) => console.log(err),
    )

    return (
    <div htmlFor="search">
      <label className="search" htmlFor="username">유저 이름을 입력하세요: </label>
      <input id="username" type="text" />
      <button style={{backgroundColor: 'blue', color: 'white'}}> 검색 </button>
      <p>오늘은 {this.getTime()}</p>
      <h2 style={{textAlign: 'center'}}>방명록</h2>
      <Comment author='Peter' timeAgo="오늘 4:00 PM" text='오버워치'/>
      <Comment author='Jeff' timeAgo="오늘 3:00 PM" text='맥북 사주세요'/>
      <Comment author='Sam' timeAgo="오늘 2:00 PM" text='리그 오브 레전드'/>
    </div>
  )
}
}

export default App;
