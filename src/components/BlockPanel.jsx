import React from 'react';
import blocks from '../data/blocks.json';

export default function BlockPanel() {
  const onDragStart = (event, nodeType) => {
    event.dataTransfer.setData('application/reactflow', nodeType);
    event.dataTransfer.effectAllowed = 'move';
  };

  return (
    <aside className="border-start border-secondary bg-light p-3" style={{ width: '14rem' }}>
      <h3 className="h5 fw-semibold mb-4">Draggable Elements</h3>
      {blocks.map(block => (
        <div
          key={block.id}
          className="bg-white border border-secondary rounded text-center p-2 mb-3"
          style={{ cursor: 'grab' }}
          onDragStart={event => onDragStart(event, block.label)}
          draggable
        >
          {block.label}
        </div>
      ))}
    </aside>
  );
}
