import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';

function App() {
  const notify = () => {
    toast('Hello Geeks 4',{
      position: "top-center"
    });
    toast.error('Hello',{
      position:"top-left"
    })
    toast.success('Logged in',{
      position:"bottom-left"
    })

    toast.info('Info Notification',{
      position:"bottom-right"
    })
  }

  return (
    <div className="App">
      <h1>React Notification</h1>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
}

export default App;
