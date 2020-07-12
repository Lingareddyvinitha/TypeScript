import React from 'react'
import { observer } from 'mobx-react'
import { PostListWrapper, PostsHeading, Total } from './styledComponents'
import Post from '../Post'
import PostModel from '../../stores/models/PostModel'
import { withTranslation, WithTranslation } from 'react-i18next'
import i18next from 'i18next'
interface PostListProps extends WithTranslation {
  posts: Array<PostModel>
}
@observer
class PostList extends React.Component<PostListProps> {
  renderPosts = () => {
    const { posts, t } = this.props
    return posts.map(post => <Post key={post.id} post={post} />)
  }

  onChangeLanguage = event => {
    i18next.changeLanguage(event.target.value) //TODO
  }
  render() {
    const { t } = this.props
    return (
      <PostListWrapper>
        <PostsHeading>{t('posts:posts.title', { count: 3 })}</PostsHeading>
        <select id='language' name='language' onChange={this.onChangeLanguage}>
          <option value='en'>English</option>
          <option value='hi'>Hindi</option>
        </select>
        <Total>{t('posts:posts.total', { count: 100 })}</Total>
        {this.renderPosts()}
      </PostListWrapper>
    )
  }
}

export default withTranslation('translation')(PostList)
