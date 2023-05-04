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
              <li><Link to="/form">Form</Link></li>
            </ul>
          </nav>
          <Routes>
            <Route exact path="/" element={<Home/>}/>
            <Route exact path="/form" element={<Form/>}/>
          </Routes>
        </BrowserRouter>
      </Container>

    </div>
  );
}

export default App;
