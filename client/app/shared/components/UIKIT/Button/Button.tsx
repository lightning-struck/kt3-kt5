import { FC, ReactNode } from 'react';
import s from './Button.module.scss';
import classNames from 'classnames/bind';

interface ButtonProps {
  children: ReactNode;
  size: 's' | 'm' | 'l' | 'auto';
  onClick: () => void;
  style: 'black_outline' | 'black_solid' | 'white_outline' | 'white_solid';
}

const Button: FC<ButtonProps> = props => {
  const cx = classNames.bind(s);
  return <div 
          onClick={props.onClick}
          className={cx(s.button, props.size, props.style)}
        >
          {props.children}
        </div>;
};

export default Button;
