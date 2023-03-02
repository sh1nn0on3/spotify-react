import Navbar from './components/clone/Navbar';
import AppProvider from './Context';

const App = () => {
  return (
    <AppProvider>
      <Navbar></Navbar>
    </AppProvider>
  );
};

export default App;