import './register.css';

export default function Register() {
  return (
    <div className='login'>
      <div className="loginWrapper">
        <div className="loginLeft">
            <h3 className="loginLogo">Lamasocial</h3>
            <span className="loginDesc">
                Connect with friends and the world aroundyou on Lamasocial.
            </span>
        </div>
        <div className="loginRight">
            <div className="loginBox">
                <input type="email" placeholder='Email' className="loginInput" />
                <input type="password" placeholder='Password' className="loginInput" />
                <button className="loginButton">Sign Up</button>
                <button className="loginRegisterButton">Log into Account</button>
            </div>
        </div>
      </div>
    </div>
  )
}
