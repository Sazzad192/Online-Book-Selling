import logo from './logo.svg';
import './App.css';
import Blog from './Pages/Blogs/Blog';
import { Container } from '@mui/material';
import Blogs from './Pages/Blogs/Blogs';


function App() {
  return (
    <div className="App">
      <Container>
        <Blogs></Blogs>
      </Container>
    </div>
  );
}

export default App;
