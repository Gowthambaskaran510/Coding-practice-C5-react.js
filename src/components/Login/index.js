// Write your code here
const Login = props => {
  const {changeState} = props

  return (
    <button type="button" onClick={changeState}>
      Logout
    </button>
  )
}

export default Login
