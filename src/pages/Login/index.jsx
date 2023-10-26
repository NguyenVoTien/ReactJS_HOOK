import './styles.css';

const LoginPage = () => {
  return (
    <>
      <section>
        <div className="form-box">
          <div className="form-value">
            <form action="">
              <h2>Login</h2>
              <div className='inputbox'>
                <ion-icon name="mail-outline"></ion-icon>
                <input id='1' type="email" required placeholder='Email' />
                <label id='1'>Email</label>
              </div>
              <div className='inputbox'>
                <ion-icon name="lock-closed-outline"></ion-icon>
                <input id="2" type="password"  required placeholder='Password'/>
                <label id="2">Password</label>
              </div>
              <div className='forget'>
                <label id='3'> <input type="checkbox" /> Re-Password <a href="#"></a> </label>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
