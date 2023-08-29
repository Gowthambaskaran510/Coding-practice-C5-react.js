// Write your code here
const Logout = props => {
  const {changeState} = props

  return (
    <button type="button" onClick={changeState}>
      Login
    </button>
  )
}

export default Logout
