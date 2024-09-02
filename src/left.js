import { IoReorderThreeOutline } from "react-icons/io5";
import { IoMdHome } from "react-icons/io";
import { IoMdTrendingUp } from "react-icons/io";
import { SiYoutubeshorts } from "react-icons/si";
import { FaHistory } from "react-icons/fa";
import { MdSubscriptions } from "react-icons/md";
import { MdPlaylistAdd } from "react-icons/md";
import { IoMdSettings } from "react-icons/io";
import { CiLogout } from "react-icons/ci";
import './left.css';


function Left(){
    return(
        <div class="all">
            <div>
            <IoReorderThreeOutline class="three" />
            <IoMdHome class="home"/>
            <IoMdTrendingUp class="trending"/>
            <SiYoutubeshorts class="shorts" />
            <MdSubscriptions class="subs"/>
            <MdPlaylistAdd class="play"/>
            <FaHistory class="history"/>
            </div>
            <div class="bot">
            <IoMdSettings class="set" />
            <CiLogout class="log"/>
            </div>
        </div>
    )
}

export default Left;