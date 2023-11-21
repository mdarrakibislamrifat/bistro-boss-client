import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Banner = () => {
    return (
        <div>
            <Carousel autoPlay stopOnHover>
                <div>
                    <img  src='https://i.ibb.co/sbnSRkt/location-symbol-with-building-2-1.jpg' />
                    
                </div>
                <div>
                    <img src='https://i.ibb.co/fdnj0x4/Screenshot-2023-11-11-183910-1.png' />
                    
                </div>
                <div>
                    <img src='https://i.ibb.co/8zjBzVB/hatirjhil.webp' />
                    
                </div>
                <div>
                    <img src='https://i.ibb.co/cbDgGQf/palacio-cor-de-rosa.jpg' />
                    
                </div>
                <div>
                    <img src='https://i.ibb.co/m6YShBt/Dhanmondi-Lake-02.jpg' />
                    
                </div>
                <div>
                    <img src='https://i.ibb.co/XzFp8qq/1280px-Gulshan-Lake-scenery.jpg' />
                    
                </div>
            </Carousel>
        </div>
    );
};

export default Banner;