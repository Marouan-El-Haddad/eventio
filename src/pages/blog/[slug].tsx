import { BlitzPage, useParam } from "@blitzjs/next"
import { useStringParam } from "src/utils/utils"

export const BlogPostPage: BlitzPage = () => {
  const slug = useStringParam("slug")
  return <div>Blog post: {slug}</div>
}

export default BlogPostPage
