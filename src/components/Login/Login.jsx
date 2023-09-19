import './Login.scss';

export function Login() {
  return (
    <div className="login">
      <div className="container">
        <form>
          <div className="login__wrapper">
            <h2>Login</h2>
            <div className="login__item">
              <label>Email:</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="login__item">
              <label>Password:</label>
              <input type="password" placeholder="Your password" />
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
