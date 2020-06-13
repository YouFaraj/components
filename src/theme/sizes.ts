export const baseSizes = {
    px: '1px',
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
    '20': '5rem',
    '24': '6rem',
    '32': '8rem',
    '40': '10rem',
    '48': '12rem',
    '56': '14rem',
    '64': '16rem',
};

const largeSizes = {
    full: '100%',
    '3xs': '14rem',
    '2xs': '16rem',
    xs: '20rem',
    sm: '24rem',
    md: '28rem',
    lg: '32rem',
    xl: '36rem',
    '2xl': '42rem',
    '3xl': '48rem',
    '4xl': '56rem',
    '5xl': '64rem',
    '6xl': '72rem',
};

const containers = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
};

const spacing = {
    'spacing-xs': baseSizes[1],
    'spacing-sm': baseSizes[2],
    spacing: baseSizes[4],
    'spacing-lg': baseSizes[6],
};

const input = {
    // Heights
    lg: '2.75rem',
    md: '2.25rem',
    sm: '1.75rem',

    // Widths
    width: baseSizes[40],
};

const canvas = {
    width: '300px',
    spacing: baseSizes[5],
};

const header = baseSizes[16];

const sizes = {
    ...baseSizes,
    ...largeSizes,
    spacing,
    containers,
    input,
    canvas,
    header,
};

export default sizes;
