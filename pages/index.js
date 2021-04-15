import Head from 'next/head'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Google</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Headfer */}
      <header className="flex w-full p-5 justify-between text-sm text-gray-700">
        {/* Right */}
        <div className="flex space-x-4 items-center">
          <p className="link">About</p>
          <p className="link">Store</p>
        </div>
        {/* Left */}
        <div className="flex space-x-4 items-center">
          <p className="link">Gmail</p>
          <p className="link">Images</p>
        </div>
      </header>
      {/* Body */}
      {/* Footer */}

    </div>
  )
}
