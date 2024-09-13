import Bubble from "./bubble/bubble";
import style from "./chatbox.module.css";
import data from "./data.json";

const Chatbox = () => {
  return (
    <div className={style.chatbox_container}>
      <div className={style.messages_wrapper}>
        {data.map((item, index) => (
          <Bubble item={item} />
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
