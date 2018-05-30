import fetch from 'isomorphic-fetch'
import Link from 'next/link'

export default class extends React.Component {
	static async getInitialProps({query}) {
    let show

    try {
      const res = await fetch(`https://api.tvmaze.com/shows/${query.id}`)
      show = await res.json()
    }
    catch(e) {
      show = undefined
    }
    return {
      show 
    }
	}

	render() {
    const {show} = this.props
    console.log(show)

    if (typeof show === 'undefined' || !show) {
      return <Error statusCode={503}/>
    }

		return (
      <div>
      <Link href="/">Home</Link>
        <h1>{show.name}</h1>
        <div dangerouslySetInnerHTML={{__html: `${show.summary}`}}>
          
        </div>
      </div>
      
		)
  }
  
}
