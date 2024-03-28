import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import './App.css';
import 'react-datepicker/dist/react-datepicker.css';
function App() {
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <div className="App">
      <h1>Date Picker</h1>
      <DatePicker
        selected={selectedDate}
        onChange={date => setSelectedDate(date)}
        // dateFormat={'yyyy/MM/dd'}
        dateFormat={'dd/MM/yyyy'}
        // minDate={new Date()}
        // maxDate={new Date()}
        placeholderText='Pick DOB'
        filterDate={date=>date.getDay() !== 6 && date.getDay() !== 0}
        isClearable
        showMonthDropdown
        showYearDropdown
        scrollableYearDropdown
      />
    </div>
  );
}

export default App;
