import {React, useState, useEffect} from 'react';
import './App.css';

import Table from '../src/components/Table';
import AddButton from '../src/components/AddButton';
import axios from 'axios';


function App() {
  const [datas, setDatas] = useState([]);
  const fetchEmployesData = () =>{
		axios.get(`https://employe-management-system-backend.onrender.com/api/`).then((response)=>{
      setDatas(response.data)
    }, (error)=>{
      console.log(error)
    });
	}
	useEffect(()=>{
		fetchEmployesData();
	}, [])

  const updateEmployesData = (updatedEmployeData)=>{
    axios.put(`https://employe-management-system-backend.onrender.com/api/${updatedEmployeData.employeId}`, updatedEmployeData).then((reponse)=>{
      console.log(reponse)
    }, (error)=>{
      console.log(error)
    })
  }
  const addEmployesData = (addRow)=>{
    axios.post(`https://employe-management-system-backend.onrender.com/api/create`, addRow).then((reponse)=>{
      console.log(reponse)
    }, (error)=>{
      console.log(error)
    })
  }

  const deleteEmploye = (employeId) =>{
    axios.delete(`https://employe-management-system-backend.onrender.com/api/${employeId}`).then((reponse)=>{
      console.log(reponse)
    }, (error)=>{
      console.log(error)
    })
  }
  const handleDataUpdate = (updatedRow)=>{
    const newData = [...datas]
    const index = newData.findIndex((data)=>data.employeId===updatedRow[0]);
    newData[index].firstName = updatedRow[1]
    newData[index].lastName = updatedRow[2]
    newData[index].emailId = updatedRow[3]
    newData[index].contact = updatedRow[4]
    const updatedEmployeData = {employeId: updatedRow[0], firstName:updatedRow[1], lastName:updatedRow[2], emailId:updatedRow[3], contact:updatedRow[4]}
    console.log(updatedEmployeData)
    updateEmployesData(updatedEmployeData)
    setDatas(newData)
  }
  const handleAddNewRow =(newRow)=>{
    const newDatas = [...datas]
    const newRowAdd = {employeId: newRow[0], firstName:newRow[1], lastName:newRow[2], emailId:newRow[3], contact:newRow[4]}
    newDatas.push(newRowAdd)
    addEmployesData(newRowAdd)
    setDatas(newDatas)
  } 

  const handleDeleteRow = (rowId)=>{
    const newData = [...datas]
    const index = newData.findIndex((data)=>data.employeId===rowId);
    deleteEmploye(rowId)
    newData.splice(index, 1)
    setDatas(newData)
  }
  return (
    <div className="App">
      <h1>Employe List</h1>
      <h3>Total Employees: {datas.length}</h3>
      <div className='main-section'>
        <AddButton handleAddNewRow = {handleAddNewRow}/>
        <Table datas = {datas} handleDataUpdate = {handleDataUpdate} handleDeleteRow = {handleDeleteRow}/>
      </div>
    </div>
  );
}

export default App;
