import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { toastMsg } from './msgEvent';

export function Form() {
   const [formData, setFormData] = useState({
      name: '',
      email: '',
      phone: ''
   });

   const handleChange = (e) => {
      const { name, value } = e.target;
      setFormData({
         ...formData,
         [name]: value
      });
   };

   const handleSubmit = (e) => {
      e.preventDefault();
      const templateParams = {
         from_name: formData.name,
         from_email: formData.email,
         cc_email: 'gmail.com@625933', // CC email address
         phone_number: formData.phone 
      };

      emailjs
         .send(
            'service_0rvq10s', // Your service ID
            'template_5mtq0z5', // Your template ID
            templateParams,
            'LT5DE1PFQwTno1Mtt' // Your user ID
         )
         .then(
            (response) => {
               console.log('SUCCESS!', response.status, response.text);
               toastMsg.success('Email sent successfully');
            },
            (error) => {
               console.log('FAILED...', error);
               toastMsg.error(error);
            }
         );
      // console.log(formData);
   };

   return (
      <div className="form">

         <form onSubmit={handleSubmit}>
            <div className="group">
               <label htmlFor="name">Name</label>
               <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="group">
               <label htmlFor="email">Email</label>
               <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
               />
            </div>
            <div className="group">
               <label htmlFor="phone">Phone Number</label>
               <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
               />
            </div>
            <button type="submit">Submit</button>
         </form>
      </div>

   );
}

