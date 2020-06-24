export interface PostObject {
  userId: number
  id: number
  body: string
  title: string
}

export interface GetPostsResponse {
  posts: Array<PostObject>
}
