import mongoose from "mongoose";

const topicSchema = mongoose.Schema(
  {
    name: {
      type: String,
    },
    listed: {
      type: Boolean,
      default:true
    },
  },
  {
    timestamps: true,
  }
)

const Topic = mongoose.model('Topic', topicSchema);

export default Topic