import Avator from "../avator/avator";
import style from "./header.module.css";
type HeaderSignature = {
  profile?: string;
  name?: string;
  status?: string;
};

const Header = ({ profile, name, status }: HeaderSignature) => {
  return (
    <div className={style.header_container}>
      <div className={style.header_profile_icon}>
        <Avator name={"ikay"} />
      </div>
      <div className={style.header_user_name}>
        <p>{name || "ikay"} </p>
        <p>{status || "online"}</p>
      </div>
    </div>
  );
};

export default Header;
