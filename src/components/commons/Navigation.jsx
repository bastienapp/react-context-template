import React from 'react';

function Navigation({ children }) {
  return (
    <nav>
      <ul>
        {children.map((link) => (
          <li key={link.props.to}>{link}</li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
