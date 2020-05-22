import { useTheme } from '../ThemeProvider';

export const modalStyle = ({ isCentered }, theme) => ({
    style: {
        bg: 'popoverBg',
        shadow: 'lg',
    },
    scrollBehavior: {
        inside: {
            height: '100%',
            top: 0,
        },
        outside: {
            my: 16,
            top: 0,
        },
    },
    props: {
        ...(!isCentered && { top: 16, mx: 'auto' }),
    },
});

export const modalWrapperStyle = ({ isCentered }, theme) => ({
    style: {},
    scrollBehavior: {
        inside: {
            maxHeight: 'calc(100vh - 8rem)',
            overflow: 'hidden',
            top: 16,
        },
        outside: {
            overflowY: 'auto',
            overflowX: 'hidden',
        },
    },
    props: {
        ...(isCentered && {
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
        }),
    },
});

const useModalStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].modal ? theme['styles'].modal(props, theme) : modalStyle(props, theme);

    if (props.noStyles) {
        return {
            ...styles.style,
        };
    }

    return {
        // base style
        ...styles.style,

        ...styles.scrollBehavior[props.scrollBehavior],
        ...styles.props,
    };
};

export const useModalWrapperStyle = props => {
    const theme = useTheme();
    const styles = theme['styles'].modalWrapper
        ? theme['styles'].modalWrapper(props, theme)
        : modalWrapperStyle(props, theme);

    if (props.noStyles) {
        return {};
    }

    return {
        // base style
        ...styles.style,

        ...styles.scrollBehavior[props.scrollBehavior],
        ...styles.props,
    };
};

export default useModalStyle;