import React from 'react';
import Calendar from '@sbmdkl/nepali-datepicker-reactjs';
import '@sbmdkl/nepali-datepicker-reactjs/dist/index.css';

const Calendars = ({ name, value, onChange }) => {
  const handleChange = ({ bsDate }) => {
    onChange(name, bsDate);
  };

  return (
    <div className='border-[#D0D7E2] border-2 flex rounded-lg px-3 py-2 '>
      <Calendar onChange={handleChange} className="w-60 h-auto tabletmd:w-80 border-0 focus:outline-0" value={value} />
    </div>
  );
};

export default Calendars;