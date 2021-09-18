import React from 'react';
  
const PageAbout : React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'left',
        alignItems: 'left',
        height: '100vh'
      }}
    >
      <h1>This is my about page!</h1>
    </div>
  );
};
  
export default PageAbout;