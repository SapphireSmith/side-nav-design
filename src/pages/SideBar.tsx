import { member_2, member_3, member_4, profile } from '../assets/images/index'
import { HomeIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon, VideoCameraIcon } from "@heroicons/react/24/outline";


const SideBar = () => {
    return (
        <div className="w-full h-screen flex items-center p-10 justify-center bg-[#ccc]">
            <div className="w-full h-full">
                <div className="w-[7%] flex flex-col justify-between items-center py-8 bg-white h-full rounded-2xl shadow-xl">
                    <div className=" flex justify-center items-center px-3 py-3 rounded-lg bg-blue-600">
                        <span className="font-extrabold text-white cursor-pointer text-base ">Zen</span>
                    </div>

                    <div className="menu flex flex-col gap-2">
                        <div className='flex justify-center items-center hover:text-white duration-300 delay-75 hover:bg-[#1d1d1d] rounded-xl text-[#434343] p-2.5'>
                            <HomeIcon className='size-6 ' />
                        </div>
                        <div className='flex justify-center items-center hover:text-white duration-300 delay-75 hover:bg-[#1d1d1d] rounded-xl text-[#434343] p-2.5'>
                            <MagnifyingGlassIcon className='size-6 ' />
                        </div>
                        <div className='flex justify-center items-center hover:text-white duration-300 delay-75 hover:bg-[#1d1d1d] rounded-xl text-[#434343] p-2.5'>
                            <ChatBubbleLeftIcon className='size-6 ' />
                        </div>
                        <div className='flex justify-center items-center hover:text-white duration-300 delay-75 hover:bg-[#1d1d1d] rounded-xl text-[#434343] p-2.5'>
                            <VideoCameraIcon className='size-6 ' />
                        </div>
                    </div>

                    <div className="profiles flex flex-col gap-2">
                        <img src={member_2} alt="profile" className='rounded-full h-12 cursor-pointer' title='person_1' />
                        <img src={member_4} alt="profile" className='rounded-full h-12 cursor-pointer' title='person_2' />
                        <img src={member_3} alt="profile" className='rounded-full h-12 cursor-pointer' title='person_3' />
                    </div>

                    <div className=" -mb-2 px-1 pt-2 border-t-2">
                        <img src={profile} alt="profile" className='rounded-full h-12 cursor-pointer' title='you' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SideBar
