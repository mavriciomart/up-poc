import React from 'react';
import ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import { Application } from './Components/Application';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: Application,
  domElementGetter: () => document.getElementById('application-container')
});

export const { bootstrap } = reactLifecycles;
export const { mount } = reactLifecycles;
export const { unmount } = reactLifecycles;
