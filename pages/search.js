import Head from 'next/head'
import { useRouter } from 'next/router'
import Header from '../components/Header'
import SearchResults from '../components/SearchResults'
import { API_KEY, CONTEXT_KEY } from '../keys'
import Response from '../response'


function Search({ results }) {
  const router = useRouter()

  return (
    <div>
      <Head>
        <title>{router.query.term} - Google Search</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Header />
      <SearchResults results={results} />
    </div>
  )
}

export default Search

export async function getServerSideProps(context) {
  const useDummyData = true // Change here to consume Google's API or use DD
  const startIndex = context.query.start || '0'

  const data = useDummyData ? Response : await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}`
  ).then(response => response.json())

  return {
    props: {
      results: data,
    }
  }
}
