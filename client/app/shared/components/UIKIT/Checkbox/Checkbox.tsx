import React from 'react';
import cn from 'classnames';
import s from './Checkbox.module.scss';
export default function Checkbox({ handler, active }: { handler: () => void; active: boolean }) {
  return (
    <div className={cn(s.Checkbox, active && s.active)} onClick={() => handler()}>
      {active && (
        <svg width="6" height="5" viewBox="0 0 6 5" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.999919 3.83333L1.56634 4.25815C1.99503 4.57967 2.60097 4.50612 2.9403 4.09139L5.33325 1.16666"
            stroke="white"
            strokeLinecap="round"
          />
        </svg>
      )}
    </div>
  );
}
