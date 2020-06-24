import PostAPIService from "../services/PostService/index.api";

import { PostStore } from "./PostStore";

const postStore = new PostStore(new PostAPIService)

const postStores = {
    postStore
}

export default postStores