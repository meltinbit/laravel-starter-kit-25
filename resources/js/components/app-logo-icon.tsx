import { ImgHTMLAttributes } from 'react';

export default function AppLogoIcon(
    props: ImgHTMLAttributes<HTMLImageElement>,
) {
    return <img src="/meltinbit-logo.webp" alt="Meltinbit" {...props} />;
}
