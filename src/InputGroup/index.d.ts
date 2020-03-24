import * as React from 'react';
import { BoxProps } from '../Box/types';
import { IInput } from '../Input';

export interface IInputGroup {
    size?: IInput['size'];
    children: React.ReactNode;
}

export type InputGroupProps = IInputGroup & BoxProps;
declare const InputGroup: React.FC<InputGroupProps>;

export default InputGroup;
