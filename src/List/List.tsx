/** @jsx jsx */
import { jsx } from '@emotion/core';
import { Children, cloneElement, forwardRef, isValidElement } from 'react';
import { Box } from '../Box';
import { Icon } from '../Icon';
import { PseudoBox } from '../PseudoBox';
import { ListIconProps, ListItemProps, ListProps } from './types';

export const List = forwardRef(({ styleType = 'none', stylePos = 'inside', children, ...props }: ListProps, ref) => (
    <Box ref={ref} as="ul" listStyleType={styleType} listStylePosition={stylePos} {...props}>
        {Children.map(children, (child, index) => {
            if (!isValidElement(child)) {
                return null;
            }

            const isLast = index + 1 === Children.count(children);
            if (isLast) {
                return child;
            }

            return cloneElement(child);
        })}
    </Box>
));

export const ListItem = forwardRef((props: ListItemProps, ref) => (
    <PseudoBox ref={ref} as="li" mb="input.spacing.sm" {...props} />
));

export const ListIcon = ({ icon, ...props }: ListIconProps) => {
    if (typeof icon === 'string') {
        return <Icon name={icon} mr="input.spacing.lg" {...props} />;
    }

    return (
        <Box as={icon} d="inline" focusable="false" size="1em" color="currentColor" mr="input.spacing.lg" {...props} />
    );
};