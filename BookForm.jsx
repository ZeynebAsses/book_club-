import React, { useState, useEffect } from 'react';

export default function BookForm({ onClose, onAdd, onUpdate, editing }) {
  const [form, setForm] = useState({
    title: '', author: '', genre: '', rating: 3, cover: ''
  });

  useEffect(() => {
    if (editing) setForm(editing);
  }, [editing]);

  const submit = (e) => {
    e.preventDefault();
    if (editing) onUpdate(form);
    else onAdd(form);
  };

  return (
    <div className="modal">
      <form className="book-form" onSubmit={submit}>
        <h3>{editing ? 'Modifier le livre' : 'Ajouter un livre'}</h3>
        <label>Titre<input value={form.title} onChange={e => setForm({...form, title: e.target.value})} required/></label>
        <label>Auteur<input value={form.author} onChange={e => setForm({...form, author: e.target.value})} required/></label>
        <label>Genre<input value={form.genre} onChange={e => setForm({...form, genre: e.target.value})} /></label>
        <label>Note (1-5)<input type="number" min="1" max="5" value={form.rating} onChange={e => setForm({...form, rating: Number(e.target.value)})} /></label>
        <label>Couverture (URL)<input value={form.cover} onChange={e => setForm({...form, cover: e.target.value})} /></label>

        <div className="form-actions">
          <button type="submit" className="primary">{editing ? 'Enregistrer' : 'Ajouter'}</button>
          <button type="button" className="muted" onClick={onClose}>Annuler</button>
        </div>
      </form>
    </div>
  );
}