'use client'

import {usePreview} from '../../lib'
import BlogList from './BlogList'

type Props = {
  query: string
}

export default function PreviewBlogList({query}: Props) {
  const posts = usePreview(null, query)

  return <BlogList posts={posts} />
}
