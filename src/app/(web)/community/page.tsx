// filepath: e:\1_MoykBlenderProjs\SQ-sites\sumoqubes\sumoqubes-site\src\app\(web)\community\page.tsx
import ContentGrid from '@/components/content-grid'
import { load } from 'outstatic/server'

export default async function CommunityPage() {
  const { docs } = await getData()
  
  return (
    <div className="pt-24 mb-16 animate-fade-up opacity-0">
      {docs.length > 0 && (
        <ContentGrid
          title="Community"
          items={docs}
          collection="community"
        />
      )}
    </div>
  )
}

async function getData() {
  const db = await load()
  const docs = await db
    .find({ collection: 'community', status: 'published' })
    .sort({ publishedAt: -1 })
    .toArray()
  
  return { docs }
}