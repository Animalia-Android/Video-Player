import React from 'react';
import '../components/Loading.css';

export default function Loading() {
  return (
    <div>
      <div className="skeleton-video" />
      <div className="ui segment">
        <div className="skeleton title" />
        <div className="skeleton line" />
        <div className="skeleton line" />
      </div>
    </div>
  );
}
