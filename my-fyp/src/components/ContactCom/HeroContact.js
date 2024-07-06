import React, { useState } from 'react';
import "./HeroContactStyles.css";
import ContactImage from '../../assets/contact-4.png';

const HeroContact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: '', // Clear the error when the user types
    });

  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate name (only alphabets and spaces)
// Validate name (only alphabets and spaces in the middle)
if (!/^[a-zA-Z]+(\s[a-zA-Z]+)*$/.test(formData.name)) {
  setErrors({
    ...errors,
    name: 'Only alphabets are allowed',
  });
  return;
}

    // Validate email (proper email format)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrors({
        ...errors,
        email: 'Please enter a valid email address',
      });
      return;
    }

    // Validate message (at least 3 words)
    if (formData.message.trim().split(/\s+/).length < 3) {
      setErrors({
        ...errors,
        message: 'Message must contain at least 3 words',
      });
      return;
    }

    // If all validations pass, you can proceed with your form submission logic here
    console.log('Form submitted:', formData);

    // Clear the form data
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div className="contact-page">
      <div className="image-container">
        <img className="conImg" src={ContactImage} alt="Contact" />
      </div>

      <div className="form-container">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.firstname}
            onChange={handleChange}
            required
          />
          {errors.name && <p className="error">{errors.firstname}</p>}

          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          {errors.email && <p className="error">{errors.email}</p>}

          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
          {errors.message && <p className="error">{errors.message}</p>}

          <input type="submit" value="Submit" />
        </form>
      </div>
    </div>
  );
};

export default HeroContact;
