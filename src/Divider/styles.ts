import { useTheme } from '../ThemeProvider';

export const dividerStyle = (props, theme) => ({
    style: {
        borderColor: 'border',
    },
    orientation: {
        horizontal: {
            borderBottom: '1px',
            width: 'auto',
            my: 3,
        },
        vertical: {
            borderLeft: '1px',
            height: 'auto',
            mx: 3,
        },
    },
});

const useDividerStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].divider ? theme['styles'].divider(props, theme) : dividerStyle(props, theme);

    return {
        // orientation set before root style to avoid borderColor override
        ...styles.orientation[props.orientation],

        ...styles.style,
    };
};

export default useDividerStyle;