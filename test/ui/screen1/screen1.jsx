import React from 'react';
import {Component} from '@frnt/test.ui.component'

export function Screen1({ text }) {
  return (
    <div>
      This is Screen1
      {text}

      Component1
      <Component text={"this is Component1"} />
    </div>
  );
}
