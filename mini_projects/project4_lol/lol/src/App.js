import React from 'react';
import Comment from './component/Comment';
import Vote from './component/Vote';
import UnderageKick from './component/UnderageKick';

class App extends React.Component { 

  state = { time: null, longitude: null, latitude: null , gps_error: '', age: null }

  getTime() {
    let now_time_hour = new Date().getHours().toString();
    let now_time_min = new Date().getMinutes().toString();
    return now_time_hour + ": " + now_time_min;
  }

  getAge() {
    const enteredAge = prompt('나이?');
    this.setState( { age: enteredAge })
  }
  // componentDidMount(
  //   window.navigator.geolocation.getCurrentPosition(
  //     (position) => console.log(position),
  //     (err) => console.log(err),
  //   )
  // )

 componentDidMount() {
  window.navigator.geolocation.getCurrentPosition(
    (position) => this.setState({ longitude : position.coords.longitude, latitude: position.coords.latitude }),
    (err) => this.setState({gps_error : err.message}),
  )
 }

 componentDidUpdate() {

 }

  render() {
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
      {/* if (this.state.gps_error && !this.state.lat) {
        return <div> Error: {this.state.gps_error} </div>
      }
      if (!this.state.gps_error && this.state.lat) {
        return <div>Latitude: {this.state.lat}</div>
      } 
      return <div>Loading</div>; */}
      <p>지금 시간은 {this.getTime()}입니다. 10시 이후라면 미성년자는 집에 가세요. </p>
      <p>Location : 당신의 좌표는 {this.state.longitude}, {this.state.latitude} 입니다. 주위에 롤을 하는 유저는 10명입니다.</p>
      <p>Error: {this.state.errorMessage}</p>
      <input type="text" onChange={this.getAge} />
      <UnderageKick age={this.state.age}>나이</UnderageKick>
    </div>
  )
}
}

export default App;
