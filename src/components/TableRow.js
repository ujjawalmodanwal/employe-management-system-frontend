import React, { useState } from 'react';
import './TableRow.css';
import Buttons from './Buttons'
function TableRow(props) {
	var color = "#fcf0f0";
	const [update, setUpdate] = useState(0);
	const [firstName, setFirstName] = useState(props.firstName)
	const [lastName, setLastName] = useState(props.lastName)
	const [email, setEmail] = useState(props.email)
	const [contact, setContact] = useState(props.contact)
	const handleUpdateClick= ()=>{
		setUpdate(!update);
	}
	const handleSaveClick = ()=>{
		const updatedRow = [props.employeId, firstName, lastName, email, contact]
		props.handleDataUpdate(updatedRow)
		setUpdate(!update);
	}
	const handleCancelClick  =()=>{
		setFirstName(props.firstName)
		setLastName(props.lastName)
		setEmail(props.email)
		setContact(props.contact)
		setUpdate(!update)
	}
	if(props.color===1){
		color = "rgb(228, 240, 255)";
	}

	const handleDeleteClick = () =>{
		props.handleDeleteRow(props.employeId)
		console.log("delete")
	}
	const textBoxStyle = {width: "10.5vw" , height: "3vh"}
	if(props.isHeader){
		return( 
			<div className='tableHeader'>
				<div className='tableHeaderCell'>Employe ID</div>
				<div className='tableHeaderCell'>First Name</div>
				<div className='tableHeaderCell'>Last Name</div>
				<div className='tableHeaderCell'>Email</div>
				<div className='tableHeaderCell'>Contact</div>
				<div className='tableHeaderCell-action'>Actions</div>
			</div>
		)
	}
	
	else{
		if(update){
			return (
				<div className='tableRow' style={{backgroundColor : color}}>
					<div className='tableCell'>{props.employeId}</div>
					<div className='tableCell'>
						<input
							style={textBoxStyle}
							type="text" 
							value={firstName}
							onChange={(e) => setFirstName(e.target.value)}
						/>
					</div>
					<div className='tableCell'>
						<input
							style={textBoxStyle}
							type="text" 
							value={lastName}
							onChange={(e) => setLastName(e.target.value)}
						/>
					</div>
					<div className='tableCell'>
						<input
							style={textBoxStyle}
							type="text" 
							value={email}
							onChange={(e) => setEmail(e.target.value)}
						/>
					</div>
					<div className='tableCell'>
						<input
							style={textBoxStyle}
							type="text" 
							value={contact}
							onChange={(e) => setContact(e.target.value)}
						/>
					</div>
					<div className='tableCell-action'>
						<div onClick ={handleSaveClick}>
							<Buttons color="blue" actionName="save"/>
						</div>
						<div onClick={handleCancelClick}>
							<Buttons color="red" actionName="cancel"/>
						</div>
					</div>
				</div>
			)
		}
		else {
			return(
				<div className='tableRow' style={{backgroundColor : color}}>
					<div className='tableCell'>{props.employeId}</div>
					<div className='tableCell'>{props.firstName}</div>
					<div className='tableCell'>{props.lastName}</div>
					<div className='tableCell'>{props.email}</div>
					<div className='tableCell'>{props.contact}</div>
					<div className='tableCell-action'>
						<div onClick ={handleUpdateClick} >
							<Buttons color="blue" actionName="Update"/>
						</div>
						<div onClick = {handleDeleteClick} >
							<Buttons color="red" actionName="Delete"/>
						</div>
							<Buttons color="blue" actionName="View"/>
					</div>
				</div>
			)
		}
	}
}

export default TableRow
