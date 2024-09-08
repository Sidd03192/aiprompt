'use client'
import{useSession}  from 'next-auth/react'
import { useRouter } from 'next/router'
import Profile from '@components/Profile'

import {useState, useEffect} from 'react'

const MyProfile = () => {
  const { data: session } = useSession();

  const [myPosts, setMyPosts] = useState([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await response.json();

      setMyPosts(data);
    };

    if (session?.user.id) fetchPosts();
  }, [session?.user.id]);

  
  const handleEdit = (post) => {
    // router.push(`/update-prompt?id=${post._id}`);
  };

  const handleDelete = async (post) => {
    // const hasConfirmed = confirm(
    //   "Are you sure you want to delete this prompt?"
    // );
  }
  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page. Share your exceptional prompts and inspire others with the power of your imagination'
      data={myPosts}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    />
  );
}

export default MyProfile
