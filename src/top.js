import { FaYoutube } from "react-icons/fa";
import './top.css';
import { FaSearch } from "react-icons/fa";

function Top(){
    return(
        <div class="whole">
            <div class="top">     
                <FaYoutube class="yt"/>
                <div class="search">
                    <input placeholder="search"></input>
                    <FaSearch class="sl"/>
                </div>
            </div>
        </div>
    )
}

export default Top;