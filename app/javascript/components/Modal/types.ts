import { MouseEvent, MouseEventHandler } from 'react';
import { Styles } from '@Shared/types/common.types';

export interface IProps {
  title: string;
  message: string;
  show: boolean;
  handleClose(event?: MouseEvent<HTMLButtonElement> | MouseEventHandler<HTMLButtonElement>): void;
}

export const styles: Styles<IStyleKeys> = {
  AxisXEnd: {
    display: 'flex',
    justifyContent: 'end',
    alignItems: 'center',
  },
};

interface IStyleKeys {
  AxisXEnd;
}
