import { observable } from 'mobx'

import { PostObject } from '../../types'

class PostModel {
  id: string
  @observable title: string
  @observable body: string
  @observable userId: number

  constructor(post: PostObject) {
    this.id = post.id.toString()
    this.title = post.title
    this.body = post.body
    this.userId = post.userId
  }
}

export default PostModel
