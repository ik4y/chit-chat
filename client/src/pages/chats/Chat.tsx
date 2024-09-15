import Chatbox from "../../components/chatbox/chatbox";
import MessageInput from "../../components/chatbox/message-input/message-input";
import Header from "../../components/header/Header";
import Sidebar from "../../components/sidebar/Sidebar";
import style from "./chat.module.css";

export default function Chat() {
  return (
    <div className={style.home_root}>
      <Sidebar />
      <div className={style.main}>
        <Header />
        <Chatbox />
        <MessageInput />
      </div>
    </div>
  );
}
