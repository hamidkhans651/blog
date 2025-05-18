import Link from 'next/link'
import { getSortedPostsData } from '@/lib/posts'
import BlogCard from './BlogCard'

interface RecentPostsProps {
  currentPostId?: string
  limit?: number
}

export default function RecentPosts({ 
  currentPostId, 
  limit = 3 
}: RecentPostsProps) {
  const posts = getSortedPostsData()
    .filter(post => post.id !== currentPostId)
    .slice(0, limit)

  return (
    <div className="mt-16">
      <h2 className="text-2xl font-bold mb-6">Recent Posts</h2>
      <div className="grid grid-cols-1 gap-6">
        {posts.map(post => (
          <BlogCard key={post.id} post={post} compact />
        ))}
      </div>
      {posts.length === limit && (
        <div className="mt-6 text-center">
          <Link 
            href="/blog" 
            className="text-blue-600 dark:text-blue-400 hover:underline"
          >
            View all posts →
          </Link>
        </div>
      )}
    </div>
  )
}