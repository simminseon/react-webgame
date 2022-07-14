const { StrictMode } = require('react');
const { createRoot } = require('react-dom/client')
const React = require('react');

const Baseball = require('./baseball');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render (
    <StrictMode>
        <Baseball />
    </StrictMode>
);