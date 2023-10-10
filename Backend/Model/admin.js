import mongoose from "mongoose";

const adminSchema = mongoose.Schema(
  {
    email: {
      type: String,
    },
    password: {
      type: String,
    },
  },
)

const Admin = mongoose.model('Admin', adminSchema);

export default Admin