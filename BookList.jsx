import React from 'react';
import BookCard from './BookCard';

export default function BookList({ books, onDelete, onToggleFav, onEdit }) {
  return (
    <div className="grid">
      {books.length === 0 && <p>Aucun livre trouvé.</p>}
      {books.map(book => (
        <BookCard key={book.id} book={book} onDelete={onDelete} onToggleFav={onToggleFav} onEdit={onEdit} />
      ))}
    </div>
  );
}
