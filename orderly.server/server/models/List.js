import mongoose from 'mongoose'
const Schema = mongoose.Schema
const ObjectId = mongoose.Schema.Types.ObjectId

const List = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: String, required: true },
    boardId: { type: ObjectId, ref: 'Board', required: true },
    createdAt: { type: String, required: false }
  },
  { timestamps: true, toJSON: { virtuals: true } }
)
List.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
export default List
