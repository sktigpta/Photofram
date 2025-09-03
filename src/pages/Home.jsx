import Hero from '../components/Hero';
import HeroCollection from '../components/Hero-collection';
import DancingOverlay from '../components/DancingOverlay';
import ReviewCarousel from '../components/ReviewCarousel';
import Footer from '../components/Footer';

function Home() {

    return (
        <>
            <Hero />
            <HeroCollection />
            <DancingOverlay />
            <ReviewCarousel />
            <Footer />
        </>
    )
}

export default Home;
