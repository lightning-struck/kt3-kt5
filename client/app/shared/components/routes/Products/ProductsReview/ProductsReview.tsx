'use client';

import { Star } from 'lucide-react';
import { useState } from 'react';
import Button from '../../../UIKIT/Button/Button';
import { Textarea } from '@/components/ui/textarea';
import axios from 'axios';

import { useLocalStorage } from '@/app/shared/hooks/useLocalStorage';

export default function ProductsReview() {
  const [review, setReview] = useState<string>('');
  const [mark, setMark] = useState<number>(0);
  const [markHovered, setMarkHovered] = useState<number>(0);

  const [token, useToken] = useLocalStorage('token', '');
  const [errorMessage, setErrorMessage] = useState<string>('');

  const sendReview = async () => {
    const loginInfo = await axios.post('/user/signup', { review, mark });

    if (!loginInfo) {
      setErrorMessage('отзыв не отправлен залогиньтесь');
      return;
    } else {
      const res = await axios.post('/reviews', { review, mark });
      setReview('');
      setMark(0);
      setErrorMessage('');
    }
  };


  return (
    <div className="flex flex-col gap-[15px]">
      <div className="flex gap-2 items-center" onMouseLeave={() => setMarkHovered(0)}>
        {Array.from(Array(5).keys()).map(i => (
          <div onMouseEnter={() => setMarkHovered(i)} onClick={() => setMark(i)}>
            <Star fill={i <= markHovered || i <= mark ? 'gold' : 'white'} strokeWidth={1} stroke="#fb923c" />
          </div>
        ))}
      </div>
      <div>
        <Textarea
          value={review}
          onChange={e => setReview(e.currentTarget.value)}
          maxLength={250}
          rows={10}
          style={{ resize: 'none' }}
        />
        {review.length} / 250
      </div>
      <div>
      {errorMessage && <div>{errorMessage}</div>} 
        <Button size="m" style="black_outline" onClick={async () => await sendReview()}>
          Отправить
        </Button>
      </div>
    </div>
  );
}
