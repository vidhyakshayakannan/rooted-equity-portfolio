import Hero from '../components/Hero';
import Intro from '../components/Intro';
import ImageSlider from '../components/ImageSlider';
import Testimonials from '../components/Testimonials';

const HomePage = () => {
    return (
        <div className="page-content">
            <Hero />
            <Intro />
            <ImageSlider />
            <Testimonials />
        </div>
    );
};

export default HomePage;
