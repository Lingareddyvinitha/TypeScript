import { PostObject } from '../../stores/types'

interface PostService {
  getPostsAPI: () => Promise<Array<PostObject>>
}

export default PostService
