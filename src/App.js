import { Landing } from "./Components/Landing";
import { SnackbarProvider } from 'notistack'
import Modal from 'react-modal'; 

function App() {
  Modal.setAppElement('#root');
  return (
    <div className="App">
       <SnackbarProvider>
      <Landing/>
      </SnackbarProvider>
    </div>
  );
}

export default App;
