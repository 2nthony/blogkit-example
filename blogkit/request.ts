import { Request } from "blogkit";
import { getPost, getPostList } from "./server";

export const request: Request = {
  // @ts-ignore
  async getPostList() {
    // const posts = await fetch('/api/getPostList')
    const posts = await getPostList();

    return posts;
  },

  // @ts-ignore
  async getPost(slug) {
    // const post = await fetch('/api/getPost')
    const post = await getPost(slug);

    return post;
  },
};
