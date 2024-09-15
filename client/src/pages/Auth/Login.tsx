import CredentialsForm from "../../components/credentialsForm/credentials";
import style from "./log-reg.module.css";

const Login = () => {
  function clickHandler() {}
  function onChangePass() {}
  function onChangeUsername() {}
  return (
    <div className={style.container}>
      <div>
        <h3 style={{ textAlign: "center" }}>Chit Chat Login!!</h3>
      </div>

      <div className={style.credentials}>
        <CredentialsForm
          buttonName="Login"
          clickHandler={clickHandler}
          onChangePass={onChangePass}
          onChangeUsername={onChangeUsername}
        />
      </div>

      <div className={style.footer}>
        <p>
          Don't have an account ? <a href="/register">Regiser</a>
        </p>
      </div>
    </div>
  );
};

export default Login;
