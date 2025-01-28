import React from "react";
import AppRoute from './route/route';
import AppLayout from './components/layout/index'
import './App.css';

function App() {
  return (
    <div className="App">
      <AppLayout>
        <AppRoute />
      </AppLayout>
    </div>
  );
}

export default App;
