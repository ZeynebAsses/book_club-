import React from 'react';

export default function FavoritesList({ books, onEdit, onToggleFav }) {
  if (!books || books.length === 0) {
    return <p>Vous n'avez pas encore de favoris.</p>;
  }

  return (
    <div className="fav-list">
      {books.map(b => (
        <div key={b.id} className="fav-item">
          <img src={b.cover || '/assets/cover1.jpg'} alt={b.title} />
          <div>
            <h4>{b.title}</h4>
            <p>{b.author}</p>
          </div>
          <div>
            <button className="muted" onClick={() => onEdit(b)}>Modifier</button>
            <button className="muted" onClick={() => onToggleFav(b.id)}>Retirer</button>
          </div>
        </div>
      ))}
    </div>
  );
}
