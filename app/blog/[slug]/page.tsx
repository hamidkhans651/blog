import { notFound } from 'next/navigation'
import { getPostData, getSortedPostsData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import MarkdownContent from '@/components/blog/MarkdownContent'
import RecentPosts from '@/components/blog/RecentPosts'

export async function generateStaticParams() {
  const posts = getSortedPostsData()
  return posts.map(post => ({
    slug: post.id,
  }))
}

export default async function PostPage({ params }: { params: { slug: string } }) {
  const post = await getPostData(params.slug)
  
  if (!post) {
    return notFound()
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <article className="prose dark:prose-invert max-w-none">
        <h1 className="text-4xl font-bold mb-2">{post.title}</h1>
        <div className="flex items-center space-x-2 text-gray-500 dark:text-gray-400 mb-8">
          <span>{formatDate(post.date)}</span>
          <span>•</span>
          <div className="flex space-x-2">
            {post.tags.map(tag => (
              <span key={tag} className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-sm">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {post.coverImage && (
          <div className="mb-8">
            <img 
              src={post.coverImage} 
              alt={post.title} 
              className="w-full h-auto rounded-lg shadow-lg"
            />
          </div>
        )}
        
        <MarkdownContent content={post.content} />
      </article>
      
      <RecentPosts currentPostId={post.id} />
    </div>
  )
}