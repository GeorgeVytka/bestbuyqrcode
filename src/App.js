import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import {google,outlook, office365, yahoo, ics } from'calendar-link';
import QRCode from 'react-qr-code';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker';
function App() {

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selectedDate, setSelectedDate] = useState('');
  const [qrCode, setQrCode] = useState("");
  const [qrCode2, setQrCode2] = useState("");
  const [qrCode3, setQrCode3] = useState("");
  const [qrCode4, setQrCode4] = useState("");

// Set event as an object
const events = {
  title: "Buy more stuff at besstbuy",
  description: "Be there!",
  start: "2019-12-29 18:00:00 +0100",
  duration: [3, "hour"],
};
  
  const handleSubmit = (e) => {
    e.preventDefault();
   

    const tempEvent ={
      title,description,"start":selectedDate
    }
  
    setQrCode(google(tempEvent))
    setQrCode2(outlook(tempEvent))
    setQrCode3(yahoo(tempEvent))
    setQrCode4(office365(tempEvent))
    console.log(qrCode);
    
  }
  return (
    <div className="App">

     

      <div className='create'>
      
  <h2>Best Buy Event Adder by George</h2>
  <form onSubmit={handleSubmit}>
    <label>Event title: </label>
    <input type="text" 
    value={title} 
    onChange={(e) => setTitle(e.target.value)} required />

    <label>Event description: </label>
    <textarea required  
    value={description}
     onChange={(e) => setDescription(e.target.value)}> 
     </textarea>


<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['DateTimePicker']}>
        <DateTimePicker label="pick a date for the event" onChange={(value) => setSelectedDate(value.$d)}
        />
      </DemoContainer>
    </LocalizationProvider>
    
    <button>Add event: </button>
  </form>
      </div>
    <div>
      
<div style={{   display: 'grid', gridTemplateColumns: 'auto auto auto auto', justifyContent:'center', alignContent:'center', padding: '10px'}}>

  <div style={{padding: '10px'}}>
    <h3>Google </h3>
    <QRCode  size={200} bgColor='#0a4abf' fgColor='#f6eb16' value={qrCode}/>
  </div>
        
  <div style={{padding: '10px'}}>
    <h3>Outlook </h3>
        <QRCode   size={200} bgColor='#0a4abf' fgColor='#f6eb16' value={qrCode2}/>
        </div>

        <div style={{padding: '10px'}}>
    <h3>Yahoo </h3>
        <QRCode  size={200} bgColor='#0a4abf' fgColor='#f6eb16' value={qrCode3}/>
        </div>

        <div style={{padding: '10px'}}>
    <h3>Office365 </h3>
        <QRCode  size={200} bgColor='#0a4abf' fgColor='#f6eb16' value={qrCode4}/>
        </div>

        { console.log("----", qrCode)}</div>
      </div>
    </div>
  );
}

export default App;
