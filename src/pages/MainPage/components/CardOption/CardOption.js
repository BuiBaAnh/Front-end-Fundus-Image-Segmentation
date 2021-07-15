import {Card} from 'react-bootstrap';
import Translate from 'react-translate-component';
import './CardOption.css';
const variant = 'info'


const CardOption = (props) => {

    return (
      <div className = 'container'>
        {/* <img src = ></img>   */}
          <a className="card1" href="/AI">
            <h3><Translate content = 'ban1.title'></Translate></h3>
            <p className="small"><Translate content = 'ban1.sub'></Translate></p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>
        {/* <img src = ></img>   */}
          <a className="card1" href="/experiment">
            <h3><Translate content = 'ban2.title'></Translate></h3>
            <p className="small"><Translate content = 'ban2.sub'></Translate></p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>

        {/* <img src = ></img>   */}
          <a className="card1" href="/contribute">
            <h3><Translate content = 'ban3.title'></Translate></h3>
            <p className="small"><Translate content = 'ban3.sub'></Translate></p>
            <div className="go-corner" href="#">
              <div className="go-arrow">
                →
              </div>
            </div>
          </a>
        </div>
    );
}
export default CardOption