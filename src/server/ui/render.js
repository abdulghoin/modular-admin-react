import "babel-polyfill";
import React from 'react';
import ReactDOMServer from 'react-dom/server';

// Index component
import Index from '../../browser/index.react';

// Render application
export default function render(req, res, next) {
  try {
    const html = ReactDOMServer.renderToStaticMarkup(<Index/>);
    
    res.send(html);
  } catch (e) {
    next(e);
  }
}