import avator from "./avator.module.css";
type Avator = {
  name: string;
};

const Avator = ({ name }: Avator) => {
  return (
    <div className={avator.avatar}>
      <p>{name?.charAt(0)}</p>
    </div>
  );
};

export default Avator;
