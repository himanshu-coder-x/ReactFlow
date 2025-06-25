import React from 'react';
import './Sidebar.css';

const Sidebar = ({ blocks }) => {
  return (
    <div className="sidebar">
      <h3>Draggable Elements</h3>
      {blocks.map(block => (
        <div
          key={block.id}
          className="draggable-block"
          draggable
          onDragStart={(e) => {
            e.dataTransfer.setData('application/reactflow', JSON.stringify(block));
            e.dataTransfer.effectAllowed = 'move';
          }}
        >
          {block.label}
        </div>
      ))}
    </div>
  );
};

export default Sidebar;
