import React from 'react';
import TableRow from './TableRow.js';
import './Table.css';

function Table(props) {
  const datas = props.datas
  return (
    <div className='table'>
        <TableRow isHeader={1}/>
        {
          datas.map((data)=><TableRow handleDeleteRow = {props.handleDeleteRow} handleDataUpdate = {props.handleDataUpdate} isHeader = {0} employeId={data.employeId} firstName = {data.firstName} lastName = {data.lastName} email = {data.emailId} color = {data.employeId%2} contact = {data.contact}/>)
        }
    </div>
  )
}

export default Table
