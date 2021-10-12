import React from 'react'
import { FaInfoCircle } from 'react-icons/fa'
import { ordinal_suffix_of } from './ordinal-suffix-of'
import data from './kanji-jouyou.json'
const Kanji = ({ currentVal, totalQs, kanji }) => {
  return (
    <div className='kanji'>
      <div className='kanji__info'>
        <FaInfoCircle />
      </div>
      <div className='kanji__count'>
        <h3>
          <span className='kanji__current'>{currentVal + 1}</span>
          {' / '}
          <span className='kanji__total'>{totalQs}</span>
        </h3>
      </div>
      <div className='kanji__grade'>
        <h3>{`${ordinal_suffix_of(data[kanji].grade)} grade`}</h3>
      </div>
      <div className='kanji__jlpt'>
        <h3>{data[kanji].jlpt_new && `JLPT N${data[kanji].jlpt_new}`}</h3>
      </div>
      <h2 className='kanji__character'>{kanji}</h2>
    </div>
  )
}

export default Kanji
