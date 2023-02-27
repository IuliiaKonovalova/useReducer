import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import React, { lazy, Suspense } from 'react';


const HomePage = lazy(() => import("./containers/HomePage"));
const TodoPage = lazy(() => import("./containers/TodoPage"));

function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/todo" element={<TodoPage />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;
