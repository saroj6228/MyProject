import React, { useState } from 'react';

function EmojiDisplay() {
  const [inputText, setInputText] = useState('');
  const [emoji, setEmoji] = useState('');

  // Function to handle input change and set emoji based on the input value
  const handleChange = (event) => {
    const value = event.target.value.toLowerCase();
    setInputText(value);

    // Set emoji based on input text
    if (value === 'happy') {
      setEmoji('😊'); // You can replace with image path if needed
    } else if (value === 'like') {
      setEmoji('👍');
    } else if (value === 'sad') {
      setEmoji('😢');
    } else {
      setEmoji(''); // Clear emoji if no match
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <input
        type="text"
        value={inputText}
        onChange={handleChange}
        placeholder="Type 'Happy', 'Like', or 'Sad'"
      />
      <label style={{ fontSize: '2rem', marginLeft: '10px' }}>
        {emoji}
      </label>
    </div>
  );
}

export default EmojiDisplay;
