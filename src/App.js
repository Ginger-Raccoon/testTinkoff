import s from './app.module.css';
import { Routes, Route } from 'react-router-dom';
import { NotFound } from './components/notFound/notFound';
import { Main } from './components/main/main';
import { Theme } from './components/theme/theme';
import { Test } from './components/test/test';
import { Result } from './components/result/result';


function App() {
  return (
    <div className={s.app}>
      <Routes>
        <Route path="*" element={<NotFound />}/>

        <Route path="/" element={<Main />} />
        <Route path='/theme/:id' element={<Theme />} />
        <Route path='/test/:id' element={<Test />} />
        <Route path='/result/:id' element={<Result />} />
      </Routes>
    </div>
  );
}

export default App;
