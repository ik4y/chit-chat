import CredentialsForm from "../../components/credentialsForm/credentials";
import style from "./log-reg.module.css";

const Register = () => {
  function clickHandler() {}
  function onChangePass() {}
  function onChangeUsername() {}

  return (
    <div className={style.container}>
      <div>
        <h3 style={{ textAlign: "center" }}>Chit Chat Register</h3>
      </div>
      <div className={style.credentials}>
        <CredentialsForm
          buttonName="Register"
          clickHandler={clickHandler}
          onChangePass={onChangePass}
          onChangeUsername={onChangeUsername}
        />
      </div>
      <div className={style.footer}>
        <p style={{ textAlign: "center" }}>
          Already have an account ? <a href="/login">Login</a>
        </p>
      </div>
    </div>
  );
};

export default Register;
