import { DetailSong, ListSong, Playing } from "./components/clone";
import Navbar from "./components/clone/Navbar";
import AppProvider from "./Context";

const App = () => {
  return (
    <AppProvider>
      <Navbar />
      <div className="grid grid-cols-3 w-full h-[calc(100vh-12rem)] bg-teal-700  overflow-hidden">
        <DetailSong />
        <ListSong />
      </div>
      <Playing />
    </AppProvider>
  );
};

export default App;
