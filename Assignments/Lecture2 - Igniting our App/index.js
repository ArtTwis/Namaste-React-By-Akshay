import React from 'react';
import ReactDOM from 'react-dom/client';

let heading1 = React.createElement('h1', { key: 'heading1' }, 'Heading 1');

let heading2 = React.createElement('h2', { key: 'heading2' }, 'Heading 2');

let container = React.createElement('div', { key: 'container' }, [
  heading1,
  heading2,
]);

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(container);
