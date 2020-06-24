import { observable, action, computed } from 'mobx'
import { bindPromiseWithOnSuccess } from '@ib/mobx-promise'
import { API_INITIAL, APIStatus } from '@ib/api-constants'

import PostService from "../../services/PostService"

import { PostObject } from "../types"
import PostModel from "../models/PostModel"


class PostStore {
    postService: PostService
    @observable getPostListAPIStatus!: APIStatus
    @observable getPostListAPIError!: Error | null
    @observable posts!: Array<PostModel>
    constructor(postService: PostService) {
        this.postService = postService
    }

    @action.bound
    init() {
        this.getPostListAPIStatus = API_INITIAL
        this.getPostListAPIError = null
        this.posts = []
    }

    @action.bound
    setPostListAPIStatus(status: APIStatus) {
        this.getPostListAPIStatus = status
    }

    @action.bound
    setPostListAPIResponse(response: Array<PostObject> | null) {
        if (response) {
            this.posts = response.map(post => {
                return new PostModel(post)
            })
        }

    }

    @action.bound
    setPostListAPIError(error: Error | null) {
        this.getPostListAPIError = error
    }

    @action.bound
    getPostList() {
        const getTodosPromise = this.postService.getPostsAPI()
        return bindPromiseWithOnSuccess(getTodosPromise)
            .to(this.setPostListAPIStatus, this.setPostListAPIResponse)
            .catch(this.setPostListAPIError)
    }

    @action.bound
    clearStore() {
        this.init()
    }
}

export default PostStore