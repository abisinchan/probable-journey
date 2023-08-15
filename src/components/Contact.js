import React, { useState } from 'react';
import '../css/Contact.css'; // Import your custom CSS file

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [fieldNotifications, setFieldNotifications] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
    setFieldNotifications({ ...fieldNotifications, [name]: '' });
  };

  const handleInputBlur = (event) => {
    const { name, value } = event.target;

    if (!value) {
      setFieldNotifications({ ...fieldNotifications, [name]: `${name} is required` });
    } else {
      setFieldNotifications({ ...fieldNotifications, [name]: '' });
    }

    if (name === 'email') {
      if (!value) {
        setFieldNotifications({ ...fieldNotifications, email: 'Email is required' });
      } else if (!isValidEmail(value)) {
        setFieldNotifications({ ...fieldNotifications, email: 'Invalid email address' });
      } else {
        setFieldNotifications({ ...fieldNotifications, email: '' });
      }
    }
  };

  const isValidEmail = (email) => {
    const pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return pattern.test(email);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Display a message to the user explaining that the form doesn't send emails
    alert("Message Sent!\nNote: This form does not send emails. It's a client-side demonstration.");
  
    // Clear form data
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div>
        <h2>Contact Me</h2>
    <div className="contact">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required
          />
        </label>
        {fieldNotifications.name && <p className="notification">{fieldNotifications.name}</p>}
        <label>
          Email:
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required
          />
        </label>
        {fieldNotifications.email && <p className="notification">{fieldNotifications.email}</p>}
        <label>
          Message:
          <textarea
            name="message"
            value={formData.message}
            onChange={handleInputChange}
            onBlur={handleInputBlur}
            required
          />
        </label>
        {fieldNotifications.message && <p className="notification">{fieldNotifications.message}</p>}
        <button type="submit">Submit</button>
      </form>
    </div>
    </div>
  );
}

export default Contact;
