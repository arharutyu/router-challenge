import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

const Article = () => {
  const { id } = useParams()
  const [article, setArticle] = useState([])
  const [user, setUser] = useState([])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(res => res.json())
    .then(data => setArticle(data))
  }, [])

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/users/${article.userId - 1}`)
      .then(res => res.json())
      .then(data => setUser(data))
  }, [])

  return (
    <>
      <h3>{article.title}</h3>
      <h4>By {user.name}</h4>
      <p>{article.body}</p>
    </>
  )
}

export default Article