import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'

const Articles = () => {
  const [articles, setArticles] = useState([])
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(res => res.json())
      .then(data => setArticles(data))
  }, [])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => setUsers(data))
  }, [])

  function getUser(article) {
    const a = users[article - 1]
    return a.name
  }

  return (
    <>
    <h3>Articles</h3>
    <ul>
      {articles.map(article => (
      <li key={article.id}>
        <ul>
          <li>Title: <Link to={`/articles/${article.id}`}>{article.title}</Link></li>
          <li>Author: {getUser(article.userId)}</li>
        </ul>
      </li>
      ))}
    </ul>
    </>
  )
}

export default Articles