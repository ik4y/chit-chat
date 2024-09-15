import { ChangeEvent, MouseEvent } from "react";
import style from "./credentials.module.css";

interface ICredentialForm {
  buttonName: string;
  clickHandler(e: MouseEvent<HTMLInputElement>): void;
  onChangePass(e: ChangeEvent<HTMLInputElement>): void;
  onChangeUsername(e: ChangeEvent<HTMLInputElement>): void;
}

const CredentialsForm = ({
  buttonName,
  clickHandler,
  onChangePass,
  onChangeUsername,
}: ICredentialForm) => {
  return (
    <div className={style.credentials_container}>
      <input type="text" placeholder="Username" onChange={onChangeUsername} />
      <input type="password" placeholder="Password" onChange={onChangePass} />
      <input type="button" value={buttonName} onClick={clickHandler} />
    </div>
  );
};

export default CredentialsForm;
