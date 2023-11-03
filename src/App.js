
import React, { useState } from "react";
import './index.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const [word, setWord] = useState('');

  const checkPalindrome = (wordToCheck) => {
    let alphanumericOnly = wordToCheck.toLowerCase().match(/[a-z0-9]/g);
    if (!alphanumericOnly) {
      toast.error('No alphanumeric characters found in the text');
      return;
    }
    alphanumericOnly = alphanumericOnly.join('');
    const reversedWord = alphanumericOnly.split('').reverse().join('');
    if (alphanumericOnly === reversedWord) {
      toast.success('The text is a palindrome');
    } else {
      toast.error('The word is not a palindrome');
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    checkPalindrome(word);
  }

  return (
    <div className="App">
      <div className="container">
        <h1>PALINDROME CHECKER</h1>
        <form onSubmit={handleSubmit}>
          <input
            type='text'
            placeholder="Enter a word to check "
            value={word}
            onChange={(e) => { setWord(e.target.value) }}
          />
          <button type="submit">Check</button>
        </form>
        <ToastContainer />
      </div>
    </div>
  );
}

export default App;



