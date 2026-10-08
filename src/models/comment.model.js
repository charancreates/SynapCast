import mongoose, { Schema } from "mongoose";
import mongooseAggregratePaginate from "mongoose-aggregate-paginate-v2";

const commentSchena = new Schema(
  {
    content: {
      type: String,
      required: true,
    },
    video: {
      type: Schema.Types.ObjectId,
      ref: "Video",
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  }
);

videoSchema.plugin(mongooseAggregratePaginate);

export const Comment = mongoose.model("Comment", commentSchena);
