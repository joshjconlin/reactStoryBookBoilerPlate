import React, { PropTypes } from 'react';
import Paper from 'material-ui/Paper';

function StoryBookLayout({ componentName, children }) {
  return (
    <div>
      <Paper style={{ padding: 16, backgroundColor: '#FFF' }}>
        <h1 style={{ margin: 0 }}>{componentName}</h1>
      </Paper>
      <div
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        {children}
      </div>
    </div>
  );
}

StoryBookLayout.propTypes = {
  componentName: PropTypes.any,
  children: PropTypes.any,
};

export default StoryBookLayout;
