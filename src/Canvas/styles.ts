import { componentStyleDef } from '../theme/types';
import { useTheme } from '../ThemeProvider';

function canvasPanelStyle({ type, isInline, isOverlay }, theme) {}

export const canvasStyle: componentStyleDef = ({ isMobile }, { sizes }) => {
    const getPanelStyle = ({ width = sizes.canvas.width, position, isOverlay, bg = 'canvasBg', name, zIndex }) => ({
        variants: {
            visible: {
                width: isMobile ? '100vw' : width,
                display: 'block',
                zIndex: 2,
            },
            minified: {
                width: 'fit-content',
                display: 'block',
                zIndex: 2,
            },
            hidden: {
                width: 0,
                zIndex: 0,
                transitionEnd: {
                    display: 'none',
                },
            },
        },
        position: isOverlay && 'absolute',
        left: position === 'left' && 0,
        right: position === 'right' && 0,
        flexGrow: name === 'main' && '1',
        bg,
        maxWidth: name !== 'main' && width,
    });

    return {
        style: {
            minHeight: '100vh',
            flexDirection: 'row',
        },
        panel: {
            height: '100vh',
            overflowX: 'hidden',
            direction: 'column',
            transition: { type: 'spring', damping: 50, stiffness: 200 },
            // transition: { type: 'spring', damping: 50, stiffness: 1 },
        },
        getPanelStyle,
    };
};

const useCanvasStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].canvas ? theme['styles'].canvas(props, theme) : canvasStyle(props, theme);

    return styles;
};

export default useCanvasStyle;