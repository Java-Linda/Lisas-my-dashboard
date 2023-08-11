import { useState } from 'react';
import Dashboard from './Dashboard';
import Sidebar from './Sidebar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <section id='app'>
      <Sidebar />
      <Dashboard />
    </section>
  );
}

export default App;
