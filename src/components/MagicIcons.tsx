import React from 'react';
export const MagicWandIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M15 4V2" />
    <path d="M15 16v-2" />
    <path d="M8 9h2" />
    <path d="M20 9h2" />
    <path d="M17.8 11.8 19 13" />
    <path d="M15 9h.01" />
    <path d="M17.8 6.2 19 5" />
    <path d="m3 21 9-9" />
    <path d="M12.2 6.2 11 5" />
  </svg>
);
export const SalesPageIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M4 2v20h16V2H4z" />
    <path d="M12 18h.01" />
    <path d="M14 10h-4" />
    <path d="M14 14h-4" />
    <path d="M14 6h-4" />
  </svg>
);
export const CheckoutIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
    <path d="m15 9-1 1" />
    <path d="m12 12 1 1" />
    <path d="m9 15-1 1" />
  </svg>
);
export const IntegrationIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    {...props}
  >
    <path d="M12 20v-4" />
    <path d="M12 14V4" />
    <path d="M12 4H8" />
    <path d="M12 4h4" />
    <path d="m15 11-3-3-3 3" />
    <path d="M9 17h6" />
  </svg>
);
export const HeroIllustration = (props: React.SVGProps<SVGSVGElement>) => (
    <svg viewBox="0 0 512 350" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
        <g clipPath="url(#clip0_101_2)">
            <rect width="512" height="350" rx="24" fill="url(#paint0_linear_101_2)"/>
            <path d="M-58 132.5C-58 104.915 -35.5853 82.5 -8 82.5H520C547.585 82.5 570 104.915 570 132.5V402.5C570 430.085 547.585 452.5 520 452.5H-8C-35.5853 452.5 -58 430.085 -58 402.5V132.5Z" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
            <circle cx="430" cy="82" r="100" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
            <circle cx="82" cy="268" r="100" stroke="white" strokeOpacity="0.1" strokeWidth="2"/>
            <g style={{mixBlendMode: 'overlay'}}>
                <path d="M256 350L180.049 218.75L256 87.5L331.951 218.75L256 350Z" fill="#FF6B6B" fillOpacity="0.5"/>
            </g>
            <g style={{mixBlendMode: 'overlay'}}>
                <path d="M256 0L331.951 131.25L256 262.5L180.049 131.25L256 0Z" fill="#5D3BEE" fillOpacity="0.5"/>
            </g>
        </g>
        <defs>
            <linearGradient id="paint0_linear_101_2" x1="256" y1="0" x2="256" y2="350" gradientUnits="userSpaceOnUse">
                <stop stopColor="#6A44FF"/>
                <stop offset="1" stopColor="#5D3BEE"/>
            </linearGradient>
            <clipPath id="clip0_101_2">
                <rect width="512" height="350" rx="24" fill="white"/>
            </clipPath>
        </defs>
    </svg>
);