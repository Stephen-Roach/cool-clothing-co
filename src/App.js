import { Routes, Route } from 'react-router-dom';
import Home from './routes/home/Home';
import NavBar from './routes/navigation/NavBar';
import SignIn from './routes/sign-in/SignIn';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<NavBar />}>
        <Route index={true} element={<Home />} />
        <Route path='sign-in' element={<SignIn />} />
      </Route>
    </Routes>
  );
};

export default App;
