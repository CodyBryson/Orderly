import mongoose from 'mongoose'

const Schema = mongoose.Schema

const Board = new Schema(
  {
    title: { type: String, required: true },
    creatorId: { type: String, required: true },
    createdAt: { type: String, required: false }

  },
  { timestamps: true, toJSON: { virtuals: true } }
)

Board.virtual('creator', {
  localField: 'creatorId',
  ref: 'Account',
  foreignField: '_id',
  justOne: true
})
Board.virtual('lists', {
  localField: 'id',
  ref: 'List',
  foreignField: '_id',
  justOne: true
})
export default Board
