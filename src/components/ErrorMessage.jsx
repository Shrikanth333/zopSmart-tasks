import React from 'react';
function ErrorMessage(props) {
  console.log(props);
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div> {props.error} net problem</div>
    </div>
  );
}

export default ErrorMessage;
