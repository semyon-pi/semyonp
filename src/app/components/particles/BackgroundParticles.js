'use client'
import React from 'react';
import { Particles } from 'react-tsparticles';

const BackgroundParticles = () => {
    const particlesOptions = {
        // Customize the particle effect here
    };

    return (
        <Particles
            id="particles-js"
            options={particlesOptions}
        />
    );
};

export default BackgroundParticles;
