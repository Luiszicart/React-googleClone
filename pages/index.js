import Head from 'next/head'
import Avatar from '../components/Avatar'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">

        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>

        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>

          <Avatar url="https://assetstools.cosentino.com/api/v1/bynder/color/SL6/detalle/SL6-detail.jpg?w=1024&h=1024&auto=compress%2Cformat"/>
        </div>
      </header>

    </div>
  )
}
