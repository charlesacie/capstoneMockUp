import React, { useState } from 'react';
import { db } from '../firebase'; // Ensure Firestore is imported correctly
import { collection, addDoc } from 'firebase/firestore';

const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Add a new document to the "users" collection in Firestore with only name and email
      await addDoc(collection(db, 'users'), {
        name,
        email,
      });
      console.log("User successfully added to Firestore"); // Log on successful submission
      setSuccess('Sign-up successful! Thank you for joining.');
      setError('');
      // Clear form fields after submission
      setEmail('');
      setName('');
    } catch (error) {
      console.error("Error adding user to Firestore:", error); // Log any error
      setError('Failed to sign up: ' + error.message);
      setSuccess('');
    }
  };

  return (
    <div className="signup-form">
      <h2>Sign Up for Updates</h2>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {success && <p style={{ color: 'green' }}>{success}</p>}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
