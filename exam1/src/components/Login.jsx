export const Login = () => {
  //  use reqres to log user in.

  return (
    <form className="loginform home">
      <input
        name="username"
        type="text"
        placeholder="Enter username"
        className="login_username"
      />
      <input
        name="password"
        type="text"
        placeholder="Enter password"
        className="login_password"
      />
      <input type="submit" value="SIGN IN" className="login_submit btn" />
    </form>
  );
};
