import { BrowserRouter, Route, Routes, Link } from 'react-router-dom';
import Container from '@mui/material/Container';

import Home from '../src/components/home/home';
import Form from '../src/components/form/form';

function App() {
  return (
    <div>
      <Container fixed>
        <BrowserRouter>
        <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/mobile">Mobile</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/mobile" element={<Form/>}/>
          </Routes>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default App;
