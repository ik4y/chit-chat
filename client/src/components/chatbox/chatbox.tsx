import Bubble from "./bubble/bubble";
import style from "./chatbox.module.css";
import data from "./data.json";

const Chatbox = () => {
  return (
    <div className={style.chatbox_container}>
      <div className={style.messages_wrapper}>
        {data.map((item, index) => (
          <div
            className={item.from ? style.received_bubble : style.send_bubble}>
            <Bubble item={item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chatbox;
