import React, { useState } from 'react'
import emailjs from 'emailjs-com'

//import axios from 'axios'
//import {Redirect } from 'react-router-dom'

export default function Contact(){
    // const [ name, getName ] = useState('')    
    // const [ email, getEmail ] = useState('')    
    // const [ message, getMessage ] = useState('')
	const [ confirm, setConfirm ] = useState(false)

    //const [ redirect, setRedirect ] = useState(false)     

    // //when user clicks(event) submit button(target) hangleSubmit triggered
    // //handleSubmit takes values from state and stores inside a const payload
    //const sendEmail = async (e) => {

	function sendEmail(e) {
        e.preventDefault()
		setConfirm(true)
		//resetState() 

		//axios sends payload to database from state
        // axios.post('http://localhost:4000/api/sendemail', {			
        //     	name,
        //     	email,
		// 		message
        // }, {withCredentials: true})		
		// emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
		// .then(res => {
        //     //console.log(res)
        //     resetState() 
        // })
		// .catch(err => {
        //     console.log(err)
        // })

		emailjs.sendForm('service_m8pxu8e', 'template_fhstbmg', e.target, 'user_GFWpzMCefGHbxm5kltU5n')
		.then(result => {
			console.log(result.text);
			//resetState() 
		})
		.catch(error => {
			console.log(error.text);
		})
		
		e.target.reset()

    //    //setRedirect(true)

        //then returns state back to empty string if adding more or use windows.location = '/' to go homepage
        // const resetState = () => {
        //      this.setState({
		// 		name: '',
		// 		email: '',
		// 		message: ''
        //      }) 
    	// }	
 
   // if(redirect) return <Redirect to="/" />   
	}
	
	return (
		<div className="contact_form">
			<div className="form-div">
				<form className="contact_form"
				onSubmit={sendEmail}
				//method='post'
				>
					<input className="contact_input"
						type="text"
						name="name"
						placeholder="Name"
						maxlength="30"
						// onChange={e => {
						// 	getName(e.target.value)
						// }}                        
						// value={name}
					/>
											
					<input className="contact_input"
						type="text"
						name="email"
						placeholder="Email address"
						maxlength="40"
						// onChange={e => {
						// 	getEmail(e.target.value)
						// }}                        
						// value={email}
					/>	
					<textarea className="contact_input"
						type="text"
						name="message"
						placeholder="Message"
						maxlength="40"
						// onChange={e => {
						// 	getMessage(e.target.value)
						// }}                        
						// value={message}
					/>


					<input
						className='contact_btn'
						type="submit"
						value="Submit"
					/>		

					{confirm && <span> Thank you for contacting me. I'll respond within 24 hours.</span>}												
				</form>

			</div>	
		</div>				
	)
}	