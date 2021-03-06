import React from 'react';
import ReactDOM from 'react-dom';

/**
 * 渲染子应用
 */
function Render(props:any) {
  const { loading } = props;

  return (
    <>
      {loading && <h4 className="subapp-loading">Loading...</h4>}
      <div id="subapp-viewport" />
    </>
  );
}

export default function render({ loading}: any) {
  const container = document.getElementById('container');
  ReactDOM.render(<Render loading={loading} />, container);
}