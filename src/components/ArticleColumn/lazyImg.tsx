import React, { useEffect, useRef, useState } from 'react';

interface imgs {
    src: string,
    placeholder: string,
    alt: string
}

// 懒加载图片组件
const LazyImage: React.FC<imgs> = ({ src, placeholder, alt }) => {
    const [isLoaded, setIsLoaded] = useState(false);
    const imgRef = useRef(null);

    useEffect(() => {
        const observerCallback = (entries: any, observer: any) => {
            entries.forEach((entry: any) => {
                if (entry.isIntersecting) {
                    setIsLoaded(true);
                    if (imgRef.current) {
                        observer.unobserve(imgRef.current);
                    }
                }
            });
        };

        const observerOptions = {
            rootMargin: '0px',
            threshold: 0.1,
        };

        const observer = new IntersectionObserver(observerCallback, observerOptions);

        if (imgRef.current) {
            observer.observe(imgRef.current);
        }

        return () => {
            if (imgRef.current) {
                observer.unobserve(imgRef.current);
            }
        };
    }, []);

    return <img ref={imgRef} src={isLoaded ? src : placeholder} alt={alt} className="img-skeleton" />;
};

export default LazyImage;
