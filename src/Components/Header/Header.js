// header component. This component will hold two more components which are navbar and hero section
import React from 'react';
import HeroSection from './HeroSection/HeroSection';
import Navigation from './Navigation/Navigation';
const Header = () => {
    return (
        <>
            <Navigation></Navigation>
            <HeroSection />
        </>
    );
};

export default Header;