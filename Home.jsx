
import React, { useState } from 'react';
import Header from '../components/Header';
import SearchBar from '../components/SearchBar';
import BookList from '../components/BookList';
import FavoritesList from '../components/FavoritesList';
import BookForm from '../components/BookForm';
import useLocalStorage from '../hooks/useLocalStorage';


const initialBooks = [
  { id: 'b1', title: 'Le Petit Prince', author: 'Antoine de Saint-Exupery', genre: 'Roman', rating: 4, cover: '/assets/cover1.jpg' },
  { id: 'b2', title: '1984', author: 'George Orwell', genre: 'Roman', rating: 5, cover: '/assets/cover2.jpg' },
  { id: 'b3', title: 'Sapiens', author: 'Yuval Noah Harari', genre: 'Histoire', rating: 3, cover: '/assets/cover3.jpg' },
];

export default function Home() {
  const [books, setBooks] = useLocalStorage('books', initialBooks);
  const [user, setUser] = useLocalStorage('user', { name: 'John Doe', logged: true });
  const [query, setQuery] = useState('');
  const [showForm, setShowForm] = useState(false);
  const [editingBook, setEditingBook] = useState(null);

  const addBook = (book) => {
    setBooks(prev => [{ ...book, id: 'b' + Date.now() }, ...prev]);
    setShowForm(false);
  };

  const updateBook = (updated) => {
    setBooks(prev => prev.map(b => b.id === updated.id ? updated : b));
    setEditingBook(null);
    setShowForm(false);
  };

  const removeBook = (id) => {
    setBooks(prev => prev.filter(b => b.id !== id));
  };

  const toggleFavorite = (id) => {
    setBooks(prev => prev.map(b => b.id === id ? { ...b, favorite: !b.favorite } : b));
  };

  const startEdit = (book) => {
    setEditingBook(book);
    setShowForm(true);
  };

  const filtered = books.filter(b =>
    b.title.toLowerCase().includes(query.toLowerCase()) ||
    b.author.toLowerCase().includes(query.toLowerCase()) ||
    b.genre.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div        >
        
    


      <Header user={user} setUser={setUser} />
      <main className="container">
        <div className="top-row">
          <h1>Liste des livres disponibles</h1>
          <div>
            <button className="primary" onClick={() => { setShowForm(true); setEditingBook(null); }}>Ajouter un livre</button>
            <button className="muted" onClick={() => setBooks(initialBooks)}>
  🔄 Réinitialiser la liste
</button>
          </div>
        </div>

        <SearchBar value={query} onChange={setQuery} />

        <BookList
          books={filtered}
          onDelete={removeBook}
          onToggleFav={toggleFavorite}
          onEdit={startEdit}
        />

        <h2>Mes favoris</h2>
        <FavoritesList books={books.filter(b => b.favorite)} onEdit={startEdit} onToggleFav={toggleFavorite} />

        {showForm && (
          <BookForm
            onClose={() => { setShowForm(false); setEditingBook(null); }}
            onAdd={addBook}
            onUpdate={updateBook}
            editing={editingBook}
          />
        )}
      </main>
    </div>
  );
}

