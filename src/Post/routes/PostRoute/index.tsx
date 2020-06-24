import React, { Component } from 'react'
import { observer, inject } from 'mobx-react'
import { PostStore } from "../../stores/PostStore"
import LoadingWrapperWithFailure from "../../../components/common/LoadingWrapperWithFailure"
import PostList from "../../components/PostList"

interface PostRouteprops { }
interface InjectedProps extends PostRouteprops {
    postStore: PostStore
}
@inject('postStore')
@observer
class PostRoute extends Component {
    componentDidMount() {
        this.getPosts()
    }

    getInjectedProps = (): InjectedProps => this.props as InjectedProps

    getPostStore = () => {
        return this.getInjectedProps().postStore
    }

    getPosts = () => {
        this.getPostStore().getPostList()
    }

    renderSuccessUI = observer(() => {
        const { posts } = this.getPostStore()
        return (
            <React.Fragment>
                <PostList posts={posts} />
            </React.Fragment>
        )
    })

    render() {
        const { getPostListAPIStatus, getPostListAPIError } = this.getPostStore()
        return (
            <LoadingWrapperWithFailure
                apiStatus={getPostListAPIStatus}
                apiError={getPostListAPIError}
                onRetry={this.getPosts}
                renderSuccessUI={this.renderSuccessUI}
            />
        )
    }
}

export default PostRoute