import HeaderOpotion from "../HeaderOption"
import {
  DotsVerticalIcon,
  MapIcon,
  NewspaperIcon,
  PhotographIcon,
  PlayIcon,
  SearchIcon,
} from '@heroicons/react/outline'


function HeaderOptions() {
  return (
    <div className='flex w-full text-gray-700
     text-sm lg:text-base justify-start
    lg:space-x-36 pl-52 border-b-[1px]'>
      <div className='flex space-x-6'>
        <HeaderOpotion Icon={SearchIcon}
        title='All' />
        <HeaderOpotion Icon={PhotographIcon}
        title='Images' />
        <HeaderOpotion Icon={PlayIcon}
        title='Videos' />
        <HeaderOpotion Icon={NewspaperIcon}
        title='News' />
        <HeaderOpotion Icon={MapIcon}
        title='Maps' />
        <HeaderOpotion Icon={DotsVerticalIcon}
        title='More' />
      </div>

      <div className='flex space-x-4'>
        <p className='link'>Settings</p>
        <p className='link'>Tools</p>
      </div>
      
    </div>
  )
}
export default HeaderOptions
