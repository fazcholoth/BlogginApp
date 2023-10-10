import mongoose from "mongoose";

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    image: {
      type: String,
    },
    password: {
      type: String,
    },
    email: {
      type: String,
    },
    blocked: {
      type: Boolean,
      default:false
    },
  },
  {
    timestamps: true,
  }
)

const User = mongoose.model('User', userSchema);

export default User