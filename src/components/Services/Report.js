import React, { useState } from 'react';

function Report() {
  const [name, setName] = useState('');
  const [sambung, setSambung] = useState('');
  const [phone, setPhone] = useState('');
  const [complaint, setComplaint] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(`Name: ${name}, No. Sambung: ${sambung}, Phone: ${phone}, Complaint: ${complaint}`);
  };

  return (
    <div>
      <h2>Report</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <br />
        <label>
          No. Sambung:
          <input type="text" value={sambung} onChange={(e) => setSambung(e.target.value)} />
        </label>
        <br />
        <label>
          Phone:
          <input type="text" value={phone} onChange={(e) => setPhone(e.target.value)} />
        </label>
        <br />
        <label>
          Complaint:
          <textarea value={complaint} onChange={(e) => setComplaint(e.target.value)} />
        </label>
        <br />
        <button type="submit">Kirim</button>
      </form>
    </div>
  );
}

export default Report;
