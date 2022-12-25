import {React, useState} from 'react';
import './AddButton.css';
import Buttons from './Buttons';
function AddButton(props) {
  const [addNew, setAddNew] = useState(0);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [contact, setContact] = useState('');
  const [employeId, setEmployeId] = useState('');
  const handleAddClick = () =>{
    setAddNew(!addNew);
  }
  const handleCancelClick = () => {
    setFirstName('')
    setLastName('')
    setEmail('')
    setContact('')
    setEmployeId('')
    setAddNew(!addNew);
  }
  const handleNewRow = ()=>{
    const newRow = [ employeId, firstName, lastName, email, contact];
    props.handleAddNewRow(newRow)
  }

  const getAddForm = () =>{
    return (
      <div >
        <form className='add-form'>
          <label>
            Employe ID
            <br/>
            <input
              style={{width: "11.5vw" , height: "3vh"}}
              type="text"
              onChange={(e) => setEmployeId(e.target.value)}
            />
          </label>
          <label>
            First Name
            <br/>
            <input
              style={{width: "11.5vw" , height: "3vh"}}
              type="text" 
              onChange={(e) => setFirstName(e.target.value)}
            />
          </label>
          <label>
            Last Name
            <br/>
            <input
              style={{width: "11.5vw" , height: "3vh"}}
              type="text" 
              onChange={(e) => setLastName(e.target.value)}
            />
          </label>
          <label>
            Email
            <br/>
            <input
              style={{width: "11.5vw" , height: "3vh"}}
              type="text" 
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>
          <label>
            Contact
            <br/>
            <input
              style={{width: "11.5vw" , height: "3vh"}}
              type="text" 
              onChange={(e) => setContact(e.target.value)}
            />
          </label>
          <div className='add-section-action-buttons'>
            <div onClick={handleNewRow}>
              <Buttons color="blue" actionName="save"/>
            </div>
            <div onClick = {handleCancelClick}>
              <Buttons color="red" actionName="cancel" />
            </div>
          </div>
        </form>
      </div>
    )
  }
  return (
    <div className='add-section'>
      <div className='add-button' onClick={handleAddClick}>
        Add Employe
      </div>
      {addNew ? getAddForm() : <></>}
    </div>
  )
}

export default AddButton
