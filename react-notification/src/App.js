import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './App.css';
const CustomToast = ({closeToast})=>{
return(
  <div>
    Something went wrong
    <button onClick={closeToast}>Close</button>
  </div>
)
}
const NewNotify = ({closeToast})=>{
  return(
  <div>
    Info New Notification!
  <button onClick={closeToast}>Close</button>
  </div>
  )
}
function App() {
  const notify = () => {
    toast('Hello Geeks 4', {
      position: "top-center",
      autoClose: 1000
    });
    toast.error('Error', {
      position: "top-left",
      autoClose:8000
    })
    toast.success('Logged in', {
      position: "bottom-left"  
    }) // default auto close time is 5sec!

    toast.info('Info Notification', {
      position: "bottom-right",
      autoClose:false
    })
    toast.warning(<CustomToast />, {
      position: "bottom-center"
    })
    toast(<NewNotify />,{
      position:"top-right"
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
