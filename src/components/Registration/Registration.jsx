import './Registration.scss';

export function Registration() {
  return (
    <div className="registration">
      <div className="container">
        <form>
          <div className="registation__wrapper">
            <h2>Registration</h2>
            <div className="registration__item">
              <label>Email:</label>
              <input type="email" placeholder="Your email" />
            </div>
            <div className="registration__item">
              <label>Password:</label>
              <input type="password" placeholder="Your password" />
            </div>
            <div className="registration__item">
              <label>repeat password:</label>
              <input type="password" placeholder="Repeat password" />
            </div>
            <button>Submit</button>
          </div>
        </form>
      </div>
    </div>
  );
}
