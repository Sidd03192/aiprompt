'use client'
import {useState, useEffect} from 'react'
import PromptCard from './PromptCard'
const Feed = () => {
  const [searchText, setSearchText] = useState();
  const [posts, setPosts] = useState([])
  const PromptCardList = ({data, handleTagClick})=>{

    return (
      <div className="mit-16 prompt_layout">
        {data.map((post)=>(
          <PromptCard
            key={post.id}
            post={post}
            handleTagClick={handleTagClick}
          />
        ))}
      </div>
    )
  }
  const handleSearchChange=()=>{
    
  }

// now we need to fetch data from our own api 

useEffect(()=>{
  const fetchPosts= async()=>{
    const response = await fetch ('/api/prompt');
    const data = await response.json();
    setPosts(data)
  }

  console.log(posts);
  fetchPosts();
},[])


  return (
    <section className='feed'>

      <form className='relative w-full flex-center'>

        <input type="text" className='search_input peer' value={searchText} onChange={handleSearchChange} required placeholder="search for a tag or username"/>
      </form>

      <PromptCardList
        data={posts}
        handleTagClick={()=>{}} />

    </section>
  )
}

export default Feed
