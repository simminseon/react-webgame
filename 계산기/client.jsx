const { createRoot } = require('react-dom/client');
const React = require('react');

const Calculator = require('./calculator');

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Calculator />
);