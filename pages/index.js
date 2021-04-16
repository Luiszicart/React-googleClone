import Head from 'next/head'
import Avatar from '../components/Avatar'
import { ViewGridIcon } from '@heroicons/react/solid'
import Image from 'next/image'
import { SearchIcon } from '@heroicons/react/outline'
import { MicrophoneIcon } from '@heroicons/react/outline'

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

          <ViewGridIcon className="h-10 w-10 p-2 rounded-full hover:bg-gray-100 cursor-pointer" />
          <Avatar
            url="https://assetstools.cosentino.com/api/v1/bynder/color/SL6/detalle/SL6-detail.jpg?w=1024&h=1024&auto=compress%2Cformat"
          />
        </div>
      </header>

      <form className="flex flex-col items-center mt-44 flex-grow">
        <Image
          src='https://www.google.co.uk/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png'
          height={100}
          width={300}
         />

         <div className="flex w-full mt-5 hover:shadow-lg
         focus-within:shadow-lg max-w-md rounded-full border
         border-grey-200 px-5 py-3 items-center sm:max-w-xl
         lg:max-w-2xl">
           <SearchIcon className="h-5 mr-3 text-gray-500" />
           <input type="text" className="focus:outline-none flex-grow"/>
           <MicrophoneIcon className="h-5 "/>
         </div>

         <div className="flex flex-col w-1/2 space-y-2 justify-center mt-8 sm:space-y-0
         sm:flex-row sm:space-y-0">
           <button className="btn">Google Search</button>
           <button className="btn">I'm Feeling Lucky</button>
         </div>
      </form>
    </div>
  )
}
