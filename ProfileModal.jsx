import React, { useState } from 'react';

export default function ProfileModal({ user, onClose, setUser }) {
  const [name, setName] = useState(user?.name || '');

  const save = () => {
    setUser({ ...user, name, logged: true });
    onClose();
  };

  return (
    <div className="modal">
      <div className="profile-modal">
        <h3>Profil</h3>
        <label>Nom<input value={name} onChange={e => setName(e.target.value)} /></label>
        <div className="form-actions">
          <button className="primary" onClick={save}>Enregistrer</button>
          <button className="muted" onClick={onClose}>Fermer</button>
        </div>
      </div>
    </div>
  );
}