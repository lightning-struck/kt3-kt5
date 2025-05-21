import React, { useState } from 'react';
import s from './Select.module.scss';
import cn from 'classnames';
export default function Select({ handler, value }: { handler: (id: number) => void; value: number }) {
  //   const [value, setValue] = useState<number>(0);

  const [open, setOpen] = useState<boolean>(false);

  const data = [
    {
      id: 0,
      title: 'By rating',
    },
    {
      id: 1,
      title: 'By price',
    },
    {
      id: 2,
      title: 'By date',
    },
  ];

  const selectHandler = (id: number) => {
    if (value !== id) {
      handler(id);
      setOpen(!open);
    }
  };

  return (
    <div className={s.Select}>
      {/* head */}
      <div onClick={() => setOpen(!open)} className={s.Select__head}>
        <div>{data[value].title}</div>
        <svg
          className={cn(s.Select__head__arrow, open && s.active)}
          width="12"
          height="8"
          viewBox="0 0 12 8"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 0.295L0 6.295L1.41 7.705L6 3.125L10.59 7.705L12 6.295L6 0.295Z" fill="black"></path>
        </svg>
      </div>
      {/* content */}
      {open && (
        <div className={s.Select__content}>
          {data.map((i, idx) => (
            <div
              onClick={() => selectHandler(i.id)}
              key={idx}
              className={cn(s.Select__content__item, i.id === value && s.active)}
            >
              {i.title}
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
