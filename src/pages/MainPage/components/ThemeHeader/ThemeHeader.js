import {Carousel} from 'react-bootstrap';
import fundus from '../../../../assets/fundus.png';
import AI from '../../../../assets/AI.jpg';
import Database from '../../../../assets/Database.png';

import './ThemeHeader.css';
import Translate from 'react-translate-component';
const ThemeHeader = () => {
    return (
        <Carousel className = "carousel">
            <Carousel.Item interval={1500}>
                <img
                    className="image1"
                    src={AI}
                    alt="First slide"
                />
                <Carousel.Caption>
                <h1 className = 'title1'><b><Translate content = 'ban1.title'></Translate></b></h1>
                <h2 className = 'description1'><Translate content = 'ban1.sub'></Translate></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                    className="image2"
                    src={fundus}
                    alt="Second slide"
                />
                <Carousel.Caption>
                <h1 className = 'title2'><b><Translate content = 'ban2.title'></Translate></b></h1>
                <h2 className = 'description2'><Translate content = 'ban2.sub'></Translate></h2>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item interval={1500}>
                <img
                className="image3"
                src={Database}
                alt="Third slide"
                />
                <Carousel.Caption>
                <h1 className = 'title3'><b><Translate content = 'ban3.title'></Translate></b></h1>
                <h2 className = 'description3'><Translate content = 'ban3.sub'></Translate></h2>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    )
}

export default ThemeHeader