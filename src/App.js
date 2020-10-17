import React from 'react';
import './App.css';

import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

toast.configure();
const notifyMe = () => {
  toast('Hello There');
}

const notifyOnPosition = () => {
  toast('Hello There',{ position: toast.POSITION.TOP_LEFT});
  toast('Hello There',{ position: toast.POSITION.TOP_CENTER});
  toast('Hello There',{ position: toast.POSITION.TOP_RIGHT});
  toast('Hello There',{ position: toast.POSITION.BOTTOM_LEFT});
  toast('Hello There',{ position: toast.POSITION.BOTTOM_CENTER});
  toast('Hello There',{ position: toast.POSITION.BOTTOM_RIGHT});
}

const notifyOnType= () => {
  toast.success('Success Notification');
  toast.warn('Warn Notification');
  toast.info('Info Notification');
  toast.error('Error Notification');
}

const onHandleAutoClose= () => {
  toast.success('default: It closes after 5000');
  toast.warn('Change AutoClose to 8000', { autoClose: 8000});
  toast.info('Prevent AutoClose', {autoClose: false});
}

const CustomToast = ({closeToast }) => {
  return(
    <>
    <div>
      Something goes wrong
    </div>
    <button onClick={closeToast}>Close</button>
    </>
  )
}

const onNotifyCustom = () => {
  toast.error(<CustomToast/>)
}
function App() {
  return (
    <div className="App">
      <button onClick={notifyMe}>Click Here</button>
      <button onClick={notifyOnPosition}>Test Position</button>
      <button onClick={notifyOnType}>Test Type</button>
      <button onClick={onHandleAutoClose}>Test AutoClose</button>
      <button onClick={onNotifyCustom}>Test Custom Toast</button>
    </div>
  );
}

export default App;
