import { useState } from "react";
import ManageContact from "./component/Contact/ManageContact";
import ContactList from "./component/ContactList/ContactList";
import Header from "./component/Header/Header";


function App() {
const [contact, setContact]= useState([]);
const addContact = (data)=>{
  setContact([...contact, data])
  console.log(data, "from app.js")
}

  return (
    <div className="App">
      <Header />
      <ManageContact addContact = {addContact} />
      <ContactList  contact ={contact}/>
    </div>
  );
}

export default App;
