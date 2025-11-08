import React, { useState } from 'react';
import ProfileModal from './ProfileModal';

export default function Header({ user, setUser }) {
  const [openProfile, setOpenProfile] = useState(false);

  const logout = () => {
    setUser({ name: '', logged: false });
    // simple: remain in app but logged false
  };

  return (
    <header className="header">
      <div className="brand">
        <h2>Book Club</h2>
      </div>

      <div className="header-center">
        <div className="search-placeholder">🔍 Rechercher un livre</div>
      </div>

      <div className="header-right">
        <button className="icon-btn" onClick={() => setOpenProfile(true)}>❤️ Favoris</button>
        <div className="user" onClick={() => setOpenProfile(true)}>
          <div className="avatar">{(user.name || 'U').slice(0,1)}</div>
          <span>{user.name || 'Invité'}</span>
        </div>
        <button className="link" onClick={logout}>Déconnexion</button>
      </div>

      {openProfile && <ProfileModal user={user} onClose={() => setOpenProfile(false)} setUser={setUser} />}
    </header>
  );
}