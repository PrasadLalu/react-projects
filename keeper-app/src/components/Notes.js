import React from 'react';
import notes from '../notes';
import Note from './Note';

function Notes() {
    return (
        <div>
            {notes.map(note => (
                <Note
                    key={note.key}
                    title={note.title}
                    content={note.content}
                />))}
        </div>
    );
}

export default Notes;