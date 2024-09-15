import { getModelForClass, prop } from "@typegoose/typegoose";

class UserEntity {
  @prop({ required: true })
  public name?: string;
  @prop()
  public username?: string;
  @prop()
  public email?: string;
  @prop()
  public password?: string;
}

const UserModel = getModelForClass(UserEntity);
export default UserModel;
