// const { StrictMode } = require('react');
// const { createRoot } = require('react-dom/client')
// const React = require('react');
import React from 'react';
import { StrictMode } from 'react';
// import ReactDom from 'react-dom';
import { createRoot } from 'react-dom/client'
import Baseball from './baseball';
// const Baseball = require('./baseball');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render (
    <StrictMode>
        <Baseball />
    </StrictMode>
);
