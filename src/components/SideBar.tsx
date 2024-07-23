import { member_2, member_3, member_4, profile } from '../assets/images/index';
import { HomeIcon, MagnifyingGlassIcon, ChatBubbleLeftIcon, VideoCameraIcon } from "@heroicons/react/24/outline";

const ICON_CLASSES = 'flex justify-center items-center hover:text-white duration-300 delay-75 hover:bg-[#1d1d1d] rounded-xl text-[#434343] p-2.5';
const PROFILE_IMAGE_CLASSES = 'rounded-full h-12 cursor-pointer';
const SIDE_BAR_CLASSES = 'w-[7%] flex flex-col justify-between items-center py-8 bg-white h-full rounded-2xl shadow-xl';
const CONTAINER_CLASSES = 'w-full h-full';
const LOGO_CLASSES = 'flex justify-center items-center px-3 py-3 rounded-lg bg-blue-600';

const SideBar = () => {
    return (
        <div className={CONTAINER_CLASSES}>
            <div className={SIDE_BAR_CLASSES}>
                <div className={LOGO_CLASSES}>
                    <span className="font-extrabold text-white cursor-pointer text-base">Zen</span>
                </div>

                <div className="menu flex flex-col gap-2">
                    <div className={ICON_CLASSES}>
                        <HomeIcon className='size-6 ' />
                    </div>
                    <div className={ICON_CLASSES}>
                        <MagnifyingGlassIcon className='size-6 ' />
                    </div>
                    <div className={ICON_CLASSES}>
                        <ChatBubbleLeftIcon className='size-6 ' />
                    </div>
                    <div className={ICON_CLASSES}>
                        <VideoCameraIcon className='size-6 ' />
                    </div>
                </div>

                <div className="profiles flex flex-col gap-2">
                    <img src={member_2} alt="profile" className={PROFILE_IMAGE_CLASSES} title='person_1' />
                    <img src={member_4} alt="profile" className={PROFILE_IMAGE_CLASSES} title='person_2' />
                    <img src={member_3} alt="profile" className={PROFILE_IMAGE_CLASSES} title='person_3' />
                </div>

                <div className=" -mb-2 px-1 pt-2 border-t-2">
                    <img src={profile} alt="profile" className={PROFILE_IMAGE_CLASSES} title='you' />
                </div>
            </div>
        </div>
    );
};

export default SideBar;
