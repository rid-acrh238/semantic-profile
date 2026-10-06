import type { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return (
        <img
            src="/img/logo.png"
            alt="STIKOM El Rahma"
            {...props}
            style={{
                width: '80px',
                height: '80px',
                objectFit: 'contain',
            }}
        />
    );
}