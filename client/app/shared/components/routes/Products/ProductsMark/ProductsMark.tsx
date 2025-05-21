import { Star } from 'lucide-react';
import React from 'react';

export default function ProductsMark() {

  const mark = {
    mark: 5,
    reviews: 125,
  };

  return (
    <div className="flex flex-col items-center justify-center gap-2 w-fit p-4 rounded-md bg-gray-200">
      <div className="font-bold text-[24px]">{mark.mark}.0</div>
      <div>{mark.reviews} reviews</div>
      <div className="flex item-center gap-2">
        {/* Заполненные */}
        {Array(mark.mark)
          .fill('')
          .map((_, idx) => (
            <Star key={idx} className="text-orange-400 fill-orange-400" />
          ))}
        {/* Незаполненные */}
        {Array(5 - mark.mark)
          .fill('')
          .map((_, idx) => (
            <Star key={idx} className="text-gray-500 fill-gray-500" />
          ))}
      </div>
    </div>
  );
}
