"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function ScrollReveal() {
    const pathname = usePathname();

    useEffect(() => {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        }, observerOptions);

        const observeElements = () => {
            const elements = document.querySelectorAll(".reveal:not(.visible)");
            elements.forEach((el) => observer.observe(el));
        };

        // Initial observation
        observeElements();

        // Also watch for DOM changes (helpful for dynamic React components)
        const mutationObserver = new MutationObserver(() => {
            observeElements();
        });

        mutationObserver.observe(document.body, { childList: true, subtree: true });

        // Backup timeouts to catch any missed renders
        const t1 = setTimeout(observeElements, 100);
        const t2 = setTimeout(observeElements, 500);

        return () => {
            observer.disconnect();
            mutationObserver.disconnect();
            clearTimeout(t1);
            clearTimeout(t2);
        };
    }, [pathname]);

    return null;
}
