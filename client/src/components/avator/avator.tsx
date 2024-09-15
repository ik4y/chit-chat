import avator from "./avator.module.css";
type TAvator = {
  name: string;
};

const Avator = ({ name }: TAvator) => {
  return (
    <div className={avator.avatar}>
      <p>{name?.charAt(0)}</p>
    </div>
  );
};

export default Avator;
