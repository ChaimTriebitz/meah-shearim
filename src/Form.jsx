import React, { useState } from 'react';

export function Form() {
   const [formData, setFormData] = useState({
      firstName: '',
      lastName: '',
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
      // Handle form submission
      console.log(formData);
   };

   return (
      <form className="contact-form" onSubmit={handleSubmit}>
         <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
               type="text"
               id="firstName"
               name="firstName"
               value={formData.firstName}
               onChange={handleChange}
               required
            />
         </div>
         <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
               type="text"
               id="lastName"
               name="lastName"
               value={formData.lastName}
               onChange={handleChange}
               required
            />
         </div>
         <div className="form-group">
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
         <div className="form-group">
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
   );
}

