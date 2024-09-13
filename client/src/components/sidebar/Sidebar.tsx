import style from "./sidebar.module.css";
import data from "./data.json";
import Avator from "../avator/avator";

const Sidebar = () => {
  return (
    <div className={style.sidebar_container}>
      <div className={style.sidebar_header}>
        <h3>Chats</h3>
      </div>
      <div className={style.sidebar_chat_items}>
        {data.map((item) => (
          <div key={item.username} className={style.chat_item}>
            <div className={style.profile_pic}>
              <Avator name={item.username} />
            </div>
            <div className={style.metadata}>
              <div className={style.name_time}>
                <p>{item.username}</p>
                <p>{item.createdAt}</p>
              </div>
              <div className={style.lastest_message}>
                <p>{item.lastestMessage}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
