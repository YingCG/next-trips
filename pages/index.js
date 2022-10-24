import Head from 'next/head'
import Image from 'next/image'
import { useEffect, useState } from 'react'
import styles from '../styles/Home.module.css'
import Link from "next/link"

export async function getServerSideProps(){
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
  const data = await res.json();

  return {
    props: {
      posts: data,
    }
  }
}

export default function Home({posts}) {
  // const [todos, setTodos] = useState([])

  // useEffect(() => {
  //   const fetchTodos = async() => {
  //     const res = await fetch(`https://jsonplaceholder.typicode.com/todos`);
  //     const data = await res.json();
  //     setTodos(data);
  //   }
  //     fetchTodos();
  // }, [])


  return (
    <div>
      { posts?.length === 0
        ? ( <div>loading...</div> )
        : ( posts?.map(post => (
          <div key={post.id}>
            <Link href={`/post?id=${post.id}`} as={`/post/1`}><a>{post.id}{post.title}</a></Link>
          </div>
        )) )
      }
    </div>
  )
}
