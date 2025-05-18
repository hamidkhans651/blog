import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import BlogCard from '@/components/blog/BlogCard'

export default function BlogPage() {
  const posts = getSortedPostsData()

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Blog</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} />
        ))}
      </div>
    </div>
  )
}