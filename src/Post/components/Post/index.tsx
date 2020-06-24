import React from 'react'
import { PostWrapper, PostBody, PostTitle } from './styledComponents'
import PostModel from '../../stores/models/PostModel'
type PostProps = {
  post: PostModel
}
class Post extends React.Component<PostProps> {
  render() {
    const { post } = this.props
    return (
      <PostWrapper>
        <PostTitle>{post.title}</PostTitle>
        <PostBody>{post.body}</PostBody>
      </PostWrapper>
    )
  }
}

export default Post
