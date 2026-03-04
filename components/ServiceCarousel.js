"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

export default function ServiceCarousel({ images, title }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (!images || images.length === 0) return;

        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4000);

        return () => clearInterval(interval);
    }, [images]);

    if (!images || images.length === 0) return null;

    return (
        <div className="sc-carousel-container">
            <div
                className="sc-carousel-track"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
                {images.map((image, i) => (
                    <div key={i} className="sc-carousel-slide">
                        <img
                            src={`/images/${image}`}
                            alt={`${title} Image ${i + 1}`}
                        />
                    </div>
                ))}
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
    );
}
