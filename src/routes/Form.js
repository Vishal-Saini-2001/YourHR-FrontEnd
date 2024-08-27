import React, { useState } from 'react';
import axios from 'axios';
import "../css/form.css"
import { useNavigate } from 'react-router-dom';

const Form = () => {
  const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [pdf, setPdf] = useState(null);

  const handleFileChange = (e) => {
    setPdf(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('name', name);
    formData.append('email', email);
    formData.append('pdf', pdf);

    await axios.post('https://yourhr-backend-9kv9.onrender.com/upload', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        },
      })
      .then((res)=>{
        alert(res.data);
        if(res.status==200)navigate('/users');
      })
      .catch(err=>alert(err.response.data.msg))
  };

  return (
    <div id='form'>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} required />
        </div>
        <div>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div>
          <label>PDF:</label>
          <input type="file" accept="application/pdf" onChange={handleFileChange} required />
        </div>
        <button type="submit">Upload</button>
      </form>
    </div>
  );
}

export default Form