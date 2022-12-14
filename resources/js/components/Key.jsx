import React from "react";
import "./Key.css";
import _ from 'lodash';
import { NOTE_TO_KEY } from '../constants.js';

const Key = (props) => {

  let keyClassName = "whiteKey";

  const noteIsFlat = isFlat(props.note.length);
  const keyIsPressed = isPressed(props.note, props.pressedKeys);
  if (noteIsFlat) {
    keyClassName = "blackKey";
  }
  if (keyIsPressed) {
    keyClassName += " pressed";
  }
  let key;
  if (noteIsFlat) {
    key = (
      <div className={keyClassName}></div>
    );
  } else {
    key = (
      <div className={keyClassName}>
        <div className="key-text">
          {props.note.toUpperCase()}
        </div>
      </div>
    );
  }
  return key;
}

function isFlat(length) {
  return length > 2;
}

function isPressed(note, pressedKeys) {
  return _.includes(pressedKeys, NOTE_TO_KEY[note]);
}

export default Key;
