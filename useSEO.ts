/**
 * useSEO - Custom hook for per-page SEO management.
 * Dynamically sets document title and meta description for each page.
 */
import { useEffect } from 'react';

interface SEOProps {
    title: string;
    description: string;
}

const SITE_NAME = 'Joy Fitness';

export const useSEO = ({ title, description }: SEOProps) => {
    useEffect(() => {
        // Set document title
        document.title = `${title} | ${SITE_NAME}`;

        // Set or create meta description
        let metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', description);
        } else {
            metaDescription = document.createElement('meta');
            metaDescription.setAttribute('name', 'description');
            metaDescription.setAttribute('content', description);
            document.head.appendChild(metaDescription);
        }

        // Update OG tags dynamically
        const ogTitle = document.querySelector('meta[property="og:title"]');
        if (ogTitle) ogTitle.setAttribute('content', title);

        const ogDesc = document.querySelector('meta[property="og:description"]');
        if (ogDesc) ogDesc.setAttribute('content', description);

        // Update Twitter tags dynamically
        const twTitle = document.querySelector('meta[name="twitter:title"]');
        if (twTitle) twTitle.setAttribute('content', title);

        const twDesc = document.querySelector('meta[name="twitter:description"]');
        if (twDesc) twDesc.setAttribute('content', description);

        // Cleanup: restore default title on unmount
        return () => {
            document.title = `${SITE_NAME} | Buy Authentic Supplements Online`;
        };
    }, [title, description]);
};

export default useSEO;
