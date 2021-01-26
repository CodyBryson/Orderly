import mongoose from 'mongoose'
import ValueSchema from '../models/Value'
import AccountSchema from '../models/Account'
import BoardSchema from '../models/Board'
import ListSchema from '../models/List'
import TaskSchema from '../models/Task'
import CommentSchema from '../models/Comment'

class DbContext {
  Values = mongoose.model('Value', ValueSchema);
  Account = mongoose.model('Account', AccountSchema);
  Board = mongoose.model('Board', BoardSchema)
  Task = mongoose.model('Task', TaskSchema)
  Comment = mongoose.model('Comment', CommentSchema)
  List = mongoose.model('List', ListSchema)
}

export const dbContext = new DbContext()
