import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import FacebookEmojiCounter from './FacebookEmoji';
import ToggleMode from './ToggleModeComponent';

ReactDOM.render(
  <React.Fragment>
    <h2>Task 1: Facebook Emoji Counter</h2>
    <FacebookEmojiCounter type="Like" />
    <FacebookEmojiCounter type="Love" />
    <FacebookEmojiCounter type="happy" />

    <h2>Task 2: Toggle Mood</h2>
    <ToggleMode />
  </React.Fragment>,
  document.getElementById('root')
);
