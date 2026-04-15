"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ServiceCarousel({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);

    useEffect(() => {
        if (!images || images.length === 0 || isHovered) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images, currentIndex, isHovered]);

    if (!images || images.length === 0) return null;

    const currentImage = images[currentIndex];
    const currentTitle = typeof currentImage === "string" ? null : currentImage.title;

    return (
        <div className="sc-carousel-wrapper">
            <div className="sc-carousel-dynamic-title-container">
                {currentTitle && (
                    <h3 key={currentTitle} className="sc-carousel-dynamic-title">
                        {currentTitle}
                    </h3>
                )}
            </div>

            <div 
                className="sc-carousel-container"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
            >
                <div
                    className="sc-carousel-track"
                    style={{ transform: `translateX(-${currentIndex * 100}%)` }}
                >
                    {images.map((image, i) => {
                        const imgSrc = typeof image === "string" ? image : image.src;
                        
                        return (
                            <div key={i} className="sc-carousel-slide">
                                <div 
                                    className="sc-carousel-blur-bg"
                                    style={{ backgroundImage: `url('/images/${imgSrc}')` }}
                                ></div>
                                <div className="sc-carousel-img-wrapper">
                                    <img
                                        src={`/images/${imgSrc}`}
                                        alt={typeof image === "string" ? `${title} Image ${i + 1}` : image.title || `${title} Image ${i + 1}`}
                                    />
                                </div>
                            </div>
                        );
                    })}
                </div>

                <button
                className="sc-carousel-btn prev"
                aria-label="Previous slide"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M15 18l-6-6 6-6" />
                </svg>
            </button>

            <button
                className="sc-carousel-btn next"
                aria-label="Next slide"
                onClick={() => setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)}
            >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M9 18l6-6-6-6" />
                </svg>
            </button>

            <div className="sc-carousel-dots">
                {images.map((_, i) => (
                    <span
                        key={i}
                        className={`sc-dot ${i === currentIndex ? "active" : ""}`}
                        onClick={() => setCurrentIndex(i)}
                    ></span>
                ))}
            </div>
        </div>
        </div>
    );
}
