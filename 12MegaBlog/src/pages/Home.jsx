import React, {useEffect, useState} from 'react'
import appwriteSErvice from '../appwrite/config'
import { Container, PostCard } from '../components'

function Home() {
    const [posts, setPosts] = useState([])

    useEffect(()=> {

        appwriteSErvice.getPost().then((posts) => {
            if(posts){
                setPosts(posts.document)
            }
        })

    }, [])
  
    if(posts.length=== 0){
        return(
            <div className='w-full py-8 mt-4 text-center'> 
                <Container>
                    <div className='flex flex-wrap'>
                        <div className='p-2 w-full'>
                            <h1 className='text-2xl font-bold hover:text-gray-500'>
                                Login To Read Posts
                            </h1>
                        </div>
                    </div>
                </Container>
            </div>
        )
    }
        return(
            <div className='w-full py-8'>
                <Container>
                    <div className='flex flex-wrap'>
                        {posts.map((post)=>{
                            <div key={post.$id} className='p-2 w-1/4'>
                               <PostCard {...post}/>
                            </div>
                        })}
                    </div>
                </Container>
            </div>
        )
}

export default Home