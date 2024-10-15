import React from 'react'
import appwriteService from '../appwrite/config'
import { Link } from 'react-router-dom'

function PostCard({ id, title, featuredImage }) { // Renamed $id to id
  const imageUrl = featuredImage 
    ? appwriteService.getFilePreview(featuredImage) 
    : 'path/to/default/image.jpg'; // Add a default image if featuredImage is missing

  return (
    <Link to={`/post/${id}`}> {/* Using id instead of $id */}
      <div className='w-full bg-gray-200 rounded-xl p-4'>
        <div className='w-full justify-center mb-4'>
          <img 
            src={imageUrl} 
            alt={title || 'Post image'}  // Fallback alt text
            className='rounded-xl'
            onError={(e) => e.target.src = 'path/to/default/image.jpg'} // Fallback for broken image URLs
          />
        </div>
        <h2 className='text-xl font-bold text-blue-900'>{title}</h2>
      </div>
    </Link>
  )
}

export default PostCard
