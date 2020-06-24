import React from 'react'
import { observer } from 'mobx-react'
import { PostListWrapper, PostsHeading } from './styledComponents'
import Post from '../Post'
import PostModel from '../../stores/models/PostModel'

type PostListProps = {
  posts: Array<PostModel>
}
@observer
class PostList extends React.Component<PostListProps> {
  renderPosts = () => {
    const { posts } = this.props

    return posts.map(post => <Post key={post.id} post={post} />)
  }
  render() {
    return (
      <PostListWrapper>
        <PostsHeading>Posts</PostsHeading>
        {this.renderPosts()}
      </PostListWrapper>
    )
  }
}

export default PostList
