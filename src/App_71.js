import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';


import BlogsStaticPage_71 from './pages/BlogsStaticPage_71';
import BlogsLocalJsonPage_71 from './pages/BlogLocalJsonPage_71';
import BlogsNodeServerPage_71 from './pages/BlogsNodeServerPage_71';
function App_71() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/card_71' element={<BlogsStaticPage_71/>} />
        <Route path='/card2_local_71' element={<BlogsLocalJsonPage_71/>} />
        <Route path='/card2_node_71' element={<BlogsNodeServerPage_71/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App_71;
