import React from 'react';
import ReactDOM from 'react-dom/client';

// React.createElement => Object => HTML(DOM)

let heading1 = React.createElement('h1', { key: 'heading1' }, 'Heading 1');

let heading2 = React.createElement('h1', { key: 'heading2' }, 'Heading 2');

let container = React.createElement('div', { key: 'container' }, [
  heading1,
  heading2,
]);

// JSX => Syntax extension to JavaScript - Developed by Facebook Developer
// JSX => React.createElement => Object => HTML(DOM) (Babel is converting JSX syntax into React.createElement syntax)

let heading3 = <h1 key='heading3'>Heading 3</h1>;

let Title = () => <h1 key='title'>Title</h1>;

// React Component
// - Functional Component - NEW way
// - Class Based Component - OLD way

// Functional component is nothing but a normal javascript function
// Name of component starts with capital letter, it is not mandatory but it is a good practice.

const HeaderComponent = () => {
  //   return <h1>Namaste React Functional Component</h1>;
  return (
    <div>
      {heading3}
      {Title()}

      {/* Component composition : Component inside component, passing component in component */}
      <Title />

      <h1>This is a h1 tag.</h1>
      <h1>This is another H1 tag.</h1>
    </div>
  );
};

let root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<HeaderComponent />);
