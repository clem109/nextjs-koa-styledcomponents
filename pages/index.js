import Link from "next/link"
import fetch from 'isomorphic-fetch'
import styled from 'styled-components'

export default class extends React.Component {

  // example of getting data
  static async getInitialProps({req, res, query}) {
    const response = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await response.json()
    
    return {
      shows: data
    }
  }

  // Register service worker
  componentDidMount() {
    if ('serviceWorker' in navigator) {
      navigator
        .serviceWorker
        .register('/service-worker.js')
        .then(registration => {
          console.log('service worker registration successful')
        })
        .catch(err => {
          console.warn('service worker registration failed', err.message)
        })
    }

  }

  render() {
    const {shows } = this.props

    if (typeof shows === 'undefined' || !shows ) {
      return (
          <h2>Error fetching posts</h2>
      )
    }

    return (
      <div>
      <p>Hello Next.js</p>
      {shows.map(({show}) => (
        <li key={show.id}>
          <Link href={`/post?id=${show.id}`} prefetch>
            <a>{show.name}</a>
          </Link>
        </li>
      ))}
  
    </div>
    )
  }

}
