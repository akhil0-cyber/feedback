import { useRef, useState } from 'react';
import FeedbackForm from './components/FeedbackForm';
import AdminDashboard from './components/AdminDashboard';
import { seedFeedback } from './data/seedFeedback';

export default function App() {
  const [feedback, setFeedback] = useState(seedFeedback);
  const [view, setView] = useState('submit');
  const nextId = useRef(seedFeedback.length + 1);

  function addFeedback(entry) {
    setFeedback((prev) => [
      { id: nextId.current++, ...entry, status: 'Open' },
      ...prev,
    ]);
  }

  function updateStatus(id, status) {
    setFeedback((prev) => prev.map((f) => (f.id === id ? { ...f, status } : f)));
  }

  return (
    <div className="app">
      <nav className="rail">
        <div>
          <div className="brand">
            <span className="brand-mark" />
            <span className="brand-name">Loop</span>
          </div>
          <div className="brand-sub">feedback, handled</div>
        </div>
        <div className="tabs">
          <button
            className={'tab-btn' + (view === 'submit' ? ' active' : '')}
            onClick={() => setView('submit')}
          >
            Give feedback
          </button>
          <button
            className={'tab-btn' + (view === 'admin' ? ' active' : '')}
            onClick={() => setView('admin')}
          >
            Admin dashboard
          </button>
        </div>
        <div className="rail-foot">
          React + Vite prototype — data
          <br />
          resets on page reload.
        </div>
      </nav>

      <main className="main">
        {view === 'submit' ? (
          <FeedbackForm onSubmit={addFeedback} />
        ) : (
          <AdminDashboard feedback={feedback} onStatusChange={updateStatus} />
        )}
      </main>
    </div>
  );
}
