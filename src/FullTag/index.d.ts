import * as React from 'react';
import { IBadge } from '../Badge';

export interface IFullTag {
    /**
     * circular features
     */
    rounded?: boolean;
    /**
     * The color scheme of the tag.
     */
    variantColor?: IBadge['variantColor'];

    label?: string;
    subLabel?: string;
}

export type FullTagProps = IFullTag;

declare const FullTag: React.FC<FullTagProps>;
export default FullTag;
