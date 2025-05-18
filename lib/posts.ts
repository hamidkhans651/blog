import fs from 'fs'
import path from 'path'
import matter from 'gray-matter' // Fixed import
import { remark } from 'remark'
import html from 'remark-html'

// Use path.join with __dirname if you want paths relative to this file
const postsDirectory = path.join(process.cwd(), 'posts')

export interface PostData {
  id: string
  title: string
  date: string
  excerpt: string
  coverImage: string
  tags: string[]
  content: string
}

export function getSortedPostsData(): PostData[] {
  // Check if directory exists first
  if (!fs.existsSync(postsDirectory)) {
    console.error(`Posts directory not found at: ${postsDirectory}`)
    return []
  }

  const fileNames = fs.readdirSync(postsDirectory)
  const allPostsData = fileNames.map(fileName => {
    const id = fileName.replace(/\.md$/, '')
    const fullPath = path.join(postsDirectory, fileName)
    const fileContents = fs.readFileSync(fullPath, 'utf8')
    const matterResult = matter(fileContents)
    
    return {
      id,
      ...matterResult.data,
      excerpt: matterResult.excerpt || '',
    } as PostData
  })
  
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1
    } else {
      return -1
    }
  })
}

export async function getPostData(id: string): Promise<PostData> {
  const fullPath = path.join(postsDirectory, `${id}.md`)
  const fileContents = fs.readFileSync(fullPath, 'utf8')
  const matterResult = matter(fileContents)
  
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content)
  const contentHtml = processedContent.toString()

  return {
    id,
    content: contentHtml,
    ...matterResult.data,
  } as PostData
}