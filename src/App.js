import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import NavBar from './routes/navigation/NavBar';
import Authentication from './routes/authentication/Authentication';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index={true} element={<Home />} />
        <Route path='auth' element={<Authentication />} />
      </Route>
    </Routes>
  );
};

export default App;
