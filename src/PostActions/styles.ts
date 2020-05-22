import { useTheme } from '../ThemeProvider';

// Provides standard style to the action buttons themselves
export const postActionsStyle = ({ color = 'blue' }, theme) => ({
    style: {
        mr: 'spacing-sm',
        size: 'sm',
        textTransform: 'uppercase',
        variant: 'outline',
        color: `${color}.500`,
    },
});

export const usePostActionsStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].postActions
        ? theme['styles'].postActions(props, theme)
        : postActionsStyle(props, theme);

    return {
        // base style
        ...styles.style,
    };
};

export default usePostActionsStyle;