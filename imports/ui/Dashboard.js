import React from 'react';

import PrivateHeader from './PrivateHeader';
import NoteList from './NoteList';

export default function Dashboard() {
  return (
    <div>
      <PrivateHeader />
      <NoteList />
    </div>
  );
}