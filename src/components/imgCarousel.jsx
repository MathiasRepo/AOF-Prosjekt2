import {React} from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ImgCarousel = () => {
    return (
        <Carousel>
            <div>
                <img src={`${import.meta.env.BASE_URL}img/apning.jpg`} alt="Åpning av HUB Phønix" />
                <p className="legend">Åpning av HUB Phønix</p>
            </div>
            <div>
            <img src={`${import.meta.env.BASE_URL}img/apning.jpg`} alt="Åpning av HUB Phønix" />
            <p className="legend">Bilde 2 av HUB Phønix</p>
            </div>
        </Carousel>
    )
}
export default ImgCarousel;