import React from 'react';
import s from './PaginationItem.module.scss';
import cn from 'classnames';
import { useSortStore } from '@/app/shared/core/providers/sortProvider';

export default function PaginationItem({ page, active }: { page: number; active: boolean }) {
  const { changePage } = useSortStore(state => state);
  return (
    <div className={cn(s.PaginationItem, active && s.active)} onClick={() => changePage(page)}>
      {page}
    </div>
  );
}
