import md from './madan.jpg';
import a2d from './a2d.jpg';
import jk from './jk.jpg';
import emc from './emc.jpg';
import emc2 from './emc2.jpeg';
import fcc from './fcc.png';
import bs from './bs.jpg';
import par from './par.jpg';
import vjs from './vjs.jpg';
import './content.css';

function Cont(){
    return(
        <div>
            <div class="row1">
                <div class="r1">
                    <img src={md} class="md"></img>
                    <p>Karnan hero? Villain?</p>
                    <p>Madan Gowri</p>
                    <p>1 week ago</p>
                </div>
                <div class="r2">
                    <img src={emc} class="md"></img>
                    <p>Learn variables and datatypes in java</p>
                    <p>EMC</p>
                    <p>2 week ago</p>
                </div>
                <div class="r3">
                    <img src={par} class="md"></img>
                    <p>Best of Paavangal</p>
                    <p>Parithabangal</p>
                    <p>1 month ago</p>
                </div>
            </div>
            <div class="row2">
                <div class="ro1">
                    <img src={a2d} class="md"></img>
                </div>
                <div class="ro2">
                    <img src={vjs} class="md"></img>
                </div>
                <div class="ro3">
                    <img src={fcc} class="md"></img>
                </div>
            </div>
            <div class="row 3">
                <div class="c1">
                    <img src={jk} class="md"></img>
                </div>
                <div class="c2">
                    <img src={emc2} class="md"></img>
                </div>
                <div class="c3">
                    <img src={bs} class="md"></img>
                </div>
            </div>
        </div>
    )
}
export default Cont;