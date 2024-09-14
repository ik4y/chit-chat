import style from "./bubble.module.css";

type bubble = {
  item: {
    message: string;
    from?: string; // optional for now
    to?: string; // optional for now
    time: string; // assume it's string for now
  };
};

const Bubble = ({ item }: bubble) => {
  return (
    <div
      className={`${style.bubble} ${
        item.from ? style.received_bubble : style.send_bubble
      }`}>
      <p>{item.message}</p>
      <p>{item.time}</p>
    </div>
  );
};

export default Bubble;
