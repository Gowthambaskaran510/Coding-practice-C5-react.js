// Write your code here
import {Component} from 'react'

import Message from '../Message'
import Login from '../Login'
import Logout from '../Logout'

class Home extends Component {
  state = {isLogin: false}

  changeState = () => {
    const {isLogin} = this.state
    this.setState({isLogin: !isLogin})
  }

  render() {
    const {isLogin} = this.state

    let message
    let btn

    if (isLogin) {
      message = <Message content="Welcome User" />
      btn = <Login changeState={this.changeState} />
    } else {
      message = <Message content="Please Login" />
      btn = <Logout changeState={this.changeState} />
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          {message}
          {btn}
        </div>
      </div>
    )
  }
}
export default Home
