import React from 'react';

export default function BookCard({ book, onDelete, onToggleFav, onEdit }) {
  return (
    <div className="book-card">
      <img className="cover" src={book.cover || '../assets/cover1.jpg'} alt={book.title} />
      <div className="book-info">
        <h3>{book.title}</h3>
        <p className="meta">{book.author}</p>
        <p className="meta">{book.genre}</p>
        <div className="rating">
          {Array.from({length: 5}).map((_,i) => (
            <span key={i} className={i < (book.rating||0) ? 'star filled' : 'star'}>★</span>
          ))}
        </div>

        <div className="card-actions">
          <button className="muted" onClick={() => onToggleFav(book.id)}>{book.favorite ? '♥ Retirer favoris' : '♡ Ajouter aux favoris'}</button>
          <button className="muted" onClick={() => onEdit(book)}>Modifier</button>
          <button className="muted danger" onClick={() => onDelete(book.id)}>Supprimer</button>
        </div>
      </div>
    </div>
  );
}
