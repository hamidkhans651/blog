import Link from 'next/link'
import { PostData } from '@/lib/posts'
import { formatDate } from '@/lib/utils'
import Image from 'next/image'

export default function BlogCard({ 
  post, 
  compact = false 
}: { 
  post: PostData
  compact?: boolean 
}) {
  return (
    <Link href={`/blog/${post.id}`} className="group">
      <div className={`bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden transition-transform duration-300 group-hover:scale-105 h-full flex flex-col ${
        compact ? 'flex-row' : ''
      }`}>
        {post.coverImage && (
          <div className={`relative ${compact ? 'w-1/3 h-auto' : 'h-48 w-full'}`}>
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              sizes={compact ? '200px' : '(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'}
            />
          </div>
        )}
        <div className={`p-6 flex-1 flex flex-col ${compact ? 'w-2/3' : ''}`}>
          <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">
            {post.title}
          </h3>
          {!compact && (
            <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-2">
              {post.excerpt}
            </p>
          )}
          <div className="mt-auto">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500 dark:text-gray-400">
                {formatDate(post.date)}
              </span>
              <div className="flex space-x-2">
                {post.tags.slice(0, compact ? 1 : 2).map(tag => (
                  <span 
                    key={tag} 
                    className="bg-gray-200 dark:bg-gray-700 px-2 py-1 rounded text-xs"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}